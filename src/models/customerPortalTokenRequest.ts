// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeList, decodeObject, decodePath } from "../decode.js";
import {
  type CustomerPortalScope,
  CustomerPortalScopeSerializer,
} from "./customerPortalScope.js";

export interface CustomerPortalTokenRequest {
  /**
   * Token lifetime in seconds. Defaults to 86400 (24 hours).
   * Must be between 60 and 2592000 (30 days).
   */
  expiresInSeconds?: number | null | undefined;
  /**
   * Scopes granted to the token. Defaults to `["read", "manage"]`.
   * Use `["read"]` for tokens that only read billing state, e.g. to gate features in a browser.
   */
  scopes?: CustomerPortalScope[] | null | undefined;
}

/** Converts `CustomerPortalTokenRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const CustomerPortalTokenRequestSerializer = {
  parse(json: any, path = "$"): CustomerPortalTokenRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["expires_in_seconds", "scopes"]),
      expiresInSeconds:
        json["expires_in_seconds"] != null
          ? decodeInteger(json["expires_in_seconds"], path, "expires_in_seconds")
          : json["expires_in_seconds"],
      scopes:
        json["scopes"] != null
          ? decodeList(
              json["scopes"],
              path,
              "scopes",
              (item: any, p: string, i: number) =>
                CustomerPortalScopeSerializer.parse(item, decodePath(p, i))
            )
          : json["scopes"],
    };
  },

  serialize(value: CustomerPortalTokenRequest): any {
    return {
      ...extraProperties(value, ["expiresInSeconds", "scopes"]),
      expires_in_seconds: value.expiresInSeconds,
      scopes:
        value.scopes != null
          ? value.scopes.map((item: any) => CustomerPortalScopeSerializer.serialize(item))
          : value.scopes,
    };
  },
};
