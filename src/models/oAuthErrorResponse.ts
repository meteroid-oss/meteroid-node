// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type OAuthErrorCode, OAuthErrorCodeSerializer } from "./oAuthErrorCode.js";
/** OAuth 2.0 error response as per RFC 6749 Section 5.2 */
export interface OAuthErrorResponse {
  error: OAuthErrorCode;
  errorDescription?: string | null | undefined;
  errorUri?: string | null | undefined;
}

/** Converts `OAuthErrorResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const OAuthErrorResponseSerializer = {
  parse(json: any, path = "$"): OAuthErrorResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["error", "error_description", "error_uri"]),
      error: OAuthErrorCodeSerializer.parse(json["error"], decodePath(path, "error")),
      errorDescription:
        json["error_description"] != null
          ? decodeString(json["error_description"], path, "error_description")
          : json["error_description"],
      errorUri:
        json["error_uri"] != null
          ? decodeString(json["error_uri"], path, "error_uri")
          : json["error_uri"],
    };
  },

  serialize(value: OAuthErrorResponse): any {
    return {
      ...extraProperties(value, ["error", "errorDescription", "errorUri"]),
      error: OAuthErrorCodeSerializer.serialize(value.error),
      error_description: value.errorDescription,
      error_uri: value.errorUri,
    };
  },
};
