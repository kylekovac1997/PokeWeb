import { Card } from "react-bootstrap";
import styled from "styled-components";

export const PokemonCardImage = styled(Card.Img)`
  position: absolute;
  top: 27.5px;
  left: 45px;
  width: 80px;
`;

export const PokemonCardTitle = styled(Card.Title)`
  display: none;
  position: absolute;
  top: 5px;
  left: 22.5px;
  font-size: 10px;
`;

export const PokemonCardTitleP = styled(Card.Title)`
  display: none;
  margin-left: 60px;
  margin-top: -10px;
  font-size: 10px;
  font-weight: 700;
`;

export const PokemonCardText = styled(Card.Text)`
  display: none;
  margin-top: 82.5px;
  margin-left: 5px;
  width: 105px;
  font-size: 10px;
`;
export const PokemonCardStyle = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 125px;
  height: 175px;
  margin: auto;
  margin-left: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  border-color: transparent;

  @media (max-width: 768px) {
    width: 100px;
    height: 140px;
    margin-left: 10px;
    ${PokemonCardImage} {
      width: 40px;
    }
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 112px;
    margin-left: 5px;
    ${PokemonCardImage} {
      width: 30px;
    }
  }

  &:hover {
    background-image: ${({ pokemonType }) =>
      `url(src/images/card/${pokemonType}TypeCard.png)`};
    ${PokemonCardTitle},
    ${PokemonCardTitleP},
    ${PokemonCardText} {
      display: block;
    }
    ${PokemonCardImage} {
      width: 50px;
    }
  }
`;
