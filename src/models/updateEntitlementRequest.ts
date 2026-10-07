// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath } from "../decode.js";
import { type EntitlementValue, EntitlementValueSerializer } from "./entitlementValue.js";

export interface UpdateEntitlementRequest {
  value?: EntitlementValue | null | undefined;
}

/** Converts `UpdateEntitlementRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const UpdateEntitlementRequestSerializer = {
  parse(json: any, path = "$"): UpdateEntitlementRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["value"]),
      value:
        json["value"] != null
          ? EntitlementValueSerializer.parse(json["value"], decodePath(path, "value"))
          : json["value"],
    };
  },

  serialize(value: UpdateEntitlementRequest): any {
    return {
      ...extraProperties(value, ["value"]),
      value:
        value.value != null
          ? EntitlementValueSerializer.serialize(value.value)
          : value.value,
    };
  },
};
