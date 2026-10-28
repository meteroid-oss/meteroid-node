// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import { type CreditUnitPrice, CreditUnitPriceSerializer } from "./creditUnitPrice.js";
/** A credit unit's selling prices, newest first. */
export interface CreditUnitPriceListResponse {
  data: CreditUnitPrice[];
}

/** Converts `CreditUnitPriceListResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditUnitPriceListResponseSerializer = {
  parse(json: any, path = "$"): CreditUnitPriceListResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["data"]),
      data: decodeList(json["data"], path, "data", (item: any, p: string, i: number) =>
        CreditUnitPriceSerializer.parse(item, decodePath(p, i))
      ),
    };
  },

  serialize(value: CreditUnitPriceListResponse): any {
    return {
      ...extraProperties(value, ["data"]),
      data: value.data.map((item: any) => CreditUnitPriceSerializer.serialize(item)),
    };
  },
};
