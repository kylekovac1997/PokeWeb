import { useParams } from "react-router-dom";
import CardsData from "../CardsData.json";
import { Wrap } from "@chakra-ui/react";
import { Card } from "react-bootstrap";

function CardInfoPage() {
  const { name } = useParams();

  const selectedCard = CardsData.find((card) => card.name === name);

  if (!selectedCard) {
    return <div>Card not found</div>;
  }

  return (
    <Wrap
      spacing="10px"
      padding="10px"
      w="900px"
      style={{
        backgroundColor: " #ffffff",
        borderBottom: "solid 100px transparent",
        borderTop: "solid 40px transparent",
      }}
    >
      <Card style={{ width: "270px", height: "290px" }}>
        <Card.Img
          src={selectedCard.divImage}
          variant="top"
          style={{ border: "#e7e7e7 5px solid" }}
        />
        <Card.Text
          style={{
            backgroundColor: " #a8a7a7",
            marginBottom: "-5px",
            height: "50px",
          }}
        >
          Series
          <span
            style={{
              fontWeight: "530",
              marginLeft: "50px",
            }}
          >
            Scarlet & Violet Series
          </span>
        </Card.Text>
        <Card.Text style={{ backgroundColor: " #d1d1d1" }}>
          Release Date{" "}
          <span
            style={{
              fontWeight: "530",
              marginLeft: "20px",
              justifyItems: "center",
            }}
          >
            {selectedCard.date}
          </span>
        </Card.Text>
        <Card.Text
          style={{
            backgroundColor: " #a8a7a7",
            marginBottom: "-5px",
            height: "50px",
            marginTop: "-17px",
          }}
        >
          Number Of Cards
          <span
            style={{
              fontWeight: "530",
              marginLeft: "50px",
            }}
          >
            {selectedCard.numberOfCards}
          </span>
        </Card.Text>
        <Card.Text style={{ backgroundColor: " #d1d1d1" }}>
          Standard Legal Deck?
          <span
            style={{
              fontWeight: "530",
              marginLeft: "20px",
              justifyItems: "center",
            }}
          >
            {selectedCard.legalDeck}
          </span>
        </Card.Text>
      </Card>
      <div>
        <h3>{selectedCard.name}</h3>
        <img src={selectedCard.pageImage} alt={selectedCard.pageImage} />{" "}
      </div>
      {selectedCard.description}
      <div>
        {selectedCard.info.map((info, index) => (
          <ul>
            <li key={index}>{info}</li>
          </ul>
        ))}
      </div>
    </Wrap>
  );
}

export default CardInfoPage;
