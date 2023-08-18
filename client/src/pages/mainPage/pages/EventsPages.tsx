import {
  Header,
  Title,
  IntroSectionStyle,
  PlayerContainerStyle,
  InfoContainer,
  PageBackgroundImage,
} from "../../../componets/styled/mainPageStyledComponets/pages/eventsPage/EventsPageStyle";
import { Center, Wrap, WrapItem } from "@chakra-ui/react";

function EventsPages() {
  return (
    <Wrap>
      <PageBackgroundImage>
        <WrapItem>
          <Header>
            <Center w="100%" h="100%">
              EVENTS
            </Center>
          </Header>
        </WrapItem>
        <Center w="100%" h="160px">
          <Title>
            WORLD CHAMPIONSHIPS
            <br /> NORTH AMERICA STARS
          </Title>
        </Center>
        <InfoContainer>
          <IntroSectionStyle
            children={
              <>
                Meet some of the top battlers from North America who will be
                competing to win it all in Yokohama.
              </>
            }
            children1={
              <>
                Throughout the 2023 Championship Series, Pokémon players from
                all over North America have been battling hard for their chance
                to compete in the upcoming Pokémon World Championships. Here’s
                your chance to learn more about the best of the best in the
                Pokémon TCG, Pokémon VGC, Pokémon GO, and Pokémon UNITE. Watch
                the video to see these amazing players in action.
              </>
            }
          />

          <PlayerContainerStyle></PlayerContainerStyle>
        </InfoContainer>
      </PageBackgroundImage>
    </Wrap>
  );
}

export default EventsPages;
