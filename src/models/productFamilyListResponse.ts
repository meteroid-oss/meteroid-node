// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import {
  type PaginationResponse,
  PaginationResponseSerializer,
} from "./paginationResponse.js";
import { type ProductFamily, ProductFamilySerializer } from "./productFamily.js";

export interface ProductFamilyListResponse {
  data: ProductFamily[];
  paginationMeta: PaginationResponse;
}

/** Converts `ProductFamilyListResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const ProductFamilyListResponseSerializer = {
  parse(json: any, path = "$"): ProductFamilyListResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["data", "pagination_meta"]),
      data: decodeList(json["data"], path, "data", (item: any, p: string, i: number) =>
        ProductFamilySerializer.parse(item, decodePath(p, i))
      ),
      paginationMeta: PaginationResponseSerializer.parse(
        json["pagination_meta"],
        decodePath(path, "pagination_meta")
      ),
    };
  },

  serialize(value: ProductFamilyListResponse): any {
    return {
      ...extraProperties(value, ["data", "paginationMeta"]),
      data: value.data.map((item: any) => ProductFamilySerializer.serialize(item)),
      pagination_meta: PaginationResponseSerializer.serialize(value.paginationMeta),
    };
  },
};
