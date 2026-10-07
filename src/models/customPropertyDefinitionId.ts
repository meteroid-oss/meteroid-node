// this file is @generated
import { decodeString } from "../decode.js";

export type CustomPropertyDefinitionId = string;

/** Converts `CustomPropertyDefinitionId` values from (`parse`) and to (`serialize`) their JSON form. */
export const CustomPropertyDefinitionIdSerializer = {
  parse(json: any, path = "$"): CustomPropertyDefinitionId {
    return decodeString(json, path);
  },

  serialize(value: CustomPropertyDefinitionId): any {
    return value;
  },
};
