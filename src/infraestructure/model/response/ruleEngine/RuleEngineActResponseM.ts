import { Type } from "class-transformer"; // Importa el decorador @Type
import { ActDomainM } from "../../../../domain/model/ActDomainM";
import { BaseMapperInt } from "../../BaseMapperInt";
import { BaseResponse } from "../BaseResponse";
import { ActResponseM } from "../ruleEngine/ActResponseM";

export class RuleEngineActResponse
  extends BaseResponse<Array<ActResponseM>>
  implements BaseMapperInt<Array<ActDomainM>>
{
  @Type(() => ActResponseM) // Aplica el decorador para transformar cada elemento en ActResponseM
  response!: ActResponseM[] | null;

  constructor(
    code: number,
    message: string,
    response: Array<ActResponseM> | null
  ) {
    super(code, message, response);
  }

  toDomainModel(): Array<ActDomainM> {
    return (
      this.response?.map((item) => {
        return item.toDomainModel();
      }) || []
    );
  }
}
