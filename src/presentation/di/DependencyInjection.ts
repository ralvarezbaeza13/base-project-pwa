import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./Types";

import { FetchActsUseCase } from "../../domain/usecase/FetchActsUseCase";
import { FetchPokemonUseCase } from "../../domain/usecase/FetchPokemonUseCase";

import { PokemonRepositoryImpl } from "../../infraestructure/data/PokemonRepositoryImpl";
import { RuleEngineRepositoryImpl } from "../../infraestructure/data/RuleEngineRepositoryImpl";

// Crear el contenedor
const container = new Container();

//REPOSITORY
container.bind(TYPES.PokemonRepository).to(PokemonRepositoryImpl);
container.bind(TYPES.RuleEngineRepository).to(RuleEngineRepositoryImpl);

//USECASE
container.bind(TYPES.FetchPokemonUseCase).toDynamicValue((context) => {
  return new FetchPokemonUseCase(
    context.container.get(TYPES.PokemonRepository)
  );
});

container.bind(TYPES.FetchActsUseCase).toDynamicValue((context) => {
  return new FetchActsUseCase(
    context.container.get(TYPES.RuleEngineRepository)
  );
});

export { container };
