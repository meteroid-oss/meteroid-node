// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import {
  type CustomPropertyDefinition,
  CustomPropertyDefinitionSerializer,
} from "./customPropertyDefinition.js";
import {
  type PaginationResponse,
  PaginationResponseSerializer,
} from "./paginationResponse.js";

export interface CustomPropertyDefinitionListResponse {
  data: CustomPropertyDefinition[];
  paginationMeta: PaginationResponse;
}

/** Converts `CustomPropertyDefinitionListResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const CustomPropertyDefinitionListResponseSerializer = {
  parse(json: any, path = "$"): CustomPropertyDefinitionListResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["data", "pagination_meta"]),
      data: decodeList(json["data"], path, "data", (item: any, p: string, i: number) =>
        CustomPropertyDefinitionSerializer.parse(item, decodePath(p, i))
      ),
      paginationMeta: PaginationResponseSerializer.parse(
        json["pagination_meta"],
        decodePath(path, "pagination_meta")
      ),
    };
  },

  serialize(value: CustomPropertyDefinitionListResponse): any {
    return {
      ...extraProperties(value, ["data", "paginationMeta"]),
      data: value.data.map((item: any) =>
        CustomPropertyDefinitionSerializer.serialize(item)
      ),
      pagination_meta: PaginationResponseSerializer.serialize(value.paginationMeta),
    };
  },
};
