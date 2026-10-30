// this file is @generated
import { extraProperties } from "../json.js";
import { decodeBoolean, decodeObject } from "../decode.js";

export interface RevokeLicenseRequest {
  /**
   * Stop at once: the installation drops its license on its next refresh. Otherwise the
   * license keeps working until it expires, and is not renewed.
   */
  immediately?: boolean | undefined;
}

/** Converts `RevokeLicenseRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const RevokeLicenseRequestSerializer = {
  parse(json: any, path = "$"): RevokeLicenseRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["immediately"]),
      immediately:
        json["immediately"] != null
          ? decodeBoolean(json["immediately"], path, "immediately")
          : undefined,
    };
  },

  serialize(value: RevokeLicenseRequest): any {
    return {
      ...extraProperties(value, ["immediately"]),
      immediately: value.immediately,
    };
  },
};
