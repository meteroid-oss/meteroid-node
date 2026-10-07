// this file is @generated
import { decodeString } from "../decode.js";

export type OAuthAppId = string;

/** Converts `OAuthAppId` values from (`parse`) and to (`serialize`) their JSON form. */
export const OAuthAppIdSerializer = {
  parse(json: any, path = "$"): OAuthAppId {
    return decodeString(json, path);
  },

  serialize(value: OAuthAppId): any {
    return value;
  },
};
