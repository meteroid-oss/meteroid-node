// this file is @generated
import { decodeString } from "../decode.js";
/** Status of a connected account */
export const ConnectionStatus = {
  Pending: "pending",
  Active: "active",
  Revoked: "revoked",
  Suspended: "suspended",
} as const;
export type ConnectionStatus =
  | (typeof ConnectionStatus)[keyof typeof ConnectionStatus]
  | (string & {});

/** Converts `ConnectionStatus` values from (`parse`) and to (`serialize`) their JSON form. */
export const ConnectionStatusSerializer = {
  parse(json: any, path = "$"): ConnectionStatus {
    return decodeString(json, path);
  },

  serialize(value: ConnectionStatus): any {
    return value;
  },
};
