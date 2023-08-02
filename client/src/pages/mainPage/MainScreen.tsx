import { Card } from "react-bootstrap";
import MessageBoard from "../../componets/MessageBoard";
import {
  Container,
  StyledCenterSmall,
  StyledCenterSmallBody,
  StyledCenterSmallImg,
  StyledCenterSmallText,
  StyledLarge,
  StyledMain,
  StyledMedium,
} from "../../componets/styled/mainPageStyledComponets/MainScreenStyling";
import History from "./History";
function MainScreen() {
  return (
    <>
      <Container>
        <StyledMain>
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
        </StyledMain>
        <br />
        <History />
        <br />
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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </StyledLarge>
        <br />
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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </StyledLarge>
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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </StyledMedium>
        <br />
      </Container>
    </>
  );
}

export default MainScreen;
