import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { LoginForm } from "../pages/login/Login";
import { Logout } from "../pages/Logout";
import { useSelector } from "react-redux";

import { useMemo } from "react";

import { RootState } from "./redux/store/ReduxStore";
import { Avatar, WrapItem } from "@chakra-ui/react";
import FriendList from "./FriendsList";
import AddFriend from "./AddFriend";

function NavigationBar() {
  const userData = useSelector((state: RootState) => state.loggedIn);
  const memoizedUserLoggedIn = useMemo(() => userData, [userData]);

  const isLoggedIn = memoizedUserLoggedIn.isLoggedIn;

  return (
    <Navbar
      style={{
        backgroundColor: "rgba(200, 200, 200, 1)",
        width: "100%",
        height: "100px",
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="src/images/main/pokemonLogo-removebg-preview.png"
            alt="pokemon-logo"
            width={"100px"}
          />
        </Navbar.Brand>

        {isLoggedIn && (
          <Nav.Link as={Link} to="/UserPage">
            <WrapItem>
              <Avatar
                size="lg"
                src={userData.profilePic}
                style={{ border: "2px solid gold" }}
              />
            </WrapItem>
          </Nav.Link>
        )}
        <div style={{ margin: "20px" }}>{isLoggedIn && <FriendList />}</div>
        <div style={{ margin: "20px" }}>{isLoggedIn && <AddFriend />}</div>
        <Nav className="me-auto">
          <Nav.Link href="#FORUM">FORUM</Nav.Link>
        </Nav>
        {isLoggedIn ? <Logout /> : <LoginForm />}
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
