// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeList, decodeObject, decodePath } from "../decode.js";
import {
  type BatchJobItemFailureResponse,
  BatchJobItemFailureResponseSerializer,
} from "./batchJobItemFailureResponse.js";

export interface BatchJobFailuresResponse {
  data: BatchJobItemFailureResponse[];
  totalCount: number;
}

/** Converts `BatchJobFailuresResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const BatchJobFailuresResponseSerializer = {
  parse(json: any, path = "$"): BatchJobFailuresResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["data", "total_count"]),
      data: decodeList(json["data"], path, "data", (item: any, p: string, i: number) =>
        BatchJobItemFailureResponseSerializer.parse(item, decodePath(p, i))
      ),
      totalCount: decodeInteger(json["total_count"], path, "total_count"),
    };
  },

  serialize(value: BatchJobFailuresResponse): any {
    return {
      ...extraProperties(value, ["data", "totalCount"]),
      data: value.data.map((item: any) =>
        BatchJobItemFailureResponseSerializer.serialize(item)
      ),
      total_count: value.totalCount,
    };
  },
};
