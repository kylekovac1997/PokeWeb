import { Wrap } from "@chakra-ui/react";
import { Card } from "react-bootstrap";
import CardsData from "./CardsData.json";
import {
  StyledCardList,
  StyledCardTextDate,
  StyledCardTextSeries,
} from "../../../componets/styled/mainPageStyledComponets/pages/cardPage/CardsPageStyled";
import { useNavigate } from "react-router-dom";

function CardsPage() {
  const navigate = useNavigate();

  const handleClick = (name: string) => {
    navigate(`/Card/${name}`);
  };
  return (
    <Wrap
      spacing="10px"
      justify="center"
      w="900px"
      style={{ backgroundColor: " #ffffff" }}
    >
      <Card
        style={{
          maxWidth: "850px",
          marginTop: "25px",
          border: "none",
        }}
      >
        <Card.Img
          variant="top"
          src="src/images/main/pages/latestPokeCards/topDiv.png"
        />
        <Card.Body
          style={{
            backgroundColor: "#272727",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <Card.Text style={{ color: "#ffffff" }}>
            Pokémon TCG: Scarlet & Violet-Paldea Evolved
          </Card.Text>
        </Card.Body>
      </Card>

      {CardsData.map((data, index) => (
        <StyledCardList key={index} onClick={() => handleClick(data.name)}>
          <Card.Img variant="top" src={data.divImage} />
          <Card.Body
            style={{
              borderEndStartRadius: "5px",
              borderEndEndRadius: "5px",
            }}
          >
            <StyledCardTextSeries>Scarlet & Violet Series</StyledCardTextSeries>
            <StyledCardTextDate>{data.date}</StyledCardTextDate>
            <h6>{data.name}</h6>
          </Card.Body>
        </StyledCardList>
      ))}
    </Wrap>
  );
}

export default CardsPage;
