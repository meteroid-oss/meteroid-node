// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import { type Entitlement, EntitlementSerializer } from "./entitlement.js";

export interface EntitlementListResponse {
  data: Entitlement[];
}

/** Converts `EntitlementListResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const EntitlementListResponseSerializer = {
  parse(json: any, path = "$"): EntitlementListResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["data"]),
      data: decodeList(json["data"], path, "data", (item: any, p: string, i: number) =>
        EntitlementSerializer.parse(item, decodePath(p, i))
      ),
    };
  },

  serialize(value: EntitlementListResponse): any {
    return {
      ...extraProperties(value, ["data"]),
      data: value.data.map((item: any) => EntitlementSerializer.serialize(item)),
    };
  },
};
