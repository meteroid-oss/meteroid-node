// this file is @generated
import { decodeString } from "../decode.js";

export type UsageLimitId = string;

/** Converts `UsageLimitId` values from (`parse`) and to (`serialize`) their JSON form. */
export const UsageLimitIdSerializer = {
  parse(json: any, path = "$"): UsageLimitId {
    return decodeString(json, path);
  },

  serialize(value: UsageLimitId): any {
    return value;
  },
};
