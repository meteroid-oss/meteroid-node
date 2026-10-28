// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import {
  type MeteredEntitlementSpec,
  MeteredEntitlementSpecSerializer,
} from "./meteredEntitlementSpec.js";
import {
  type MeteredEntitlementUsage,
  MeteredEntitlementUsageSerializer,
} from "./meteredEntitlementUsage.js";

export interface MeteredEffectiveEntitlementValue {
  spec: MeteredEntitlementSpec;
  type: "METERED";
  usage: MeteredEntitlementUsage;
}

/** Converts `MeteredEffectiveEntitlementValue` values from (`parse`) and to (`serialize`) their JSON form. */
export const MeteredEffectiveEntitlementValueSerializer = {
  parse(json: any, path = "$"): MeteredEffectiveEntitlementValue {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["spec", "type", "usage"]),
      spec: MeteredEntitlementSpecSerializer.parse(
        json["spec"],
        decodePath(path, "spec")
      ),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "METERED")
          : "METERED",
      usage: MeteredEntitlementUsageSerializer.parse(
        json["usage"],
        decodePath(path, "usage")
      ),
    };
  },

  serialize(value: MeteredEffectiveEntitlementValue): any {
    return {
      ...extraProperties(value, ["spec", "type", "usage"]),
      spec: MeteredEntitlementSpecSerializer.serialize(value.spec),
      type: value.type ?? "METERED",
      usage: MeteredEntitlementUsageSerializer.serialize(value.usage),
    };
  },
};
