// this file is @generated
import { decodeString } from "../decode.js";

export type PlanId = string;

/** Converts `PlanId` values from (`parse`) and to (`serialize`) their JSON form. */
export const PlanIdSerializer = {
  parse(json: any, path = "$"): PlanId {
    return decodeString(json, path);
  },

  serialize(value: PlanId): any {
    return value;
  },
};
