import { Wrap } from "@chakra-ui/react";
import gsap from "gsap";
import { ReactNode, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import playerData from "../../../../../pages/mainPage/pages/playerData.json";
export const PageBackgroundImage = styled.div`
  background-image: url("src/images/main/pages/eventsPage/backgroundImage.png");
`;
import pokeTournHeader from "../../../../../images/main/pages/eventsPage/pokemontournament-header.jpg";
import pikachu from "../../../../../images/main/pages/eventsPage/pikachu.png";
import title from "../../../../../images/main/pages/eventsPage/title.png";
// START events Header styling ------------------------------------
const HeaderStyle = styled.div`
  background-image: url("${pokeTournHeader}");
  text-align: center;
  background-repeat: repeat-x;
  background-size: cover;
  height: 30vw;
  max-width: 1300px;
  width: 98.9vw;
  filter: brightness(92%);
`;

const HeaderTextStyle = styled.h2`
  font-size: 60px;
  font-weight: 700;
  max-width: fit-content;
  position: absolute;
  bottom: 0;
  right: 0;
  color: #424040;
  text-shadow: 2px 4px 2px rgba(255, 255, 255);
  @media (max-width: 768px) {
    font-size: 20px;
    text-shadow: 2px 2px 2px rgba(255, 255, 255);
  }
`;

const comeInAnimation = keyframes`
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
`;

const PikachuAnimation = styled.div`
  width: auto;
  height: 100%;
  /* border: red 1px solid; */
  background-image: url("${pikachu}");
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  animation: ${comeInAnimation} 2s ease-in-out;
`;
export const Header = ({ children }: { children: ReactNode }) => {
  return (
    <HeaderStyle>
      <HeaderTextStyle>{children}</HeaderTextStyle>
      <PikachuAnimation />
    </HeaderStyle>
  );
};
// END events Header styling ------------------------------------

// START events Title styling ------------------------------------
const TitleStyle = styled.div`
  background-image: url("${title}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  border: transparent 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.h2`
  font-size: 38px;
  font-weight: 700;
  color: #424040;
  text-shadow: 1px 2px 1px rgba(255, 255, 255);
  @media (max-width: 768px) {
    font-size: 15px;
    text-shadow: 1px 2px 1px rgba(255, 255, 255);
  }
`;

export const Title = ({ children }: { children: ReactNode }) => {
  const titleStyleRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      titleStyleRef.current,
      { x: "-70%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <TitleStyle ref={titleStyleRef}>
      <TitleText>{children}</TitleText>
    </TitleStyle>
  );
};
// END events Title styling ------------------------------------
//START Container for info ----------------------------------
export const InfoContainer = styled(Wrap)`
  max-width: 880px;
  margin: auto;
`;
//END Container for info ----------------------------------

// START events Intro styling ------------------------------------

const FirstIntroLine = styled.p`
  font-weight: 700;
  font-size: large;
`;

const SecondIntroLine = styled.p`
  font-size: large;
`;

const IntroVideo = styled.iframe`
  width: 100%;
  height: 400px;
  position: relative;
  border: #e2e2e2 10px solid;
  border-radius: 20px;
`;
export const IntroSectionStyle = ({
  children,
  children1,
}: {
  children: ReactNode;
  children1: ReactNode;
}) => {
  return (
    <>
      <FirstIntroLine>{children}</FirstIntroLine>
      <br />
      <SecondIntroLine>{children1}</SecondIntroLine>
      <br />
      <IntroVideo
        src="https://www.youtube.com/embed/5pdLp-P5gR8"
        title="2023 Pokémon World Championships Trailer | Yokohama"
      />
    </>
  );
};
// END events Intro styling ------------------------------------
// START events Player styling ------------------------------------
const PlayerContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  /* border: red 1px solid; */
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  padding-bottom: 90px;
`;
const PlayerImage = styled.img`
  width: 350px;
  height: 200px;
  height: fit-content;
  /* border: red 1px solid; */
  border-radius: 50%;
`;

const PlayerDiscription = styled.ul`
  /* border: red 1px solid; */
  list-style: none;
  font-size: 20px;
  margin-top: 50px;
  width: 325px;
  height: fit-content;
`;

const PlayerIntro = styled.p`
  margin-top: 60px;
  font-size: 18px;
  /* border: red 1px solid; */
`;

const PlayerAccomplishments = styled.ul`
  list-style-type: circle;
  /* border: red 1px solid; */
  width: 100%;
  margin-top: 5dvb;
  & li {
    margin-left: 50px;
    font-size: 18px;
  }
`;

const PlayerMatchHighlights = styled.ul`
  list-style-type: circle;
  /* border: red 1px solid; */
  width: 100%;
  margin-top: 50px;
  & li {
    text-decoration: underline;
    font-weight: 600;
    margin-left: 50px;
    font-size: 18px;
  }
`;

export const PlayerContainerStyle = () => {
  return (
    <>
      {playerData.map((player, index) => (
        <PlayerContainer key={index}>
          <PlayerImage src={player.image} />
          <PlayerDiscription>
            <strong style={{ fontSize: "20px" }}>{player.category}</strong>
            {player.description.map((desc, descIndex) => {
              const [label, value] = desc.split(": ");
              return (
                <li key={descIndex}>
                  {label}:&nbsp;&nbsp;<strong>{value}</strong>
                </li>
              );
            })}
          </PlayerDiscription>
          <PlayerIntro>{player.intro}</PlayerIntro>
          <PlayerAccomplishments>
            <h5>Major 2023 Accomplishments:</h5>
            {player.accomplishments.map((accomp, accompIndex) => {
              return <li key={accompIndex}>{accomp}</li>;
            })}
          </PlayerAccomplishments>
          <PlayerMatchHighlights>
            <h5>Match Highlights:</h5>
            {player.matchHighlights.map((match, matchIndex) => (
              <li key={matchIndex}>
                <a href={match.link} target="_blank">
                  {match.label}
                </a>
              </li>
            ))}
          </PlayerMatchHighlights>
        </PlayerContainer>
      ))}
    </>
  );
};
