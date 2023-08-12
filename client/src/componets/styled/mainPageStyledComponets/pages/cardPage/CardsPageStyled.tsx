import { Card } from "react-bootstrap";
import styled from "styled-components";

export const StyledCardList = styled(Card)`
  position: relative;
  border-color: transparent;
  margin: 5px;
  max-width: 295px;
  width: 280px;
  &:hover {
    animation: jump 0.2s;
    background-color: aliceblue;
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

export const StyledCardTextDate = styled(Card.Text)`
  font-size: 15px;
  color: grey;
  margin-top: -20px;
`;
export const StyledCardTextSeries = styled(Card.Text)`
  font-size: 12px;
  color: #ff0303;
`;
