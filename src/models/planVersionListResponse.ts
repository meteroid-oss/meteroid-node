// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import {
  type PaginationResponse,
  PaginationResponseSerializer,
} from "./paginationResponse.js";
import {
  type PlanVersionSummary,
  PlanVersionSummarySerializer,
} from "./planVersionSummary.js";

export interface PlanVersionListResponse {
  data: PlanVersionSummary[];
  paginationMeta: PaginationResponse;
}

/** Converts `PlanVersionListResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const PlanVersionListResponseSerializer = {
  parse(json: any, path = "$"): PlanVersionListResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["data", "pagination_meta"]),
      data: decodeList(json["data"], path, "data", (item: any, p: string, i: number) =>
        PlanVersionSummarySerializer.parse(item, decodePath(p, i))
      ),
      paginationMeta: PaginationResponseSerializer.parse(
        json["pagination_meta"],
        decodePath(path, "pagination_meta")
      ),
    };
  },

  serialize(value: PlanVersionListResponse): any {
    return {
      ...extraProperties(value, ["data", "paginationMeta"]),
      data: value.data.map((item: any) => PlanVersionSummarySerializer.serialize(item)),
      pagination_meta: PaginationResponseSerializer.serialize(value.paginationMeta),
    };
  },
};
