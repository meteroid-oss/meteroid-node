// this file is @generated
import { decodeString } from "../decode.js";

export const CreditGrantStatus = {
  Pending: "PENDING",
  Active: "ACTIVE",
  Depleted: "DEPLETED",
  Expired: "EXPIRED",
} as const;
export type CreditGrantStatus =
  | (typeof CreditGrantStatus)[keyof typeof CreditGrantStatus]
  | (string & {});

/** Converts `CreditGrantStatus` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditGrantStatusSerializer = {
  parse(json: any, path = "$"): CreditGrantStatus {
    return decodeString(json, path);
  },

  serialize(value: CreditGrantStatus): any {
    return value;
  },
};
