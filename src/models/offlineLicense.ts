// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface OfflineLicense {
  /** The signed license (a JWT) to install in the air-gapped installation. */
  license: string;
}

/** Converts `OfflineLicense` values from (`parse`) and to (`serialize`) their JSON form. */
export const OfflineLicenseSerializer = {
  parse(json: any, path = "$"): OfflineLicense {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["license"]),
      license: decodeString(json["license"], path, "license"),
    };
  },

  serialize(value: OfflineLicense): any {
    return {
      ...extraProperties(value, ["license"]),
      license: value.license,
    };
  },
};
