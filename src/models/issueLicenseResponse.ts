// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type License, LicenseSerializer } from "./license.js";

export interface IssueLicenseResponse {
  /** Online: one-time code the customer enters in their installation to activate the license. */
  activationCode?: string | null | undefined;
  license: License;
  /** Offline: the signed license (a JWT) to install in the installation. */
  offlineLicense?: string | null | undefined;
}

/** Converts `IssueLicenseResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const IssueLicenseResponseSerializer = {
  parse(json: any, path = "$"): IssueLicenseResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["activation_code", "license", "offline_license"]),
      activationCode:
        json["activation_code"] != null
          ? decodeString(json["activation_code"], path, "activation_code")
          : json["activation_code"],
      license: LicenseSerializer.parse(json["license"], decodePath(path, "license")),
      offlineLicense:
        json["offline_license"] != null
          ? decodeString(json["offline_license"], path, "offline_license")
          : json["offline_license"],
    };
  },

  serialize(value: IssueLicenseResponse): any {
    return {
      ...extraProperties(value, ["activationCode", "license", "offlineLicense"]),
      activation_code: value.activationCode,
      license: LicenseSerializer.serialize(value.license),
      offline_license: value.offlineLicense,
    };
  },
};
