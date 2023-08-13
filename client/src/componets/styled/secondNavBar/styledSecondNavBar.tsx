import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBarStyled = styled(Navbar)`
  border-top: #9b9b9b 2px solid;
  border-bottom: #e9e5e5 2px solid;
  background-color: white;
  width: 100%;
  height: 90px;
  position: relative;
`;

export const ContainerStyled = styled(Container)`
  height: 100%;
  width: 925px;
`;

const linkColors = ["red", "orange", " #ffbb00", "green", " #00eeff", "blue"];
export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin-bottom: -6px;
  & a {
    /* border: 1px blue solid; */
    width: 100%;
    height: 90px;

    display: flex;
    justify-content: center;
    align-items: center;
    color: #5c5c5c;
  }
  & a:nth-child(1) {
    &:hover {
      color: white;
      background-color: ${linkColors[0]};
    }
    &:focus,
    &.active {
      color: white;
      background-color: ${linkColors[0]};
    }
  }
  & a:nth-child(2) {
    &:hover {
      color: white;
      background-color: ${linkColors[1]};
    }
    &:focus,
    &.active {
      color: white;
      background-color: ${linkColors[1]};
    }
  }
  & a:nth-child(3) {
    &:hover {
      color: white;
      background-color: ${linkColors[2]};
    }
    &:focus,
    &.active {
      color: white;
      background-color: ${linkColors[2]};
    }
  }
  & a:nth-child(4) {
    &:hover {
      color: white;
      background-color: ${linkColors[3]};
    }
    &:focus,
    &.active {
      color: white;
      background-color: ${linkColors[3]};
    }
  }
  & a:nth-child(5) {
    &:hover {
      color: white;
      background-color: ${linkColors[4]};
    }
    &:focus,
    &.active {
      color: white;
      background-color: ${linkColors[4]};
    }
  }
  & a:nth-child(6) {
    &:hover {
      color: white;
      background-color: ${linkColors[5]};
    }
    &:focus,
    &.active {
      color: white;
      background-color: ${linkColors[5]};
    }
  }
`;

export const BottomNavColorRow = styled.div`
  width: 901px;
  height: 7px;
  margin-top: -2px;
  z-index: 1;
  display: flex;

  & > div {
    width: 100%;
    flex: 1;
  }
  & > div:nth-child(1) {
    background-color: ${linkColors[0]};
    border-bottom-left-radius: 15px;
  }

  & > div:nth-child(2) {
    background-color: ${linkColors[1]};
  }

  & > div:nth-child(3) {
    background-color: ${linkColors[2]};
  }

  & > div:nth-child(4) {
    background-color: ${linkColors[3]};
  }

  & > div:nth-child(5) {
    background-color: ${linkColors[4]};
  }

  & > div:nth-child(6) {
    background-color: ${linkColors[5]};
    border-bottom-right-radius: 15px;
  }
`;
