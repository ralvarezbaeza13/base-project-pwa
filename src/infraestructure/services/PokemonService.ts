import axios from "axios";

export const PokemonService = {
  fetchPokemon: async (): Promise<any> => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      return response.data;
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      throw error;
    }
  },
};
