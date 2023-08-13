import { NavLink } from "react-router-dom";

import {
  BottomNavColorRow,
  ContainerStyled,
  NavBarStyled,
  NavStyled,
} from "./styled/secondNavBar/styledSecondNavBar";

function SecondNavBar() {
  return (
    <>
      <NavBarStyled>
        <ContainerStyled>
          <NavStyled>
            <NavLink to="/">Home</NavLink>

            <NavLink to="/Pokebox">PokeBox</NavLink>
            <NavLink to="/Game">Game</NavLink>
            <NavLink to="/PokeTV">PokeTV</NavLink>
            <NavLink to="/News">News</NavLink>
            <NavLink to="/Card">Trading Card Game</NavLink>
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
