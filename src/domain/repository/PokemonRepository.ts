import { Pokemon } from '../model/Pokemon';

export interface PokemonRepository {
  fetchPokemon(): Promise<Pokemon[]>;
}