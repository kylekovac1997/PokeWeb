import { Box, Center, Image } from "@chakra-ui/react";
import styled from "styled-components";

export const StyledCenter = styled(Center)`
  flex: 1;
  width: 100px;
  background-color: green;
  transition: transform 0.9s;
  margin: 5px;
  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledSquare = styled(Center)`
  flex: 1;
  width: 250px;
  margin: 5px;
  margin-top: -163px;
  transition: transform 0.9s;
  &:hover {
    transform: scale(1.05);
  }
`;

<Box boxSize="sm">
  <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
</Box>;
