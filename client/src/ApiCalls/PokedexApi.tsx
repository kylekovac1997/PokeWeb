import axios from "axios";

export interface PokeBoxProps {
  results: { name: string; url: string }[];
}

export const PokedexApi = async (offset: number): Promise<PokeBoxProps> => {
  try {
    const response = await axios.get<PokeBoxProps>(
      `http://localhost:4000/api/Pokedex?offset=${offset}&limit=30`
    );
    if (response.status === 200) {
      return response.data;
    }
    throw new Error("Failed to fetch Pokedex data");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
