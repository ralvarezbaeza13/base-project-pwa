const TYPES = {
  //Repository
  PokemonRepository: Symbol.for("PokemonRepository"),
  RuleEngineRepository: Symbol.for("RuleEngineRepository"),

  //Use Case
  FetchActsUseCase: Symbol.for("FetchActsUseCase"),
  FetchPokemonUseCase: Symbol.for("FetchPokemonUseCase"),
};

export { TYPES };
