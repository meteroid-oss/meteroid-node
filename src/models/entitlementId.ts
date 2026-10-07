// this file is @generated
import { decodeString } from "../decode.js";

export type EntitlementId = string;

/** Converts `EntitlementId` values from (`parse`) and to (`serialize`) their JSON form. */
export const EntitlementIdSerializer = {
  parse(json: any, path = "$"): EntitlementId {
    return decodeString(json, path);
  },

  serialize(value: EntitlementId): any {
    return value;
  },
};
