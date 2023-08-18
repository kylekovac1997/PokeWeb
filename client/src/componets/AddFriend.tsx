import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store/ReduxStore";
import { useMutation } from "react-query";

interface Users {
  username: string;
  _id: string;
  isFriend: boolean;
}

function AddFriend() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [users, setUsers] = useState<Users[]>([]);
  const currentUser = useSelector(
    (state: RootState) => state.loggedIn.username
  );

  useEffect(() => {
    const fetchFriendsAndUsers = async () => {
      try {
        const friendsResponse = await axios.post(
          "http://localhost:4000/api/FriendsList",
          {
            currentUser: currentUser,
          }
        );
        const allUsersResponse = await axios.get(
          "http://localhost:4000/api/AllUsers"
        );

        console.log("Friend Data:", friendsResponse.data);
        console.log("All Users Data:", allUsersResponse.data);

        const friendData = friendsResponse.data.friends;
        const updatedUsers = allUsersResponse.data.map((user: Users) => ({
          ...user,
          isFriend: friendData.some(
            (friend: { username: string }) => friend.username === user.username
          ),
        }));

        setUsers(updatedUsers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchFriendsAndUsers();
  }, [isOpen, currentUser]);

  const addFriendMutation = useMutation(({ username }: { username: string }) =>
    axios
      .post("http://localhost:4000/api/AddFriend", {
        username: username,
        currentUser: currentUser,
      })
      .then((response) => {
        console.log(response.data);
      })
  );

  const fetchFriendStatus = async (username: string) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/FriendsList",
        {
          currentUser: currentUser,
        }
      );

      const friendData = response.data.friends;
      // console.log("Friend Data:", friendData);

      const isAlreadyFriend = friendData.some(
        (friend: { username: string }) => friend.username === username
      );

      console.log("isAlreadyFriend:", isAlreadyFriend);
      return isAlreadyFriend;
    } catch (error) {
      console.error("Error fetching friend status:", error);
      return false;
    }
  };

  const handleClick = async ({ username }: { username: string }) => {
    const isAlreadyFriend = await fetchFriendStatus(username);

    if (!isAlreadyFriend) {
      addFriendMutation.mutate({ username });
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Find Users</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Find Friends</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {users.map((user) => (
              <div key={user._id}>
                {user.username !== currentUser && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h4>{user.username}</h4>
                    <Button
                      style={{ margin: "15px" }}
                      colorScheme="blue"
                      onClick={() => handleClick({ username: user.username })}
                      disabled={addFriendMutation.isLoading || user.isFriend}
                    >
                      {addFriendMutation.isLoading
                        ? "Adding..."
                        : user.isFriend
                        ? "Already Added"
                        : "Add"}
                    </Button>
                  </div>
                )}
                {addFriendMutation.isError && (
                  <span style={{ color: "red" }}>Error adding friend</span>
                )}
              </div>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddFriend;
