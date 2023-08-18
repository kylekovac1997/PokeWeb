import { Wrap } from "@chakra-ui/react";

function PokeTv() {
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
      <iframe
        title="Pokemon Episodes"
        src="https://watch.pokemon.com/en-gb/#/player?id=7fe404392a77410e88af4a19ca20184f&channelId=pokemon-indigo-league&cameFromHome=false"
        width="100%"
        height="500px"
      ></iframe>
    </Wrap>
  );
}

export default PokeTv;
