// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import { type CreditUnit, CreditUnitSerializer } from "./creditUnit.js";
/** The tenant's credit units. */
export interface CreditUnitListResponse {
  data: CreditUnit[];
}

/** Converts `CreditUnitListResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditUnitListResponseSerializer = {
  parse(json: any, path = "$"): CreditUnitListResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["data"]),
      data: decodeList(json["data"], path, "data", (item: any, p: string, i: number) =>
        CreditUnitSerializer.parse(item, decodePath(p, i))
      ),
    };
  },

  serialize(value: CreditUnitListResponse): any {
    return {
      ...extraProperties(value, ["data"]),
      data: value.data.map((item: any) => CreditUnitSerializer.serialize(item)),
    };
  },
};
