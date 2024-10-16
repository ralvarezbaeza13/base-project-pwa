import axios from "axios";
import { RuleEngineActResponse } from "../model/response/ruleEngine/RuleEngineActResponseM";
import { plainToClass } from "class-transformer";

export const RuleEngineService = {
  fetchActs: async (): Promise<RuleEngineActResponse> => {
    try {
      const response = await axios.get<RuleEngineActResponse>(
        "https://run.mocky.io/v3/6110881c-1dbc-4da3-8adb-7bffc3473a5e"
      );
      return plainToClass(RuleEngineActResponse, response.data);
    } catch (error) {
      console.error("Error fetching Acts data:", error);
      throw error;
    }
  },
};
