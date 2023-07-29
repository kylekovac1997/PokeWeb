import { Box, Container } from "@chakra-ui/react";
import React from "react";

function MessageBoard() {
  return (
    <>
      <Container bg="blue.600" centerContent>
        <Box padding="4" bg="blue.400" color="black" maxW="md">
          There are many benefits to a joint design and development system. Not
          only does it bring benefits to the design team, but it also brings
          benefits to engineering teams. It makes sure that our experiences have
          a consistent look and feel, not just in our design specs, but in
          production.
        </Box>
      </Container>
      ;
    </>
  );
}

export default MessageBoard;
