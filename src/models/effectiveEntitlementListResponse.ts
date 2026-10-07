// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import {
  type EffectiveEntitlement,
  EffectiveEntitlementSerializer,
} from "./effectiveEntitlement.js";

export interface EffectiveEntitlementListResponse {
  data: EffectiveEntitlement[];
}

/** Converts `EffectiveEntitlementListResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const EffectiveEntitlementListResponseSerializer = {
  parse(json: any, path = "$"): EffectiveEntitlementListResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["data"]),
      data: decodeList(json["data"], path, "data", (item: any, p: string, i: number) =>
        EffectiveEntitlementSerializer.parse(item, decodePath(p, i))
      ),
    };
  },

  serialize(value: EffectiveEntitlementListResponse): any {
    return {
      ...extraProperties(value, ["data"]),
      data: value.data.map((item: any) => EffectiveEntitlementSerializer.serialize(item)),
    };
  },
};
