// this file is @generated
import { decodeString } from "../decode.js";

export type ProductId = string;

/** Converts `ProductId` values from (`parse`) and to (`serialize`) their JSON form. */
export const ProductIdSerializer = {
  parse(json: any, path = "$"): ProductId {
    return decodeString(json, path);
  },

  serialize(value: ProductId): any {
    return value;
  },
};
