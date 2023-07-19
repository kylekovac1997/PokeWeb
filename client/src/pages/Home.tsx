import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Home() {
  return (
    <Container style={{ marginTop: "130px" }}>
      <Row>
        <Col style={{ border: "red 1px solid" }}>1 of 3</Col>
        <Col xs={6} style={{ border: "red 1px solid" }}>
          2 of 3 (wider)
        </Col>
        <Col style={{ border: "red 1px solid" }}>3 of 3</Col>
      </Row>
      <Row>
        <Col style={{ border: "red 1px solid" }}>1 of 3</Col>
        <Col xs={5} style={{ border: "red 1px solid" }}>
          2 of 3 (wider)
        </Col>
        <Col style={{ border: "red 1px solid" }}>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default Home;
