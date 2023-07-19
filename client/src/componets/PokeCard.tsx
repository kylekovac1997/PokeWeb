import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import {
  PokemonCardImage,
  PokemonCardStyle,
  PokemonCardText,
  PokemonCardTitle,
  PokemonCardTitleP,
} from "./styled/styledPokemonCard";

interface SelectedPokemon {
  forms: { name: string }[];
  base_experience: number;
  sprites: {
    versions: {
      "generation-v": {
        "black-white": {
          animated: {
            front_default: string;
          };
        };
      };
    };
    front_default: string;
  };
  abilities: {
    ability: {
      name: string;
    };
  }[];
  types: { type: { name: string } }[];
}

function PokeCard({ pokemon }: { pokemon: string }) {
  const [returnedPokemon, setReturnedPokemon] =
    useState<SelectedPokemon | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get<SelectedPokemon>(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );

      if (response.status === 200) {
        setReturnedPokemon(response.data);
      } else {
        console.log("Connection error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  let pokemonType = "default";

  if (returnedPokemon && returnedPokemon.types.length > 0) {
    const pokeType = returnedPokemon.types[0].type.name;
    const validTypes = [
      "fire",
      "water",
      "grass",
      "electric",
      "fighting",
      "psychic",
      "dragon",
    ];

    if (validTypes.includes(pokeType)) {
      pokemonType = pokeType;
    }
  }

  return (
    <>
      <div>
        {returnedPokemon && (
          <PokemonCardStyle pokemonType={pokemonType}>
            <PokemonCardImage
              variant="top"
              src={
                returnedPokemon.sprites.versions["generation-v"]["black-white"]
                  .animated.front_default ||
                returnedPokemon.sprites.front_default
              }
            />
            <Card.Body>
              <PokemonCardTitle>
                {returnedPokemon.forms[0].name}
                <PokemonCardTitleP>
                  {returnedPokemon.base_experience}HP
                </PokemonCardTitleP>
              </PokemonCardTitle>
              <PokemonCardText>
                {returnedPokemon.abilities.map((abilityData, index) => (
                  <span key={index}>
                    {abilityData.ability.name}
                    <br />
                  </span>
                ))}
              </PokemonCardText>
            </Card.Body>
          </PokemonCardStyle>
        )}
      </div>
    </>
  );
}

export default PokeCard;
