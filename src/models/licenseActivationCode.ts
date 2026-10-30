// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface LicenseActivationCode {
  activationCode: string;
}

/** Converts `LicenseActivationCode` values from (`parse`) and to (`serialize`) their JSON form. */
export const LicenseActivationCodeSerializer = {
  parse(json: any, path = "$"): LicenseActivationCode {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["activation_code"]),
      activationCode: decodeString(json["activation_code"], path, "activation_code"),
    };
  },

  serialize(value: LicenseActivationCode): any {
    return {
      ...extraProperties(value, ["activationCode"]),
      activation_code: value.activationCode,
    };
  },
};
