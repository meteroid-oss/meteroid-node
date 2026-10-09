// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface WebhookEndpointSecret {
  secret: string;
}

/** Converts `WebhookEndpointSecret` values from (`parse`) and to (`serialize`) their JSON form. */
export const WebhookEndpointSecretSerializer = {
  parse(json: any, path = "$"): WebhookEndpointSecret {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["secret"]),
      secret: decodeString(json["secret"], path, "secret"),
    };
  },

  serialize(value: WebhookEndpointSecret): any {
    return {
      ...extraProperties(value, ["secret"]),
      secret: value.secret,
    };
  },
};
