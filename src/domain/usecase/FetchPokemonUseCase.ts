import { PokemonRepositoryImpl } from "../../infraestructure/data/PokemonRepositoryImpl";
import { Pokemon } from "../model/Pokemon";

export class FetchPokemonUseCase {
  private pokemonRepository: PokemonRepositoryImpl;

  constructor(pokemonRepository: PokemonRepositoryImpl) {
    this.pokemonRepository = pokemonRepository;
  }

  async execute(): Promise<Pokemon[]> {
    return this.pokemonRepository.fetchPokemon();
  }
}
