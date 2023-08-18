import { ReactNode } from "react";
import styled from "styled-components";
import loadingPokeBallGif from "../images/PokeballLoading.gif";
import { Wrap } from "@chakra-ui/react";
interface LoadingProps {
  children: ReactNode;
}

const BallAnimation = styled.div`
  position: relative;
  background-image: url("${loadingPokeBallGif}");
  background-repeat: no-repeat;
  background-position: center;
  width: 90px;
  height: 250px;
  margin: auto;
  margin-top: -10px;
`;

export const PokeBallLoading: React.FC<LoadingProps> = ({ children }) => {
  return (
    <Wrap
      spacing="10px"
      padding="10px"
      w="900px"
      h="600px"
      style={{
        backgroundColor: " #ffffff",
        borderBottom: "solid 100px transparent",
        borderTop: "solid 40px transparent",
        justifyContent: "center",
      }}
    >
      <BallAnimation>{children}</BallAnimation>;
    </Wrap>
  );
};
