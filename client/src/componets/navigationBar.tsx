import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { LoginForm } from "../pages/login/Login";
import { Logout } from "../pages/Logout";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store/ReduxStore";

function NavigationBar() {
  const userLoggedIn = useSelector(
    (state: RootState) => state.loggedIn.isLoggedIn
  );

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
