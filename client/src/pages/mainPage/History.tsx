import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import {
  StyledCenterSmall,
  StyledCenterSmallImg,
  StyledCenterSmallBody,
  StyledCenterSmallText,
} from "../../componets/styled/mainPageStyledComponets/MainScreenStyling";
import backgroundImage from "../background.gif";

function History() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div onClick={onOpen}>
        <StyledCenterSmall>
          <StyledCenterSmallImg variant="bottom" src={backgroundImage} />
          <StyledCenterSmallBody>
            <StyledCenterSmallText>Pokemon History</StyledCenterSmallText>
          </StyledCenterSmallBody>
        </StyledCenterSmall>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>History of Pokémon</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div>
                <p>
                  The history of Pokémon is a fascinating journey that started
                  in the early 1990s in Japan. Pokémon, short for "Pocket
                  Monsters," is a media franchise created by Satoshi Tajiri and
                  Ken Sugimori, and it is managed by The Pokémon Company, a
                  joint venture between Nintendo, Game Freak, and Creatures Inc.
                </p>
                <h3>Origins (1989-1996)</h3>
                <p>
                  The concept for Pokémon was conceived by Satoshi Tajiri, who
                  was inspired by his childhood interest in collecting creatures
                  and his fascination with nature. He wanted to create a game
                  that allowed players to experience the joy of capturing and
                  collecting creatures like he did during his childhood.
                </p>
                <h3>Game Boy Release (1996-1999)</h3>
                <p>
                  The first Pokémon video games, Pokémon Red and Green (Blue in
                  the international release), were developed by Game Freak and
                  published by Nintendo for the Game Boy in 1996. The games
                  became a massive success in Japan, leading to the release of
                  Pokémon Red and Blue in North America in 1998 and Europe in
                  1999.
                </p>
                <h3>Trading Card Game (1996)</h3>
                <p>
                  In addition to the video games, the Pokémon Trading Card Game
                  (TCG) was also launched in 1996. The Pokémon TCG became a
                  global phenomenon, with players collecting and battling with
                  Pokémon cards.
                </p>
                <h3>Anime and Movies (1997-present)</h3>
                <p>
                  The Pokémon anime series made its debut in 1997, following the
                  adventures of Ash Ketchum and his Pikachu as they travel to
                  become Pokémon Masters. The Pokémon anime gained immense
                  popularity worldwide and is still running to this day.
                  Additionally, Pokémon movies are released regularly, with each
                  new generation of Pokémon games typically accompanied by a
                  movie.
                </p>
                <h3>Expansion and New Generations (2000s-present)</h3>
                <p>
                  The success of the franchise led to the release of new
                  generations of Pokémon games for various Nintendo consoles,
                  introducing new regions, Pokémon species, and gameplay
                  features with each generation. The franchise expanded to
                  include spin-off games, merchandise, animated series, movies,
                  and more.
                </p>
                <h3>Pokémon GO (2016)</h3>
                <p>
                  In 2016, Niantic, Inc. released Pokémon GO, a mobile augmented
                  reality game that became a global phenomenon. It allowed
                  players to explore the real world while capturing virtual
                  Pokémon using their smartphones. Pokémon GO's launch led to a
                  resurgence in Pokémon's popularity and introduced the
                  franchise to a new generation of players.
                </p>
                <h3>Pokémon's Enduring Popularity</h3>
                <p>
                  Over the years, Pokémon has maintained its popularity and has
                  become one of the most successful and iconic franchises in the
                  world. It continues to release new games, expand its media
                  offerings, and engage fans through events, merchandise, and
                  community-driven activities.
                </p>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}

export default History;
