import { Center } from "@chakra-ui/react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 15px;
  align-content: center;
  background-color: white;
  max-width: 900px;
  width: 1200px;
  min-width: 250px;
  padding: 10px;
`;

export const StyledMain = styled(Card)`
  position: relative;
  border-color: transparent;
  margin: 5px;
  max-width: 600px;
  &:hover {
    animation: jump 0.2s;
  }

  @keyframes jump {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const StyledCenterSmall = styled(Card)`
  position: relative;
  border-color: transparent;
  display: flex;
  flex-wrap: wrap;
  margin: 5px;
  max-width: 250px;
  max-height: 150px;
  height: 170px;
  &:hover {
    animation: jump 0.2s;
  }

  @keyframes jump {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const StyledCenterSmallText = styled(Card.Text)`
  width: 127px;
  height: 110px;
`;

export const StyledCenterSmallImg = styled(Card.Img)`
  max-width: 100px;
  max-height: 150px;
  height: 150px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 5px;
`;

export const StyledCenterSmallBody = styled(Card.Body)`
  background-color: #cda173;
  border-start-end-radius: 5px;
  border-end-end-radius: 5px;
`;

export const StyledMedium = styled(Card)`
  position: relative;
  border-color: transparent;
  margin: 5px;
  max-width: 259px;
  bottom: 270px;
  &:hover {
    animation: jump 0.2s;
  }

  @keyframes jump {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const StyledLarge = styled(Card)`
  position: relative;
  border-color: transparent;
  margin: 5px;
  max-width: 295px;
  &:hover {
    animation: jump 0.2s;
  }

  @keyframes jump {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
