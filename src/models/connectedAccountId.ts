// this file is @generated
import { decodeString } from "../decode.js";

export type ConnectedAccountId = string;

/** Converts `ConnectedAccountId` values from (`parse`) and to (`serialize`) their JSON form. */
export const ConnectedAccountIdSerializer = {
  parse(json: any, path = "$"): ConnectedAccountId {
    return decodeString(json, path);
  },

  serialize(value: ConnectedAccountId): any {
    return value;
  },
};
