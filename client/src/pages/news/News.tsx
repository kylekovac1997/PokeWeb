import { Wrap } from "@chakra-ui/react";
import { Card } from "react-bootstrap";
import NewsData from "./NewsData.json";
import {
  StyledCardList,
  StyledCardTextDate,
  StyledCardTextSeries,
} from "../../componets/styled/mainPageStyledComponets/pages/cardPage/CardsPageStyled";
import { useNavigate } from "react-router-dom";

function News() {
  const navigate = useNavigate();

  const handleClick = (name: string) => {
    navigate(`/News/${name}`);
  };
  return (
    <Wrap
      spacing="10px"
      justify="center"
      w="900px"
      style={{ backgroundColor: " #ffffff" }}
    >
      {NewsData.map((data, index) => (
        <StyledCardList key={index} onClick={() => handleClick(data.name)}>
          <Card.Img variant="top" src={data.divImage} />
          <Card.Body
            style={{
              borderEndStartRadius: "5px",
              borderEndEndRadius: "5px",
            }}
          >
            <StyledCardTextSeries>{data.type}</StyledCardTextSeries>
            <StyledCardTextDate>{data.date}</StyledCardTextDate>
            <h6>{data.name}</h6>
          </Card.Body>
        </StyledCardList>
      ))}
    </Wrap>
  );
}

export default News;
