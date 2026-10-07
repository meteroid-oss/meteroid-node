// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";
/** Token response as per OAuth 2.0 spec */
export interface TokenResponse {
  accessToken: string;
  expiresIn: number;
  refreshToken?: string | null | undefined;
  scope?: string | null | undefined;
  tokenType: string;
}

/** Converts `TokenResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const TokenResponseSerializer = {
  parse(json: any, path = "$"): TokenResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "access_token",
        "expires_in",
        "refresh_token",
        "scope",
        "token_type",
      ]),
      accessToken: decodeString(json["access_token"], path, "access_token"),
      expiresIn: decodeInteger(json["expires_in"], path, "expires_in"),
      refreshToken:
        json["refresh_token"] != null
          ? decodeString(json["refresh_token"], path, "refresh_token")
          : json["refresh_token"],
      scope:
        json["scope"] != null
          ? decodeString(json["scope"], path, "scope")
          : json["scope"],
      tokenType: decodeString(json["token_type"], path, "token_type"),
    };
  },

  serialize(value: TokenResponse): any {
    return {
      ...extraProperties(value, [
        "accessToken",
        "expiresIn",
        "refreshToken",
        "scope",
        "tokenType",
      ]),
      access_token: value.accessToken,
      expires_in: value.expiresIn,
      refresh_token: value.refreshToken,
      scope: value.scope,
      token_type: value.tokenType,
    };
  },
};
