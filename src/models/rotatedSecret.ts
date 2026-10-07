// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";
/** Result of rotating a client secret */
export interface RotatedSecret {
  clientSecret: string;
  clientSecretHint: string;
}

/** Converts `RotatedSecret` values from (`parse`) and to (`serialize`) their JSON form. */
export const RotatedSecretSerializer = {
  parse(json: any, path = "$"): RotatedSecret {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["client_secret", "client_secret_hint"]),
      clientSecret: decodeString(json["client_secret"], path, "client_secret"),
      clientSecretHint: decodeString(
        json["client_secret_hint"],
        path,
        "client_secret_hint"
      ),
    };
  },

  serialize(value: RotatedSecret): any {
    return {
      ...extraProperties(value, ["clientSecret", "clientSecretHint"]),
      client_secret: value.clientSecret,
      client_secret_hint: value.clientSecretHint,
    };
  },
};
