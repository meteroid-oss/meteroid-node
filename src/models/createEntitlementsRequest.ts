// this file is @generated
import { extraProperties } from "../json.js";
import {
  type EntitlementSpecRequest,
  EntitlementSpecRequestSerializer,
} from "./entitlementSpecRequest.js";
/** Entitlements already present on the entity are skipped, so the call can be replayed. */
export interface CreateEntitlementsRequest {
  entitlements: EntitlementSpecRequest[];
}

/** Converts `CreateEntitlementsRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreateEntitlementsRequestSerializer = {
  parse(json: any): CreateEntitlementsRequest {
    return {
      ...extraProperties(json, ["entitlements"]),
      entitlements: json["entitlements"].map((item: any) =>
        EntitlementSpecRequestSerializer.parse(item)
      ),
    };
  },

  serialize(value: CreateEntitlementsRequest): any {
    return {
      ...extraProperties(value, ["entitlements"]),
      entitlements: value.entitlements.map((item: any) =>
        EntitlementSpecRequestSerializer.serialize(item)
      ),
    };
  },
};
