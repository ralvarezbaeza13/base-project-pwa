import { injectable, inject } from "inversify";
import type { PokemonRepository } from "../../domain/repository/PokemonRepository";
import { Pokemon } from "../../domain/model/Pokemon";
import { TYPES } from "../../presentation/di/Types";

@injectable()
export class FetchPokemonUseCase {
  constructor(
    @inject(TYPES.PokemonRepository)
    private pokemonRepository: PokemonRepository
  ) {}

  async execute(): Promise<Pokemon[]> {
    return this.pokemonRepository.getAll();
  }
}
