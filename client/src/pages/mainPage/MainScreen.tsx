import { Text, Square, HStack } from "@chakra-ui/react";
import MessageBoard from "../../componets/MessageBoard";
import {
  StyledCenter,
  StyledSquare,
} from "../../componets/styled/mainPageStyledComponets/MainScreenStyling";
import History from "./History";
function MainScreen() {
  return (
    <>
      <div style={{ margin: "10px" }}>
        <HStack color="white" gap={10} style={{ position: "relative" }}>
          <StyledCenter>
            <Text>
              <MessageBoard />
              <MessageBoard />
            </Text>
          </StyledCenter>

          <History />
        </HStack>
        <HStack color="white" gap={10} style={{ position: "relative" }}>
          <StyledCenter>
            <Text>
              <MessageBoard />
            </Text>
          </StyledCenter>

          <StyledSquare>
            <MessageBoard />
            <Text>Box 2</Text>
          </StyledSquare>
        </HStack>
      </div>
    </>
  );
}

export default MainScreen;
