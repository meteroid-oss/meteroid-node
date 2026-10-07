// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import { type Feature, FeatureSerializer } from "./feature.js";
import {
  type PaginationResponse,
  PaginationResponseSerializer,
} from "./paginationResponse.js";

export interface FeatureListResponse {
  data: Feature[];
  paginationMeta: PaginationResponse;
}

/** Converts `FeatureListResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const FeatureListResponseSerializer = {
  parse(json: any, path = "$"): FeatureListResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["data", "pagination_meta"]),
      data: decodeList(json["data"], path, "data", (item: any, p: string, i: number) =>
        FeatureSerializer.parse(item, decodePath(p, i))
      ),
      paginationMeta: PaginationResponseSerializer.parse(
        json["pagination_meta"],
        decodePath(path, "pagination_meta")
      ),
    };
  },

  serialize(value: FeatureListResponse): any {
    return {
      ...extraProperties(value, ["data", "paginationMeta"]),
      data: value.data.map((item: any) => FeatureSerializer.serialize(item)),
      pagination_meta: PaginationResponseSerializer.serialize(value.paginationMeta),
    };
  },
};
