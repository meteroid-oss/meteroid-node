// this file is @generated
import { decodeString } from "../decode.js";

export type PlanVersionId = string;

/** Converts `PlanVersionId` values from (`parse`) and to (`serialize`) their JSON form. */
export const PlanVersionIdSerializer = {
  parse(json: any, path = "$"): PlanVersionId {
    return decodeString(json, path);
  },

  serialize(value: PlanVersionId): any {
    return value;
  },
};
