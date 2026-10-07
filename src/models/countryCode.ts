// this file is @generated
import { decodeString } from "../decode.js";

export type CountryCode = string;

/** Converts `CountryCode` values from (`parse`) and to (`serialize`) their JSON form. */
export const CountryCodeSerializer = {
  parse(json: any, path = "$"): CountryCode {
    return decodeString(json, path);
  },

  serialize(value: CountryCode): any {
    return value;
  },
};
