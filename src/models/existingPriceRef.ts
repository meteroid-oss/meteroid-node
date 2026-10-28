// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type PriceId, PriceIdSerializer } from "./priceId.js";

export interface ExistingPriceRef {
  id: PriceId;
  type: "EXISTING";
}

/** Converts `ExistingPriceRef` values from (`parse`) and to (`serialize`) their JSON form. */
export const ExistingPriceRefSerializer = {
  parse(json: any, path = "$"): ExistingPriceRef {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["id", "type"]),
      id: PriceIdSerializer.parse(json["id"], decodePath(path, "id")),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "EXISTING")
          : "EXISTING",
    };
  },

  serialize(value: ExistingPriceRef): any {
    return {
      ...extraProperties(value, ["id", "type"]),
      id: PriceIdSerializer.serialize(value.id),
      type: value.type ?? "EXISTING",
    };
  },
};
