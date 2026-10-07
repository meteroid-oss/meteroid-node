// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type ProductId, ProductIdSerializer } from "./productId.js";
/** Minimal reference to the product a feature belongs to. */
export interface EntitlementProductRef {
  id: ProductId;
  name: string;
}

/** Converts `EntitlementProductRef` values from (`parse`) and to (`serialize`) their JSON form. */
export const EntitlementProductRefSerializer = {
  parse(json: any, path = "$"): EntitlementProductRef {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["id", "name"]),
      id: ProductIdSerializer.parse(json["id"], decodePath(path, "id")),
      name: decodeString(json["name"], path, "name"),
    };
  },

  serialize(value: EntitlementProductRef): any {
    return {
      ...extraProperties(value, ["id", "name"]),
      id: ProductIdSerializer.serialize(value.id),
      name: value.name,
    };
  },
};
