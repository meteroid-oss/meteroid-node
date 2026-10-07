// this file is @generated
import { extraProperties } from "../json.js";
import { decodeBoolean, decodeInteger, decodeObject, decodeString } from "../decode.js";
/** Token introspection response as per RFC 7662 */
export interface TokenIntrospectionResponse {
  active: boolean;
  clientId?: string | null | undefined;
  exp?: number | null | undefined;
  iat?: number | null | undefined;
  scope?: string | null | undefined;
  sub?: string | null | undefined;
  tokenType?: string | null | undefined;
}

/** Converts `TokenIntrospectionResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const TokenIntrospectionResponseSerializer = {
  parse(json: any, path = "$"): TokenIntrospectionResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "active",
        "client_id",
        "exp",
        "iat",
        "scope",
        "sub",
        "token_type",
      ]),
      active: decodeBoolean(json["active"], path, "active"),
      clientId:
        json["client_id"] != null
          ? decodeString(json["client_id"], path, "client_id")
          : json["client_id"],
      exp: json["exp"] != null ? decodeInteger(json["exp"], path, "exp") : json["exp"],
      iat: json["iat"] != null ? decodeInteger(json["iat"], path, "iat") : json["iat"],
      scope:
        json["scope"] != null
          ? decodeString(json["scope"], path, "scope")
          : json["scope"],
      sub: json["sub"] != null ? decodeString(json["sub"], path, "sub") : json["sub"],
      tokenType:
        json["token_type"] != null
          ? decodeString(json["token_type"], path, "token_type")
          : json["token_type"],
    };
  },

  serialize(value: TokenIntrospectionResponse): any {
    return {
      ...extraProperties(value, [
        "active",
        "clientId",
        "exp",
        "iat",
        "scope",
        "sub",
        "tokenType",
      ]),
      active: value.active,
      client_id: value.clientId,
      exp: value.exp,
      iat: value.iat,
      scope: value.scope,
      sub: value.sub,
      token_type: value.tokenType,
    };
  },
};
