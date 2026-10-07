// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath } from "../decode.js";
import { type ProductId, ProductIdSerializer } from "./productId.js";

export interface ExistingProductRef {
  id: ProductId;
}

/** Converts `ExistingProductRef` values from (`parse`) and to (`serialize`) their JSON form. */
export const ExistingProductRefSerializer = {
  parse(json: any, path = "$"): ExistingProductRef {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["id"]),
      id: ProductIdSerializer.parse(json["id"], decodePath(path, "id")),
    };
  },

  serialize(value: ExistingProductRef): any {
    return {
      ...extraProperties(value, ["id"]),
      id: ProductIdSerializer.serialize(value.id),
    };
  },
};
