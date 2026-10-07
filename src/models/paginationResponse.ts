// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject } from "../decode.js";

export interface PaginationResponse {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
}

/** Converts `PaginationResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const PaginationResponseSerializer = {
  parse(json: any, path = "$"): PaginationResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["page", "per_page", "total_items", "total_pages"]),
      page: decodeInteger(json["page"], path, "page"),
      perPage: decodeInteger(json["per_page"], path, "per_page"),
      totalItems: decodeInteger(json["total_items"], path, "total_items"),
      totalPages: decodeInteger(json["total_pages"], path, "total_pages"),
    };
  },

  serialize(value: PaginationResponse): any {
    return {
      ...extraProperties(value, ["page", "perPage", "totalItems", "totalPages"]),
      page: value.page,
      per_page: value.perPage,
      total_items: value.totalItems,
      total_pages: value.totalPages,
    };
  },
};
