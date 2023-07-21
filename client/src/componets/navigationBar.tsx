import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { LoginForm } from "../pages/login/Login";
import { Logout } from "../pages/Logout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store/ReduxStore";
import { useEffect } from "react";
import { setUserLoginStatus } from "./redux/login/LoggedIn";

function NavigationBar() {
  const userLoggedIn = useSelector(
    (state: RootState) => state.loggedIn.isLoggedIn
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if the user is already logged in (e.g., valid access token present in localStorage or a cookie)
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken && refreshToken) {
      // You might want to add a check for the token's validity here
      // For example, you could check if the token is expired or revoked
      const username = localStorage.getItem("username") || ""; // Get the username if needed
      dispatch(setUserLoginStatus({ isLoggedIn: true, username: username }));
      console.log(accessToken);
    }
  }, [dispatch]);
  return (
    <Navbar bg="transparent">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="src/images/main/pokemonLogo-removebg-preview.png"
            alt="pokemon-logo"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/Home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/Pokebox">
            PokeBox
          </Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          {userLoggedIn && (
            <Nav.Link as={Link} to="/UserPage">
              UserPage
            </Nav.Link>
          )}
        </Nav>
        {userLoggedIn ? <Logout /> : <LoginForm />}
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
