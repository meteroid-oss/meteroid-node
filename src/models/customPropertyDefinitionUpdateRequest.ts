// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeInteger,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type PropertyConfig, PropertyConfigSerializer } from "./propertyConfig.js";
/**
 * Update of a definition. `key`, `entity_type` and `property_type` are immutable and cannot be
 * changed here. Any field left absent is unchanged.
 */
export interface CustomPropertyDefinitionUpdateRequest {
  config?: PropertyConfig | null | undefined;
  defaultValue?: unknown | undefined;
  description?: string | null | undefined;
  displayOrder?: number | null | undefined;
  name?: string | null | undefined;
  required?: boolean | null | undefined;
}

/** Converts `CustomPropertyDefinitionUpdateRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const CustomPropertyDefinitionUpdateRequestSerializer = {
  parse(json: any, path = "$"): CustomPropertyDefinitionUpdateRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "config",
        "default_value",
        "description",
        "display_order",
        "name",
        "required",
      ]),
      config:
        json["config"] != null
          ? PropertyConfigSerializer.parse(json["config"], decodePath(path, "config"))
          : json["config"],
      defaultValue: json["default_value"],
      description:
        json["description"] != null
          ? decodeString(json["description"], path, "description")
          : json["description"],
      displayOrder:
        json["display_order"] != null
          ? decodeInteger(json["display_order"], path, "display_order")
          : json["display_order"],
      name:
        json["name"] != null ? decodeString(json["name"], path, "name") : json["name"],
      required:
        json["required"] != null
          ? decodeBoolean(json["required"], path, "required")
          : json["required"],
    };
  },

  serialize(value: CustomPropertyDefinitionUpdateRequest): any {
    return {
      ...extraProperties(value, [
        "config",
        "defaultValue",
        "description",
        "displayOrder",
        "name",
        "required",
      ]),
      config:
        value.config != null
          ? PropertyConfigSerializer.serialize(value.config)
          : value.config,
      default_value: value.defaultValue,
      description: value.description,
      display_order: value.displayOrder,
      name: value.name,
      required: value.required,
    };
  },
};
