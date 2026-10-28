// this file is @generated
import { decodeString } from "../decode.js";

export const AutoTopUpMethod = {
  Fixed: "FIXED",
  ToTarget: "TO_TARGET",
} as const;
export type AutoTopUpMethod =
  | (typeof AutoTopUpMethod)[keyof typeof AutoTopUpMethod]
  | (string & {});

/** Converts `AutoTopUpMethod` values from (`parse`) and to (`serialize`) their JSON form. */
export const AutoTopUpMethodSerializer = {
  parse(json: any, path = "$"): AutoTopUpMethod {
    return decodeString(json, path);
  },

  serialize(value: AutoTopUpMethod): any {
    return value;
  },
};
