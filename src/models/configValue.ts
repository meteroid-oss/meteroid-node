// this file is @generated
import { decodeObject } from "../decode.js";
import {
  type BooleanConfigValue,
  BooleanConfigValueSerializer,
} from "./booleanConfigValue.js";
import { type JsonConfigValue, JsonConfigValueSerializer } from "./jsonConfigValue.js";
import {
  type NumberConfigValue,
  NumberConfigValueSerializer,
} from "./numberConfigValue.js";
import { type TextConfigValue, TextConfigValueSerializer } from "./textConfigValue.js";

export interface ConfigValueNumber extends NumberConfigValue {
  kind: "NUMBER";
}
export interface ConfigValueBoolean extends BooleanConfigValue {
  kind: "BOOLEAN";
}
export interface ConfigValueText extends TextConfigValue {
  kind: "TEXT";
}
export interface ConfigValueJson extends JsonConfigValue {
  kind: "JSON";
}

/**
 * A static, typed configuration value carried by a Config entitlement. Resolved synchronously
 * through the entitlement hierarchy — no metric, no usage counter.
 */
export type ConfigValue =
  | ConfigValueNumber
  | ConfigValueBoolean
  | ConfigValueText
  | ConfigValueJson;

/** Converts `ConfigValue` values from (`parse`) and to (`serialize`) their JSON form. */
export const ConfigValueSerializer = {
  parse(json: any, path = "$"): ConfigValue {
    decodeObject(json, path);
    switch (json["kind"]) {
      case "NUMBER":
        return {
          ...NumberConfigValueSerializer.parse(json, path),
          kind: "NUMBER",
        };
      case "BOOLEAN":
        return {
          ...BooleanConfigValueSerializer.parse(json, path),
          kind: "BOOLEAN",
        };
      case "TEXT":
        return {
          ...TextConfigValueSerializer.parse(json, path),
          kind: "TEXT",
        };
      case "JSON":
        return {
          ...JsonConfigValueSerializer.parse(json, path),
          kind: "JSON",
        };
      default:
        // A variant added to the API after this SDK was generated, kept as received.
        return json;
    }
  },

  serialize(value: ConfigValue): any {
    switch (value.kind) {
      case "NUMBER":
        return {
          ...NumberConfigValueSerializer.serialize(value),
          kind: "NUMBER",
        };
      case "BOOLEAN":
        return {
          ...BooleanConfigValueSerializer.serialize(value),
          kind: "BOOLEAN",
        };
      case "TEXT":
        return {
          ...TextConfigValueSerializer.serialize(value),
          kind: "TEXT",
        };
      case "JSON":
        return {
          ...JsonConfigValueSerializer.serialize(value),
          kind: "JSON",
        };
      default:
        return value;
    }
  },
};
