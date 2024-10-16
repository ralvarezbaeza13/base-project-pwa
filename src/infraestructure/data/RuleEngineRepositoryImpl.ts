import { injectable } from "inversify";
import { RuleEngineRepository } from "../../domain/repository/RuleEngineRepository";
import { RuleEngineService } from "../services/RuleEngineService";
import { ActDomainM } from "../../domain/model/ActDomainM";
import { RuleEngineActResponse } from "../model/response/ruleEngine/RuleEngineActResponseM";

@injectable()
export class RuleEngineRepositoryImpl implements RuleEngineRepository {
  async fetchActs(): Promise<Array<ActDomainM>> {
    const data: RuleEngineActResponse = await RuleEngineService.fetchActs();
    return data.toDomainModel();
  }
}
