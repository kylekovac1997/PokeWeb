import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import {
  BottomNavColorRow,
  ContainerStyled,
  NavBarStyled,
  NavStyled,
} from "./styled/styledSecondNavBar";

function SecondNavBar() {
  return (
    <>
      <NavBarStyled>
        <ContainerStyled>
          <NavStyled styled={{}}>
            <Nav as={Link} to="/">
              Home
            </Nav>

            <Nav as={Link} to="/Pokebox">
              PokeBox
            </Nav>
            <Nav as={Link} to="/Game">
              Game
            </Nav>
            <Nav as={Link} to="/PokeTV">
              PokeTV
            </Nav>
            <Nav as={Link} to="/News">
              News
            </Nav>
            <Nav as={Link} to="/TradingCardGame">
              Trading Card Game
            </Nav>
          </NavStyled>
        </ContainerStyled>
      </NavBarStyled>
      <BottomNavColorRow>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </BottomNavColorRow>
    </>
  );
}

export default SecondNavBar;
