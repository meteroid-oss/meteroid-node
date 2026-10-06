// this file is @generated
import { extraProperties } from "../json.js";
import { type Entitlement, EntitlementSerializer } from "./entitlement.js";

export interface EntitlementListResponse {
  data: Entitlement[];
}

/** Converts `EntitlementListResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const EntitlementListResponseSerializer = {
  parse(json: any): EntitlementListResponse {
    return {
      ...extraProperties(json, ["data"]),
      data: json["data"].map((item: any) => EntitlementSerializer.parse(item)),
    };
  },

  serialize(value: EntitlementListResponse): any {
    return {
      ...extraProperties(value, ["data"]),
      data: value.data.map((item: any) => EntitlementSerializer.serialize(item)),
    };
  },
};
