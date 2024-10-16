import { BaseMapperInt } from "../../BaseMapperInt";
import { ActDomainM } from "../../../../domain/model/ActDomainM";

export class ActResponseM implements BaseMapperInt<ActDomainM> {
  idAct: string;
  act: string;
  verb: string;
  participation: string;
  role: string;
  entity: String;
  element: any;

  constructor(
    idAct: string,
    act: string,
    verb: string,
    participation: string,
    role: string,
    entity: string,
    element: any
  ) {
    this.idAct = idAct;
    this.act = act;
    this.verb = verb;
    this.participation = participation;
    this.role = role;
    this.entity = entity;
    this.element = element;
  }

  toDomainModel(): ActDomainM {
    return new ActDomainM(this.idAct, this.element);
  }
}
