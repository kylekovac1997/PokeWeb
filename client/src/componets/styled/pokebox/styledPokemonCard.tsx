import { Card } from "react-bootstrap";
import styled from "styled-components";
import fireTypeCard from "../../../images/card/fireTypeCard.png";
import defaultTypeCard from "../../../images/card/defaultTypeCard.png";
import dragonTypeCard from "../../../images/card/dragonTypeCard.png";
import electricTypeCard from "../../../images/card/electricTypeCard.png";
import fightingTypeCard from "../../../images/card/fightingTypeCard.png";
import grassTypeCard from "../../../images/card/grassTypeCard.png";
import psychicTypeCard from "../../../images/card/psychicTypeCard.png";
import waterTypeCard from "../../../images/card/waterTypeCard.png";

const getImagePath = (type: any) => {
  switch (type) {
    case "fire":
      return fireTypeCard;
    case "water":
      return waterTypeCard;
    case "electric":
      return electricTypeCard;
    case "fighting":
      return fightingTypeCard;
    case "grass":
      return grassTypeCard;
    case "phychic":
      return psychicTypeCard;
    case "dragon":
      return dragonTypeCard;

    default:
      return defaultTypeCard;
  }
};

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
      `url(${getImagePath(pokemonType)})`};
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
