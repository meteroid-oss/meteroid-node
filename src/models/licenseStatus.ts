// this file is @generated
import { decodeString } from "../decode.js";

export const LicenseStatus = {
  Pending: "PENDING",
  Active: "ACTIVE",
  Revoked: "REVOKED",
} as const;
export type LicenseStatus =
  | (typeof LicenseStatus)[keyof typeof LicenseStatus]
  | (string & {});

/** Converts `LicenseStatus` values from (`parse`) and to (`serialize`) their JSON form. */
export const LicenseStatusSerializer = {
  parse(json: any, path = "$"): LicenseStatus {
    return decodeString(json, path);
  },

  serialize(value: LicenseStatus): any {
    return value;
  },
};
