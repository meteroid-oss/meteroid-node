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
  type CustomPropertyDefinitionId,
  CustomPropertyDefinitionIdSerializer,
} from "./customPropertyDefinitionId.js";
import {
  type CustomPropertyEntityType,
  CustomPropertyEntityTypeSerializer,
} from "./customPropertyEntityType.js";
import {
  type CustomPropertyType,
  CustomPropertyTypeSerializer,
} from "./customPropertyType.js";
import { type PropertyConfig, PropertyConfigSerializer } from "./propertyConfig.js";

export interface CustomPropertyDefinition {
  archived: boolean;
  config: PropertyConfig;
  defaultValue?: unknown | undefined;
  description?: string | null | undefined;
  displayOrder: number;
  entityType: CustomPropertyEntityType;
  id: CustomPropertyDefinitionId;
  key: string;
  name: string;
  propertyType: CustomPropertyType;
  required: boolean;
}

/** Converts `CustomPropertyDefinition` values from (`parse`) and to (`serialize`) their JSON form. */
export const CustomPropertyDefinitionSerializer = {
  parse(json: any, path = "$"): CustomPropertyDefinition {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "archived",
        "config",
        "default_value",
        "description",
        "display_order",
        "entity_type",
        "id",
        "key",
        "name",
        "property_type",
        "required",
      ]),
      archived: decodeBoolean(json["archived"], path, "archived"),
      config: PropertyConfigSerializer.parse(json["config"], decodePath(path, "config")),
      defaultValue: json["default_value"],
      description:
        json["description"] != null
          ? decodeString(json["description"], path, "description")
          : json["description"],
      displayOrder: decodeInteger(json["display_order"], path, "display_order"),
      entityType: CustomPropertyEntityTypeSerializer.parse(
        json["entity_type"],
        decodePath(path, "entity_type")
      ),
      id: CustomPropertyDefinitionIdSerializer.parse(json["id"], decodePath(path, "id")),
      key: decodeString(json["key"], path, "key"),
      name: decodeString(json["name"], path, "name"),
      propertyType: CustomPropertyTypeSerializer.parse(
        json["property_type"],
        decodePath(path, "property_type")
      ),
      required: decodeBoolean(json["required"], path, "required"),
    };
  },

  serialize(value: CustomPropertyDefinition): any {
    return {
      ...extraProperties(value, [
        "archived",
        "config",
        "defaultValue",
        "description",
        "displayOrder",
        "entityType",
        "id",
        "key",
        "name",
        "propertyType",
        "required",
      ]),
      archived: value.archived,
      config: PropertyConfigSerializer.serialize(value.config),
      default_value: value.defaultValue,
      description: value.description,
      display_order: value.displayOrder,
      entity_type: CustomPropertyEntityTypeSerializer.serialize(value.entityType),
      id: CustomPropertyDefinitionIdSerializer.serialize(value.id),
      key: value.key,
      name: value.name,
      property_type: CustomPropertyTypeSerializer.serialize(value.propertyType),
      required: value.required,
    };
  },
};
