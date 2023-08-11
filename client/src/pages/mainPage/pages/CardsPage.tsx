import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import { Card } from "react-bootstrap";

function CardsPage() {
  return (
    <Wrap
      spacing="10px"
      justify="center"
      w="880px"
      style={{ backgroundColor: " #ffffff" }}
    >
      <Card style={{ width: "850px", marginTop: "10px" }}>
        <Card.Img
          variant="top"
          src="src/images/main/pages/latestPokeCards/topDiv.png"
        />
        <Card.Body style={{ backgroundColor: "#272727" }}>
          <Card.Text style={{ color: "#ffffff" }}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <WrapItem>
        <Center w="250px" h="80px" bg="red.200">
          Box 1
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="250px" h="80px" bg="green.200">
          Box 2
        </Center>
      </WrapItem>

      <WrapItem>
        <Center w="250px" h="80px" bg="blue.200">
          Box 3
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="250px" h="80px" bg="blackAlpha.500">
          Box 4
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="250px" h="80px" bg="blackAlpha.500">
          Box 5
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="250px" h="80px" bg="blackAlpha.500">
          Box 6
        </Center>
      </WrapItem>
    </Wrap>
  );
}

export default CardsPage;
