// this file is @generated
import { decodeString } from "../decode.js";

export const AutoTopUpStatus = {
  Active: "ACTIVE",
  Disabled: "DISABLED",
  Suspended: "SUSPENDED",
} as const;
export type AutoTopUpStatus =
  | (typeof AutoTopUpStatus)[keyof typeof AutoTopUpStatus]
  | (string & {});

/** Converts `AutoTopUpStatus` values from (`parse`) and to (`serialize`) their JSON form. */
export const AutoTopUpStatusSerializer = {
  parse(json: any, path = "$"): AutoTopUpStatus {
    return decodeString(json, path);
  },

  serialize(value: AutoTopUpStatus): any {
    return value;
  },
};
