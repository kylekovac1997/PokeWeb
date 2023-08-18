import styled from "styled-components";
import pokeArrow from "../../../images/pcBackground/PokemonArrow-removebg-preview.png";
import pcBackground from "../../../images/pcBackground/13.png";

export const ButtonPcLeft = styled.button`
  background-image: url("${pokeArrow}");
  background-color: #000000c3;
  transform: rotate(270deg);
  background-position: center;
  justify-content: center;
  width: 100px;
  height: 200px;
  margin-top: -50px;
  margin-left: -230px;
  border-radius: 10%;
  max-width: 100%;
  flex-shrink: 2;
`;

export const ButtonPcRight = styled.button`
  background-image: url("${pokeArrow}");
  background-color: #000000c3;
  transform: rotate(90deg);
  background-position: center;
  justify-content: center;
  width: 100px;
  height: 200px;
  margin-top: -50px;
  margin-left: 47px;
  border-radius: 10%;
  max-width: 100%;
  flex-shrink: 2;
`;

export const PcScreen = styled.div`
  background-image: url("${pcBackground}");
  background-size: 100% 100%;
  width: 583px;
  height: 100px;
  margin-left: 48px;
  border-radius: 10%;
  max-width: 100%;
  flex-shrink: 2;
`;

export const PcDiv = styled.div`
  display: flex;
  max-width: 1000px;
  margin: auto;
  margin-top: 120px;
  background-image: url("${pcBackground}");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  row-gap: 10px;
  column-gap: 10px;
`;

export const DisplayDiv = styled.div`
  display: flex;
  max-width: 800px;
  margin-top: -100px;
  margin-left: 290px;
  position: absolute;
  row-gap: 10px;
  column-gap: 10px;
`;

export const PokemonDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1320px;
  max-height: 1820px;
  margin: auto;
  row-gap: 10px;
  column-gap: 10px;
`;
