// this file is @generated
import { decodeString } from "../decode.js";

export const CustomPropertyType = {
  Text: "TEXT",
  Number: "NUMBER",
  Boolean: "BOOLEAN",
  Date: "DATE",
  Datetime: "DATETIME",
  SingleSelect: "SINGLE_SELECT",
  MultiSelect: "MULTI_SELECT",
  Json: "JSON",
  Url: "URL",
  Email: "EMAIL",
} as const;
export type CustomPropertyType =
  | (typeof CustomPropertyType)[keyof typeof CustomPropertyType]
  | (string & {});

/** Converts `CustomPropertyType` values from (`parse`) and to (`serialize`) their JSON form. */
export const CustomPropertyTypeSerializer = {
  parse(json: any, path = "$"): CustomPropertyType {
    return decodeString(json, path);
  },

  serialize(value: CustomPropertyType): any {
    return value;
  },
};
