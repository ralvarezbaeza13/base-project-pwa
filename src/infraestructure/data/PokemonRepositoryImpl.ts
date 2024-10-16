import { injectable } from "inversify";
import { PokemonRepository } from "../../domain/repository/PokemonRepository";
import { ApiService } from "../services/ApiService";
import { Pokemon } from "../../domain/model/Pokemon";

@injectable()
export class PokemonRepositoryImpl implements PokemonRepository {
  async fetchPokemon(): Promise<Pokemon[]> {
    const data = await ApiService.fetchPokemon();
    return data.results.map((pokemonData: any) => new Pokemon(pokemonData));
  }
}
