// this file is @generated
import { decodeObject } from "../decode.js";
import {
  type BooleanFeatureType,
  BooleanFeatureTypeSerializer,
} from "./booleanFeatureType.js";
import {
  type ConfigFeatureType,
  ConfigFeatureTypeSerializer,
} from "./configFeatureType.js";
import {
  type MeteredFeatureType,
  MeteredFeatureTypeSerializer,
} from "./meteredFeatureType.js";

export interface FeatureTypeBoolean extends BooleanFeatureType {
  type: "BOOLEAN";
}
export interface FeatureTypeMetered extends MeteredFeatureType {
  type: "METERED";
}
export interface FeatureTypeConfig extends ConfigFeatureType {
  type: "CONFIG";
}

export type FeatureType = FeatureTypeBoolean | FeatureTypeMetered | FeatureTypeConfig;

/** Converts `FeatureType` values from (`parse`) and to (`serialize`) their JSON form. */
export const FeatureTypeSerializer = {
  parse(json: any, path = "$"): FeatureType {
    decodeObject(json, path);
    switch (json["type"]) {
      case "BOOLEAN":
        return {
          ...BooleanFeatureTypeSerializer.parse(json, path),
          type: "BOOLEAN",
        };
      case "METERED":
        return {
          ...MeteredFeatureTypeSerializer.parse(json, path),
          type: "METERED",
        };
      case "CONFIG":
        return {
          ...ConfigFeatureTypeSerializer.parse(json, path),
          type: "CONFIG",
        };
      default:
        // A variant added to the API after this SDK was generated, kept as received.
        return json;
    }
  },

  serialize(value: FeatureType): any {
    switch (value.type) {
      case "BOOLEAN":
        return {
          ...BooleanFeatureTypeSerializer.serialize(value),
          type: "BOOLEAN",
        };
      case "METERED":
        return {
          ...MeteredFeatureTypeSerializer.serialize(value),
          type: "METERED",
        };
      case "CONFIG":
        return {
          ...ConfigFeatureTypeSerializer.serialize(value),
          type: "CONFIG",
        };
      default:
        return value;
    }
  },
};
