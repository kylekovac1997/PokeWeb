import { useEffect, useState } from "react";
import { PokedexApi, PokeBoxProps } from "../services/PokedexApi";
import PokeCard from "../componets/PokeCard";
import {
  ButtonPcLeft,
  ButtonPcRight,
  DisplayDiv,
  PcDiv,
  PcScreen,
  PokemonDiv,
} from "../componets/styled/styledPokemonBox";
import ClickedSound from "../componets/ClickedSound";
import { PokeBallLoading } from "../componets/Loading";

function PokeBox() {
  const [pokeBoxData, setPokeBoxData] = useState<PokeBoxProps | null>(null);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetchData();
  }, [offset]);

  const fetchData = async () => {
    try {
      const apiData: PokeBoxProps = await PokedexApi(offset);
      setPokeBoxData(apiData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextClick = () => {
    setOffset((prevOffset) => prevOffset + 30);
    setCount(count + 1);
    ClickedSound();
  };

  const handleBackClick = () => {
    if (count === 1) {
      return;
    }
    setOffset((prevOffset) => prevOffset - 30);
    setCount(count - 1);
    ClickedSound();
  };

  if (!pokeBoxData) {
    return null || <PokeBallLoading>Loading...</PokeBallLoading>;
  }

  return (
    <>
      <PcDiv>
        <DisplayDiv>
          <ButtonPcLeft onClick={handleBackClick}></ButtonPcLeft>
          <PcScreen>
            <h1 style={{ marginLeft: "200px", marginTop: "25px" }}>
              BOX{count}
            </h1>
          </PcScreen>
          <ButtonPcRight onClick={handleNextClick}></ButtonPcRight>
        </DisplayDiv>
        <PokemonDiv>
          {pokeBoxData.results.map((pokemon) => (
            <PokeCard key={pokemon.name} pokemon={pokemon.name} />
          ))}
        </PokemonDiv>
      </PcDiv>
    </>
  );
}

export default PokeBox;
