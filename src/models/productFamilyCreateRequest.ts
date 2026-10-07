// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface ProductFamilyCreateRequest {
  name: string;
}

/** Converts `ProductFamilyCreateRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const ProductFamilyCreateRequestSerializer = {
  parse(json: any, path = "$"): ProductFamilyCreateRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["name"]),
      name: decodeString(json["name"], path, "name"),
    };
  },

  serialize(value: ProductFamilyCreateRequest): any {
    return {
      ...extraProperties(value, ["name"]),
      name: value.name,
    };
  },
};
