// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type OAuthApp, OAuthAppSerializer } from "./oAuthApp.js";
/** Result of creating an OAuth app (includes the plain-text secret) */
export interface OAuthAppWithSecret {
  app: OAuthApp;
  clientSecret: string;
}

/** Converts `OAuthAppWithSecret` values from (`parse`) and to (`serialize`) their JSON form. */
export const OAuthAppWithSecretSerializer = {
  parse(json: any, path = "$"): OAuthAppWithSecret {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["app", "client_secret"]),
      app: OAuthAppSerializer.parse(json["app"], decodePath(path, "app")),
      clientSecret: decodeString(json["client_secret"], path, "client_secret"),
    };
  },

  serialize(value: OAuthAppWithSecret): any {
    return {
      ...extraProperties(value, ["app", "clientSecret"]),
      app: OAuthAppSerializer.serialize(value.app),
      client_secret: value.clientSecret,
    };
  },
};
