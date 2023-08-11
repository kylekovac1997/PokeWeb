import React from "react";
import { Card } from "react-bootstrap";
import { StyledLarge } from "../../componets/styled/mainPageStyledComponets/MainScreenStyling";

function Test() {
  return (
    <StyledLarge>
      <Card.Img variant="top" src="src/images/background.gif" />
      <Card.Body
        style={{
          backgroundColor: "#0796ad",
          borderEndStartRadius: "5px",
          borderEndEndRadius: "5px",
        }}
      >
        <Card.Text>
          Some quick Testsdavksdexample text to build on the card title and make
          up the bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </StyledLarge>
  );
}

export default Test;
