// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import { type BatchJobResponse, BatchJobResponseSerializer } from "./batchJobResponse.js";
import {
  type PaginationResponse,
  PaginationResponseSerializer,
} from "./paginationResponse.js";

export interface BatchJobListResponse {
  data: BatchJobResponse[];
  paginationMeta: PaginationResponse;
}

/** Converts `BatchJobListResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const BatchJobListResponseSerializer = {
  parse(json: any, path = "$"): BatchJobListResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["data", "pagination_meta"]),
      data: decodeList(json["data"], path, "data", (item: any, p: string, i: number) =>
        BatchJobResponseSerializer.parse(item, decodePath(p, i))
      ),
      paginationMeta: PaginationResponseSerializer.parse(
        json["pagination_meta"],
        decodePath(path, "pagination_meta")
      ),
    };
  },

  serialize(value: BatchJobListResponse): any {
    return {
      ...extraProperties(value, ["data", "paginationMeta"]),
      data: value.data.map((item: any) => BatchJobResponseSerializer.serialize(item)),
      pagination_meta: PaginationResponseSerializer.serialize(value.paginationMeta),
    };
  },
};
