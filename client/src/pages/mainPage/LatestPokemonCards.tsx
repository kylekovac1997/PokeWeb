import React from "react";
import { Card } from "react-bootstrap";
import { StyledLarge } from "../../componets/styled/mainPageStyledComponets/MainScreenStyling";
import { useNavigate } from "react-router-dom";

function LatestPokemonCards() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Card/Scarlet%20&%20Violet—151");
  };
  return (
    <>
      <StyledLarge onClick={handleClick}>
        <Card.Img
          variant="top"
          src="src/images/main/pages/latestPokeCards/mainImage.png"
        />
        <Card.Body
          style={{
            backgroundColor: "#0796ad",
            borderEndStartRadius: "5px",
            borderEndEndRadius: "5px",
          }}
        >
          <Card.Text>View the latest collection!</Card.Text>
        </Card.Body>
      </StyledLarge>
    </>
  );
}

export default LatestPokemonCards;
