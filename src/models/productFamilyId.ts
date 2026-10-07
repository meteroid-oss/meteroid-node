// this file is @generated
import { decodeString } from "../decode.js";

export type ProductFamilyId = string;

/** Converts `ProductFamilyId` values from (`parse`) and to (`serialize`) their JSON form. */
export const ProductFamilyIdSerializer = {
  parse(json: any, path = "$"): ProductFamilyId {
    return decodeString(json, path);
  },

  serialize(value: ProductFamilyId): any {
    return value;
  },
};
