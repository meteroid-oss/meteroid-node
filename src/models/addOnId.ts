// this file is @generated
import { decodeString } from "../decode.js";

export type AddOnId = string;

/** Converts `AddOnId` values from (`parse`) and to (`serialize`) their JSON form. */
export const AddOnIdSerializer = {
  parse(json: any, path = "$"): AddOnId {
    return decodeString(json, path);
  },

  serialize(value: AddOnId): any {
    return value;
  },
};
