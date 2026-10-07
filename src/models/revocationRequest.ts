// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";
/** Token revocation request */
export interface RevocationRequest {
  /** The token to revoke */
  token: string;
  /** Optional hint about the token type (access_token or refresh_token) */
  tokenTypeHint?: string | null | undefined;
}

/** Converts `RevocationRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const RevocationRequestSerializer = {
  parse(json: any, path = "$"): RevocationRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["token", "token_type_hint"]),
      token: decodeString(json["token"], path, "token"),
      tokenTypeHint:
        json["token_type_hint"] != null
          ? decodeString(json["token_type_hint"], path, "token_type_hint")
          : json["token_type_hint"],
    };
  },

  serialize(value: RevocationRequest): any {
    return {
      ...extraProperties(value, ["token", "tokenTypeHint"]),
      token: value.token,
      token_type_hint: value.tokenTypeHint,
    };
  },
};
