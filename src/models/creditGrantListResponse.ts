// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import { type CreditGrant, CreditGrantSerializer } from "./creditGrant.js";
import {
  type PaginationResponse,
  PaginationResponseSerializer,
} from "./paginationResponse.js";
/** A page of credit grants. */
export interface CreditGrantListResponse {
  data: CreditGrant[];
  paginationMeta: PaginationResponse;
}

/** Converts `CreditGrantListResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditGrantListResponseSerializer = {
  parse(json: any, path = "$"): CreditGrantListResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["data", "pagination_meta"]),
      data: decodeList(json["data"], path, "data", (item: any, p: string, i: number) =>
        CreditGrantSerializer.parse(item, decodePath(p, i))
      ),
      paginationMeta: PaginationResponseSerializer.parse(
        json["pagination_meta"],
        decodePath(path, "pagination_meta")
      ),
    };
  },

  serialize(value: CreditGrantListResponse): any {
    return {
      ...extraProperties(value, ["data", "paginationMeta"]),
      data: value.data.map((item: any) => CreditGrantSerializer.serialize(item)),
      pagination_meta: PaginationResponseSerializer.serialize(value.paginationMeta),
    };
  },
};
