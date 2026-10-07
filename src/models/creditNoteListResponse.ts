// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import { type CreditNote, CreditNoteSerializer } from "./creditNote.js";
import {
  type PaginationResponse,
  PaginationResponseSerializer,
} from "./paginationResponse.js";

export interface CreditNoteListResponse {
  data: CreditNote[];
  paginationMeta: PaginationResponse;
}

/** Converts `CreditNoteListResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditNoteListResponseSerializer = {
  parse(json: any, path = "$"): CreditNoteListResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["data", "pagination_meta"]),
      data: decodeList(json["data"], path, "data", (item: any, p: string, i: number) =>
        CreditNoteSerializer.parse(item, decodePath(p, i))
      ),
      paginationMeta: PaginationResponseSerializer.parse(
        json["pagination_meta"],
        decodePath(path, "pagination_meta")
      ),
    };
  },

  serialize(value: CreditNoteListResponse): any {
    return {
      ...extraProperties(value, ["data", "paginationMeta"]),
      data: value.data.map((item: any) => CreditNoteSerializer.serialize(item)),
      pagination_meta: PaginationResponseSerializer.serialize(value.paginationMeta),
    };
  },
};
