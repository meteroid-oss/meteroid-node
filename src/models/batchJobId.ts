// this file is @generated
import { decodeString } from "../decode.js";

export type BatchJobId = string;

/** Converts `BatchJobId` values from (`parse`) and to (`serialize`) their JSON form. */
export const BatchJobIdSerializer = {
  parse(json: any, path = "$"): BatchJobId {
    return decodeString(json, path);
  },

  serialize(value: BatchJobId): any {
    return value;
  },
};
