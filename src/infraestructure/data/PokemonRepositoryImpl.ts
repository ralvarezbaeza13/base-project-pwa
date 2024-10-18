import { injectable } from "inversify";
import { PokemonRepository } from "../../domain/repository/PokemonRepository";
import { Pokemon } from "../../domain/model/Pokemon";
import { amplifyClient } from "../services/AmplifyService";

@injectable()
export class PokemonRepositoryImpl implements PokemonRepository {
  observeAll(callback: (pokemons: Pokemon[]) => void): () => void {
    const subscription = amplifyClient.models.Pokemon.observeQuery().subscribe({
      next: (data) => {
        const pokemons = data.items.map(
          (pokemonData: any) => new Pokemon(pokemonData)
        );
        callback(pokemons);
      },
      error: (error) => {
        console.error("Failed to observe Pokemon:", error);
      },
    });

    return () => subscription.unsubscribe();
  }

  async getAll(): Promise<Pokemon[]> {
    try {
      const resp = await amplifyClient.models.Pokemon.list();
      return resp.data.map((item) => new Pokemon(item));
    } catch (error) {
      console.error("Failed to fetch Pokemon:", error);
      return Promise.reject(error);
    }
  }

  /*async getAll(): Promise<Pokemon[]> {
    try {
      const data = await PokemonService.fetchPokemon();
      return data.results.map((pokemonData: any) => new Pokemon(pokemonData));
    } catch (error) {
      console.error("Failed to fetch Pokemon:", error);
      return Promise.reject(error);
    }
  } */

  async get(id: string): Promise<Pokemon> {
    return Promise.reject(new Error("Method not implemented."));
  }

  async create(item: Pokemon): Promise<boolean> {
    return Promise.reject(new Error("Method not implemented."));
  }

  async update(id: string, item: Pokemon): Promise<boolean> {
    return Promise.reject(new Error("Method not implemented."));
  }

  async delete(id: string): Promise<boolean> {
    return Promise.reject(new Error("Method not implemented."));
  }
}
