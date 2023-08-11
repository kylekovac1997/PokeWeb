import { Card } from "react-bootstrap";
import { StyledMain } from "../../componets/styled/mainPageStyledComponets/MainScreenStyling";
import { useNavigate } from "react-router-dom";
function Events() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/EventsPage");
  };

  return (
    <StyledMain onClick={handleClick}>
      <Card.Img
        variant="top"
        src="src/images/main/events/WorldChampBackground.jpeg"
      />
      <Card.Body
        style={{
          backgroundColor: "#8f8f8f",
          borderEndStartRadius: "5px",
          borderEndEndRadius: "5px",
        }}
      >
        <Card.Text>
          <h4>Meet the north American Players you'll be Cheering For</h4>
          <p style={{ color: " #535151" }}>
            Learn more about some of the stars competing in the 2023 Pokemon
            World Championships in Yokohama.
          </p>
        </Card.Text>
      </Card.Body>
    </StyledMain>
  );
}

export default Events;
