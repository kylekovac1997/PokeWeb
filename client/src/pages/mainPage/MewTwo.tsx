import { Card } from "react-bootstrap";
import { StyledLarge } from "../../componets/styled/mainPageStyledComponets/MainScreenStyling";
import { useNavigate } from "react-router-dom";

function MewTwo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/MewTwoPage");
  };
  return (
    <StyledLarge onClick={handleClick}>
      <Card.Img
        variant="top"
        src="https://scarletviolet.pokemon.com/_images/mew/raid/fpo-mew-raid-xl.jpg"
      />
      <Card.Body
        style={{
          backgroundColor: "#0796ad",
          borderEndStartRadius: "5px",
          borderEndEndRadius: "5px",
        }}
      >
        <Card.Text>
          Add Mew to your team and challenge a Mewtwo with the Mightiest Mark!
        </Card.Text>
      </Card.Body>
    </StyledLarge>
  );
}

export default MewTwo;
