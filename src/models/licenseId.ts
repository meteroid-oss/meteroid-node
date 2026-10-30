// this file is @generated
import { decodeString } from "../decode.js";

export type LicenseId = string;

/** Converts `LicenseId` values from (`parse`) and to (`serialize`) their JSON form. */
export const LicenseIdSerializer = {
  parse(json: any, path = "$"): LicenseId {
    return decodeString(json, path);
  },

  serialize(value: LicenseId): any {
    return value;
  },
};
