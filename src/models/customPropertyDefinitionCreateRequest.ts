// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeInteger,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import {
  type CustomPropertyEntityType,
  CustomPropertyEntityTypeSerializer,
} from "./customPropertyEntityType.js";
import {
  type CustomPropertyType,
  CustomPropertyTypeSerializer,
} from "./customPropertyType.js";
import { type PropertyConfig, PropertyConfigSerializer } from "./propertyConfig.js";

export interface CustomPropertyDefinitionCreateRequest {
  config?: PropertyConfig | undefined;
  defaultValue?: unknown | undefined;
  description?: string | null | undefined;
  displayOrder?: number | undefined;
  entityType: CustomPropertyEntityType;
  /** Immutable machine name; letters, digits and underscores only. Unique per entity type. */
  key: string;
  name: string;
  propertyType: CustomPropertyType;
  required?: boolean | undefined;
}

/** Converts `CustomPropertyDefinitionCreateRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const CustomPropertyDefinitionCreateRequestSerializer = {
  parse(json: any, path = "$"): CustomPropertyDefinitionCreateRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "config",
        "default_value",
        "description",
        "display_order",
        "entity_type",
        "key",
        "name",
        "property_type",
        "required",
      ]),
      config:
        json["config"] != null
          ? PropertyConfigSerializer.parse(json["config"], decodePath(path, "config"))
          : undefined,
      defaultValue: json["default_value"],
      description:
        json["description"] != null
          ? decodeString(json["description"], path, "description")
          : json["description"],
      displayOrder:
        json["display_order"] != null
          ? decodeInteger(json["display_order"], path, "display_order")
          : undefined,
      entityType: CustomPropertyEntityTypeSerializer.parse(
        json["entity_type"],
        decodePath(path, "entity_type")
      ),
      key: decodeString(json["key"], path, "key"),
      name: decodeString(json["name"], path, "name"),
      propertyType: CustomPropertyTypeSerializer.parse(
        json["property_type"],
        decodePath(path, "property_type")
      ),
      required:
        json["required"] != null
          ? decodeBoolean(json["required"], path, "required")
          : undefined,
    };
  },

  serialize(value: CustomPropertyDefinitionCreateRequest): any {
    return {
      ...extraProperties(value, [
        "config",
        "defaultValue",
        "description",
        "displayOrder",
        "entityType",
        "key",
        "name",
        "propertyType",
        "required",
      ]),
      config:
        value.config != null
          ? PropertyConfigSerializer.serialize(value.config)
          : undefined,
      default_value: value.defaultValue,
      description: value.description,
      display_order: value.displayOrder,
      entity_type: CustomPropertyEntityTypeSerializer.serialize(value.entityType),
      key: value.key,
      name: value.name,
      property_type: CustomPropertyTypeSerializer.serialize(value.propertyType),
      required: value.required,
    };
  },
};
