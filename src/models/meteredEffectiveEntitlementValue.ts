// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath } from "../decode.js";
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
  usage: MeteredEntitlementUsage;
}

/** Converts `MeteredEffectiveEntitlementValue` values from (`parse`) and to (`serialize`) their JSON form. */
export const MeteredEffectiveEntitlementValueSerializer = {
  parse(json: any, path = "$"): MeteredEffectiveEntitlementValue {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["spec", "usage"]),
      spec: MeteredEntitlementSpecSerializer.parse(
        json["spec"],
        decodePath(path, "spec")
      ),
      usage: MeteredEntitlementUsageSerializer.parse(
        json["usage"],
        decodePath(path, "usage")
      ),
    };
  },

  serialize(value: MeteredEffectiveEntitlementValue): any {
    return {
      ...extraProperties(value, ["spec", "usage"]),
      spec: MeteredEntitlementSpecSerializer.serialize(value.spec),
      usage: MeteredEntitlementUsageSerializer.serialize(value.usage),
    };
  },
};
