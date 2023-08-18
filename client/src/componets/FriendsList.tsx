import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { RootState } from "./redux/store/ReduxStore";
import ChatApp from "./ChatApp";
import {
  StyledFriendsArea,
  StyledMessageArea,
  StyledMessageContainer,
} from "./styled/FriendsListStyle";

export interface Friend {
  username: string;
  isFriend: boolean;
}

function FriendList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [friends, setFriends] = useState<Friend[]>([]);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null | string>(
    null
  );
  const currentUser = useSelector(
    (state: RootState) => state.loggedIn.username
  );

  useEffect(() => {
    axios
      .post("http://localhost:4000/api/FriendsList", {
        currentUser: currentUser,
      })
      .then((response) => {
        // console.log(response.data);
        setFriends(response.data.friends);
      })
      .catch((error) => {
        console.error("Error fetching friends:", error);
      });
  }, [currentUser]);

  return (
    <>
      <Button onClick={onOpen}>Friends</Button>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setSelectedFriend(null);
        }}
        size={"full"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Message Chat</ModalHeader>{" "}
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <ModalCloseButton />
          <ModalBody>
            <StyledMessageContainer>
              <StyledFriendsArea>
                {friends.map((friend, index) => (
                  <p
                    key={index}
                    onClick={() => setSelectedFriend(friend.username)}
                    style={{ cursor: "pointer", display: "flex" }}
                  >
                    {friend.username}
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17cV3nQWEEGa_372zoeHXJDaye8XQpeu1jQ&usqp=CAU"
                      alt=""
                      style={{
                        width: " 50px",
                        position: "relative",
                        left: "30px",
                      }}
                    />
                  </p>
                ))}
              </StyledFriendsArea>
              <StyledMessageArea>
                {selectedFriend && (
                  <ChatApp friend={selectedFriend} currentUser={currentUser} />
                )}
              </StyledMessageArea>
            </StyledMessageContainer>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default FriendList;
