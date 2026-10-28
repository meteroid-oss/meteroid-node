// this file is @generated
import { decodeString } from "../decode.js";

export const ActorType = {
  User: "USER",
  Customer: "CUSTOMER",
  System: "SYSTEM",
  ApiKey: "API_KEY",
  OauthApp: "OAUTH_APP",
} as const;
export type ActorType = (typeof ActorType)[keyof typeof ActorType] | (string & {});

/** Converts `ActorType` values from (`parse`) and to (`serialize`) their JSON form. */
export const ActorTypeSerializer = {
  parse(json: any, path = "$"): ActorType {
    return decodeString(json, path);
  },

  serialize(value: ActorType): any {
    return value;
  },
};
