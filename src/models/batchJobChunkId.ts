// this file is @generated
import { decodeString } from "../decode.js";

export type BatchJobChunkId = string;

/** Converts `BatchJobChunkId` values from (`parse`) and to (`serialize`) their JSON form. */
export const BatchJobChunkIdSerializer = {
  parse(json: any, path = "$"): BatchJobChunkId {
    return decodeString(json, path);
  },

  serialize(value: BatchJobChunkId): any {
    return value;
  },
};
