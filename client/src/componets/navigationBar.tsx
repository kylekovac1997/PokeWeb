import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { LoginForm } from "../pages/login/Login";
import { Logout } from "../pages/Logout";
import { useDispatch, useSelector } from "react-redux";
import { UserLoggedIn } from "./redux/user/UserLoggedIn";
import { useEffect, useMemo } from "react";
import { setUserLoginStatus } from "./redux/login/LoggedIn";
import { RootState } from "./redux/store/ReduxStore";

function NavigationBar() {
  const dispatch = useDispatch();
  const userLoggedIn = useSelector((state: RootState) => UserLoggedIn(state));
  const memoizedUserLoggedIn = useMemo(() => userLoggedIn, [userLoggedIn]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    if (accessToken && refreshToken && !isLoggedIn) {
      dispatch(
        setUserLoginStatus({
          isLoggedIn: true,
          username: memoizedUserLoggedIn.username,
          accessToken: accessToken,
          refreshToken: memoizedUserLoggedIn.refreshToken,
        })
      );
    }
  }, [
    dispatch,
    memoizedUserLoggedIn.accessToken,
    memoizedUserLoggedIn.refreshToken,
  ]);
  const isLoggedIn = memoizedUserLoggedIn.isLoggedIn;

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
          {isLoggedIn && (
            <Nav.Link as={Link} to="/UserPage">
              UserPage
            </Nav.Link>
          )}
        </Nav>
        {isLoggedIn ? <Logout /> : <LoginForm />}
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
