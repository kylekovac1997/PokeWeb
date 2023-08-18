import { ReactNode } from "react";
import styled from "styled-components";
import loadingPokeBallGif from "../images/PokeballLoading.gif";
interface LoadingProps {
  children: ReactNode;
}

const BallAnimation = styled.div`
  background-image: url("${loadingPokeBallGif}");
  background-repeat: no-repeat;
  background-position: center;
  width: 90px;
  height: 250px;
  margin: auto;
  margin-top: 100px;
`;

export const PokeBallLoading: React.FC<LoadingProps> = ({ children }) => {
  return <BallAnimation>{children}</BallAnimation>;
};
