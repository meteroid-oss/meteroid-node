// this file is @generated
import { parseDateTime } from "../datetime.js";
import { extraProperties } from "../json.js";

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
  parse(json: any): CustomerPortalTokenResponse {
    return {
      ...extraProperties(json, [
        "api_url",
        "expires_at",
        "portal_link",
        "portal_url",
        "token",
      ]),
      apiUrl: json["api_url"],
      expiresAt: parseDateTime(json["expires_at"]),
      portalLink: json["portal_link"],
      portalUrl: json["portal_url"],
      token: json["token"],
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
