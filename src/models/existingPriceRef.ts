// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath } from "../decode.js";
import { type PriceId, PriceIdSerializer } from "./priceId.js";

export interface ExistingPriceRef {
  id: PriceId;
}

/** Converts `ExistingPriceRef` values from (`parse`) and to (`serialize`) their JSON form. */
export const ExistingPriceRefSerializer = {
  parse(json: any, path = "$"): ExistingPriceRef {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["id"]),
      id: PriceIdSerializer.parse(json["id"], decodePath(path, "id")),
    };
  },

  serialize(value: ExistingPriceRef): any {
    return {
      ...extraProperties(value, ["id"]),
      id: PriceIdSerializer.serialize(value.id),
    };
  },
};
