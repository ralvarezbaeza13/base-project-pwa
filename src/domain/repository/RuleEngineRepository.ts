import { ActDomainM } from '../model/ActDomainM';

export interface RuleEngineRepository {
  fetchActs(): Promise<Array<ActDomainM> | null>;
}