// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodePath, decodeString } from "../decode.js";
import { type BatchJobChunkId, BatchJobChunkIdSerializer } from "./batchJobChunkId.js";

export interface BatchJobItemFailureResponse {
  chunkId: BatchJobChunkId;
  id: string;
  itemIdentifier?: string | null | undefined;
  itemIndex: number;
  reason: string;
}

/** Converts `BatchJobItemFailureResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const BatchJobItemFailureResponseSerializer = {
  parse(json: any, path = "$"): BatchJobItemFailureResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "chunk_id",
        "id",
        "item_identifier",
        "item_index",
        "reason",
      ]),
      chunkId: BatchJobChunkIdSerializer.parse(
        json["chunk_id"],
        decodePath(path, "chunk_id")
      ),
      id: decodeString(json["id"], path, "id"),
      itemIdentifier:
        json["item_identifier"] != null
          ? decodeString(json["item_identifier"], path, "item_identifier")
          : json["item_identifier"],
      itemIndex: decodeInteger(json["item_index"], path, "item_index"),
      reason: decodeString(json["reason"], path, "reason"),
    };
  },

  serialize(value: BatchJobItemFailureResponse): any {
    return {
      ...extraProperties(value, [
        "chunkId",
        "id",
        "itemIdentifier",
        "itemIndex",
        "reason",
      ]),
      chunk_id: BatchJobChunkIdSerializer.serialize(value.chunkId),
      id: value.id,
      item_identifier: value.itemIdentifier,
      item_index: value.itemIndex,
      reason: value.reason,
    };
  },
};
