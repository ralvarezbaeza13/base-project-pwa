import { RuleEngineRepositoryImpl } from "../../infraestructure/data/RuleEngineRepositoryImpl";
import { ActDomainM } from "../model/ActDomainM";

export class FetchActsUseCase {
  private ruleEngineRepositoryImpl: RuleEngineRepositoryImpl;

  constructor(ruleEngineRepositoryImpl: RuleEngineRepositoryImpl) {
    this.ruleEngineRepositoryImpl = ruleEngineRepositoryImpl;
  }

  async execute(): Promise<Array<ActDomainM>> {
    return this.ruleEngineRepositoryImpl.fetchActs();
  }
}
