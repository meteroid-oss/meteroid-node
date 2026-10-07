// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type ProductFamilyId, ProductFamilyIdSerializer } from "./productFamilyId.js";

export interface ProductFamily {
  id: ProductFamilyId;
  name: string;
}

/** Converts `ProductFamily` values from (`parse`) and to (`serialize`) their JSON form. */
export const ProductFamilySerializer = {
  parse(json: any, path = "$"): ProductFamily {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["id", "name"]),
      id: ProductFamilyIdSerializer.parse(json["id"], decodePath(path, "id")),
      name: decodeString(json["name"], path, "name"),
    };
  },

  serialize(value: ProductFamily): any {
    return {
      ...extraProperties(value, ["id", "name"]),
      id: ProductFamilyIdSerializer.serialize(value.id),
      name: value.name,
    };
  },
};
