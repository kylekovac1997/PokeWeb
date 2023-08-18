import { useSelector } from "react-redux";
import { RootState } from "../componets/redux/store/ReduxStore";
import FriendList from "../componets/FriendsList";
import { Wrap, WrapItem } from "@chakra-ui/react";
import {
  ProfilePic,
  TopHeader,
  UserDescription,
  UserInfo,
} from "../componets/styled/UserPageStyle";

const UserPage = () => {
  const userData = useSelector((state: RootState) => state.loggedIn);
  console.log(userData);
  return (
    <>
      {" "}
      <TopHeader></TopHeader>
      <Wrap
        w="900px"
        h="900px"
        style={{
          backgroundColor: " #ffffff",
          borderBottom: "solid 100px transparent",
          borderTop: "solid 40px transparent",
        }}
      >
        {" "}
        <ProfilePic src={userData.profilePic} />
        <WrapItem>
          <UserInfo>
            <h3>{userData.username}</h3>
            <h4>{userData.email}</h4>
            <FriendList />
          </UserInfo>{" "}
          <UserDescription>
            <h2>ABOUT</h2>
            <br />
            <p>{userData.description}</p>
          </UserDescription>
        </WrapItem>
      </Wrap>
    </>
  );
};

export default UserPage;
