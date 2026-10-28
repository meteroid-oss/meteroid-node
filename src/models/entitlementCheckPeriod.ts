// this file is @generated
import { extraProperties } from "../json.js";
import { decodeDateTime, decodeObject } from "../decode.js";

export interface EntitlementCheckPeriod {
  /** Absent when the period never ends. */
  end?: Date | null | undefined;
  start: Date;
}

/** Converts `EntitlementCheckPeriod` values from (`parse`) and to (`serialize`) their JSON form. */
export const EntitlementCheckPeriodSerializer = {
  parse(json: any, path = "$"): EntitlementCheckPeriod {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["end", "start"]),
      end: json["end"] != null ? decodeDateTime(json["end"], path, "end") : json["end"],
      start: decodeDateTime(json["start"], path, "start"),
    };
  },

  serialize(value: EntitlementCheckPeriod): any {
    return {
      ...extraProperties(value, ["end", "start"]),
      end: value.end,
      start: value.start,
    };
  },
};
