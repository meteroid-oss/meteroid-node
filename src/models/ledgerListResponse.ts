// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import { type LedgerEntry, LedgerEntrySerializer } from "./ledgerEntry.js";
import {
  type PaginationResponse,
  PaginationResponseSerializer,
} from "./paginationResponse.js";
/** A page of ledger entries, newest first. */
export interface LedgerListResponse {
  data: LedgerEntry[];
  paginationMeta: PaginationResponse;
}

/** Converts `LedgerListResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const LedgerListResponseSerializer = {
  parse(json: any, path = "$"): LedgerListResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["data", "pagination_meta"]),
      data: decodeList(json["data"], path, "data", (item: any, p: string, i: number) =>
        LedgerEntrySerializer.parse(item, decodePath(p, i))
      ),
      paginationMeta: PaginationResponseSerializer.parse(
        json["pagination_meta"],
        decodePath(path, "pagination_meta")
      ),
    };
  },

  serialize(value: LedgerListResponse): any {
    return {
      ...extraProperties(value, ["data", "paginationMeta"]),
      data: value.data.map((item: any) => LedgerEntrySerializer.serialize(item)),
      pagination_meta: PaginationResponseSerializer.serialize(value.paginationMeta),
    };
  },
};
