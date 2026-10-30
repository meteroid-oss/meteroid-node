// this file is @generated
import { decodeString } from "../decode.js";

export const LicenseSigningKeyStatus = {
  Active: "ACTIVE",
  Retired: "RETIRED",
} as const;
export type LicenseSigningKeyStatus =
  | (typeof LicenseSigningKeyStatus)[keyof typeof LicenseSigningKeyStatus]
  | (string & {});

/** Converts `LicenseSigningKeyStatus` values from (`parse`) and to (`serialize`) their JSON form. */
export const LicenseSigningKeyStatusSerializer = {
  parse(json: any, path = "$"): LicenseSigningKeyStatus {
    return decodeString(json, path);
  },

  serialize(value: LicenseSigningKeyStatus): any {
    return value;
  },
};
