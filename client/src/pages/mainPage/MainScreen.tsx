import { Card } from "react-bootstrap";
import {
  Container,
  LeftSideContainer,
  RightSideContainer,
  StyledMedium,
} from "../../componets/styled/mainPageStyledComponets/MainScreenStyling";
import History from "./History";

import Events from "./Events";
import LatestPokemonCards from "./LatestPokemonCards";
import LatestNews from "./LatestNews";
function MainScreen() {
  return (
    <>
      <Container style={{ borderTop: "white solid 20px" }}>
        <LeftSideContainer>
          <Events />
          <LatestPokemonCards />
          <LatestNews />
        </LeftSideContainer>
        <RightSideContainer>
          <br />
          <StyledMedium>
            <Card.Img variant="top" src="src/images/background.gif" />
            <Card.Body
              style={{
                backgroundColor: "#0796ad",
                borderEndStartRadius: "5px",
                borderEndEndRadius: "5px",
              }}
            >
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </StyledMedium>
          <br />
          <StyledMedium>
            <Card.Img variant="top" src="src/images/background.gif" />
            <Card.Body
              style={{
                backgroundColor: "#0796ad",
                borderEndStartRadius: "5px",
                borderEndEndRadius: "5px",
              }}
            >
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </StyledMedium>{" "}
          <History />
        </RightSideContainer>
        <br />

        {/* <br />
        <StyledMediumRightBottom>
          <Card.Img variant="top" src="src/images/background.gif" />
          <Card.Body
            style={{
              backgroundColor: "#0796ad",
              borderEndStartRadius: "5px",
              borderEndEndRadius: "5px",
            }}
          >
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </StyledMediumRightBottom> */}
      </Container>
    </>
  );
}

export default MainScreen;
