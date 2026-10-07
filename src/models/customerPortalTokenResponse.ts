// this file is @generated
import { extraProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodeString } from "../decode.js";

export interface CustomerPortalTokenResponse {
  /** Base URL of the public REST API */
  apiUrl: string;
  /** When the token expires (RFC 3339) */
  expiresAt: Date;
  /** Hosted customer portal URL, token included */
  portalLink: string;
  /** Base URL of the customer portal */
  portalUrl: string;
  /** JWT token for portal access */
  token: string;
}

/** Converts `CustomerPortalTokenResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const CustomerPortalTokenResponseSerializer = {
  parse(json: any, path = "$"): CustomerPortalTokenResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "api_url",
        "expires_at",
        "portal_link",
        "portal_url",
        "token",
      ]),
      apiUrl: decodeString(json["api_url"], path, "api_url"),
      expiresAt: decodeDateTime(json["expires_at"], path, "expires_at"),
      portalLink: decodeString(json["portal_link"], path, "portal_link"),
      portalUrl: decodeString(json["portal_url"], path, "portal_url"),
      token: decodeString(json["token"], path, "token"),
    };
  },

  serialize(value: CustomerPortalTokenResponse): any {
    return {
      ...extraProperties(value, [
        "apiUrl",
        "expiresAt",
        "portalLink",
        "portalUrl",
        "token",
      ]),
      api_url: value.apiUrl,
      expires_at: value.expiresAt,
      portal_link: value.portalLink,
      portal_url: value.portalUrl,
      token: value.token,
    };
  },
};
