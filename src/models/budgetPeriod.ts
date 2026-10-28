// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface BudgetPeriod {
  /** Absent when the period never ends. */
  end?: string | null | undefined;
  start: string;
}

/** Converts `BudgetPeriod` values from (`parse`) and to (`serialize`) their JSON form. */
export const BudgetPeriodSerializer = {
  parse(json: any, path = "$"): BudgetPeriod {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["end", "start"]),
      end: json["end"] != null ? decodeString(json["end"], path, "end") : json["end"],
      start: decodeString(json["start"], path, "start"),
    };
  },

  serialize(value: BudgetPeriod): any {
    return {
      ...extraProperties(value, ["end", "start"]),
      end: value.end,
      start: value.start,
    };
  },
};
