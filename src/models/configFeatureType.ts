// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath, decodeString } from "../decode.js";
import { type ConfigValueType, ConfigValueTypeSerializer } from "./configValueType.js";
/** A static, typed configuration value. No metric — resolved synchronously. */
export interface ConfigFeatureType {
  /** Allowed values when `value_type = SELECT`. Empty otherwise. */
  options?: string[] | undefined;
  type: "CONFIG";
  /** The feature's value type, fixed at creation. */
  valueType: ConfigValueType;
}

/** Converts `ConfigFeatureType` values from (`parse`) and to (`serialize`) their JSON form. */
export const ConfigFeatureTypeSerializer = {
  parse(json: any, path = "$"): ConfigFeatureType {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["options", "type", "value_type"]),
      options:
        json["options"] != null
          ? decodeList(
              json["options"],
              path,
              "options",
              (item: any, p: string, i: number) => decodeString(item, p, i)
            )
          : undefined,
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "CONFIG")
          : "CONFIG",
      valueType: ConfigValueTypeSerializer.parse(
        json["value_type"],
        decodePath(path, "value_type")
      ),
    };
  },

  serialize(value: ConfigFeatureType): any {
    return {
      ...extraProperties(value, ["options", "type", "valueType"]),
      options: value.options,
      type: value.type ?? "CONFIG",
      value_type: ConfigValueTypeSerializer.serialize(value.valueType),
    };
  },
};
