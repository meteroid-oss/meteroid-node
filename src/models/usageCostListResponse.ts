// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import { type UsageCostRow, UsageCostRowSerializer } from "./usageCostRow.js";

export interface UsageCostListResponse {
  data: UsageCostRow[];
}

/** Converts `UsageCostListResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const UsageCostListResponseSerializer = {
  parse(json: any, path = "$"): UsageCostListResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["data"]),
      data: decodeList(json["data"], path, "data", (item: any, p: string, i: number) =>
        UsageCostRowSerializer.parse(item, decodePath(p, i))
      ),
    };
  },

  serialize(value: UsageCostListResponse): any {
    return {
      ...extraProperties(value, ["data"]),
      data: value.data.map((item: any) => UsageCostRowSerializer.serialize(item)),
    };
  },
};
