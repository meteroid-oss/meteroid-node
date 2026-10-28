// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type ProductId, ProductIdSerializer } from "./productId.js";

export interface ExistingProductRef {
  id: ProductId;
  type: "EXISTING";
}

/** Converts `ExistingProductRef` values from (`parse`) and to (`serialize`) their JSON form. */
export const ExistingProductRefSerializer = {
  parse(json: any, path = "$"): ExistingProductRef {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["id", "type"]),
      id: ProductIdSerializer.parse(json["id"], decodePath(path, "id")),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "EXISTING")
          : "EXISTING",
    };
  },

  serialize(value: ExistingProductRef): any {
    return {
      ...extraProperties(value, ["id", "type"]),
      id: ProductIdSerializer.serialize(value.id),
      type: value.type ?? "EXISTING",
    };
  },
};
