import { Wrap } from "@chakra-ui/react";
import {
  MewPageContainer,
  ReceiveMewContainer,
  StyledMewImage,
  StyledImgBanner,
  StyledTopImage,
  TestDiv,
} from "../../../componets/styled/mainPageStyledComponets/pages/mewTwo/MewTwoPageStyle";
import { Card } from "react-bootstrap";

function MewTwoPage() {
  return (
    <>
      <TestDiv />
      <StyledImgBanner>
        <img
          src="https://scarletviolet.pokemon.com/_images/global/en/pokemon-scarlet-logo-medium-up.webp"
          style={{
            position: "relative",
            float: "right",
            right: "10px",
            width: "120px",
          }}
        />{" "}
        <img
          src="https://scarletviolet.pokemon.com/_images/global/en/pokemon-violet-logo-medium-up.webp"
          style={{
            position: "relative",
            float: "right",
            right: "20px",
            width: "120px",
          }}
        />
      </StyledImgBanner>
      <StyledTopImage>
        {" "}
        <img
          src="https://scarletviolet.pokemon.com/images/logo-switch.svg"
          style={{ position: "relative", float: "right" }}
        />
      </StyledTopImage>

      <Wrap
        spacing="10px"
        justify="center"
        w="100%"
        style={{ backgroundColor: " #ffffff" }}
      >
        <MewPageContainer>
          <h1>Get Mew and Mewtwo!</h1>
          <br />
          <section style={{ width: "700px" }}>
            <p style={{ fontSize: "20px" }}>
              Add Mew to your team and challenge a Mewtwo with the Mightiest
              Mark!
            </p>
            <p style={{ fontSize: "20px" }}>
              During this event, you’ll be able to use the Mystery Gift feature
              to receive the Mythical Pokémon Mew, which cannot be encountered
              via normal gameplay. With your very own Mew and some powerful
              allies by your side, you’ll be ready to take on a Mewtwo with the
              Mightiest Mark in Tera Raid Battles. Keep an eye out for other
              activities featuring Mew and Mewtwo!
            </p>
          </section>

          <StyledMewImage />

          <Card
            style={{
              maxWidth: "400px",
              marginLeft: "100px",
              border: " 1px solid gold",
            }}
          >
            <Card.Img
              variant="top"
              src="https://scarletviolet.pokemon.com/_images/mew/intro/fpo-mew-card.jpg"
            />
            <Card.Body
              style={{
                backgroundColor: "#ffffff",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              <Card.Text style={{ color: "#070707", fontSize: "20px" }}>
                <strong style={{ fontSize: "30px" }}>
                  Add Your Very Own Mew to Your Team!
                </strong>
                <br />
                <p>
                  Categorized as the New Species Pokémon, Mew is a Mythical
                  Pokémon that can learn any move and is said to possess the
                  genetic codes of all Pokémon. Each Trainer’s Mew will arrive
                  with a different Tera Type, Nature, and move set. These
                  differences mean your Mew is truly a Mew of your very own! Use
                  the hashtag #MyveryownMew to share your special Mew with the
                  rest of the world, then enjoy your adventures together as you
                  travel across the Paldea region, throughout the land of
                  Kitakami, and into Blueberry Academy.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          <ReceiveMewContainer>
            <h2>How to Receive Mew</h2>
            <p>
              You can receive Mew in your Pokémon Scarlet or Pokémon Violet game
              by entering the password GETY0URMEW via Mystery Gift.
            </p>
            <p>
              <strong>Mystery Gift Password:</strong> GETY0URMEW
            </p>
            <p>
              <strong>Password Expiration Date:</strong> Monday, September 18,
              2023, at 7:59 a.m. PDT
            </p>
          </ReceiveMewContainer>
        </MewPageContainer>
        <img
          src="https://scarletviolet.pokemon.com/_images/mew/raid/fpo-mew-raid-xl.jpg"
          alt=""
        />
      </Wrap>
    </>
  );
}

export default MewTwoPage;
