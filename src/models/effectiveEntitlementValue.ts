// this file is @generated
import { decodeObject } from "../decode.js";
import {
  type BooleanEffectiveEntitlementValue,
  BooleanEffectiveEntitlementValueSerializer,
} from "./booleanEffectiveEntitlementValue.js";
import {
  type ConfigEffectiveEntitlementValue,
  ConfigEffectiveEntitlementValueSerializer,
} from "./configEffectiveEntitlementValue.js";
import {
  type MeteredEffectiveEntitlementValue,
  MeteredEffectiveEntitlementValueSerializer,
} from "./meteredEffectiveEntitlementValue.js";

export interface EffectiveEntitlementValueBoolean
  extends BooleanEffectiveEntitlementValue {
  type: "BOOLEAN";
}
export interface EffectiveEntitlementValueMetered
  extends MeteredEffectiveEntitlementValue {
  type: "METERED";
}
export interface EffectiveEntitlementValueConfig extends ConfigEffectiveEntitlementValue {
  type: "CONFIG";
}

export type EffectiveEntitlementValue =
  | EffectiveEntitlementValueBoolean
  | EffectiveEntitlementValueMetered
  | EffectiveEntitlementValueConfig;

/** Converts `EffectiveEntitlementValue` values from (`parse`) and to (`serialize`) their JSON form. */
export const EffectiveEntitlementValueSerializer = {
  parse(json: any, path = "$"): EffectiveEntitlementValue {
    decodeObject(json, path);
    switch (json["type"]) {
      case "BOOLEAN":
        return {
          ...BooleanEffectiveEntitlementValueSerializer.parse(json, path),
          type: "BOOLEAN",
        };
      case "METERED":
        return {
          ...MeteredEffectiveEntitlementValueSerializer.parse(json, path),
          type: "METERED",
        };
      case "CONFIG":
        return {
          ...ConfigEffectiveEntitlementValueSerializer.parse(json, path),
          type: "CONFIG",
        };
      default:
        // A variant added to the API after this SDK was generated, kept as received.
        return json;
    }
  },

  serialize(value: EffectiveEntitlementValue): any {
    switch (value.type) {
      case "BOOLEAN":
        return {
          ...BooleanEffectiveEntitlementValueSerializer.serialize(value),
          type: "BOOLEAN",
        };
      case "METERED":
        return {
          ...MeteredEffectiveEntitlementValueSerializer.serialize(value),
          type: "METERED",
        };
      case "CONFIG":
        return {
          ...ConfigEffectiveEntitlementValueSerializer.serialize(value),
          type: "CONFIG",
        };
      default:
        return value;
    }
  },
};
