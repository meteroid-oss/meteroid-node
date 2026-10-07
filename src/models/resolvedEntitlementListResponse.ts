// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import {
  type ResolvedEntitlement,
  ResolvedEntitlementSerializer,
} from "./resolvedEntitlement.js";

export interface ResolvedEntitlementListResponse {
  data: ResolvedEntitlement[];
}

/** Converts `ResolvedEntitlementListResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const ResolvedEntitlementListResponseSerializer = {
  parse(json: any, path = "$"): ResolvedEntitlementListResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["data"]),
      data: decodeList(json["data"], path, "data", (item: any, p: string, i: number) =>
        ResolvedEntitlementSerializer.parse(item, decodePath(p, i))
      ),
    };
  },

  serialize(value: ResolvedEntitlementListResponse): any {
    return {
      ...extraProperties(value, ["data"]),
      data: value.data.map((item: any) => ResolvedEntitlementSerializer.serialize(item)),
    };
  },
};
