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
  const accessToken = localStorage.getItem("accessToken");
  const addFriendMutation = useMutation(({ username }: { username: string }) =>
    axios
      .post(
        "http://localhost:4000/api/AddFriend",
        {
          username: username,
          currentUser: currentUser,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
  );

  const removeFriendMutation = useMutation(
    ({ username }: { username: string }) =>
      axios
        .post(
          "http://localhost:4000/api/removeFriend",
          {
            username: username,
            currentUser: currentUser,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
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
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const friendData = response.data.friends;
      return friendData.some(
        (friend: { username: string }) => friend.username === username
      );
    } catch (error) {
      return false;
    }
  };

  const handleClick = async ({ username }: { username: string }) => {
    const isAlreadyFriend = await fetchFriendStatus(username);

    if (!isAlreadyFriend) {
      await addFriendMutation.mutateAsync({ username });
      updateFriendStatus(username, true);
    }
  };

  const handleRemoveClick = async ({ username }: { username: string }) => {
    await removeFriendMutation.mutateAsync({ username });
    updateFriendStatus(username, false);
  };

  const updateFriendStatus = (username: string, isFriend: boolean) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.username === username ? { ...user, isFriend } : user
      )
    );
  };

  useEffect(() => {
    const fetchFriendsAndUsers = async () => {
      try {
        const friendsResponse = await axios.post(
          "http://localhost:4000/api/FriendsList",
          {
            currentUser: currentUser,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const allUsersResponse = await axios.get(
          "http://localhost:4000/api/AllUsers",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

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
  }, [isOpen, currentUser, handleClick, handleRemoveClick]);

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
                    {user.isFriend ? (
                      <>
                        <Button
                          style={{ margin: "15px" }}
                          colorScheme="red"
                          onClick={() =>
                            handleRemoveClick({ username: user.username })
                          }
                          disabled={removeFriendMutation.isLoading}
                        >
                          {removeFriendMutation.isLoading
                            ? "Removing..."
                            : "Remove Friend"}
                        </Button>
                        <span style={{ margin: "15px" }}>Already Added</span>
                      </>
                    ) : (
                      <Button
                        style={{ margin: "15px" }}
                        colorScheme="blue"
                        onClick={() => handleClick({ username: user.username })}
                        disabled={addFriendMutation.isLoading}
                      >
                        {addFriendMutation.isLoading ? "Adding..." : "Add"}
                      </Button>
                    )}
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
