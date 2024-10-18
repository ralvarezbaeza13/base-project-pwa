import { Pokemon } from "../model/Pokemon";
import { BaseCRUDRepository } from "./BaseCRUDRepository";

export interface PokemonRepository extends BaseCRUDRepository<Pokemon> {}
