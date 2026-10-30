// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import {
  type LicenseSigningKey,
  LicenseSigningKeySerializer,
} from "./licenseSigningKey.js";
import {
  type LicensingEndpoints,
  LicensingEndpointsSerializer,
} from "./licensingEndpoints.js";

export interface LicenseSigningKeysResponse {
  endpoints: LicensingEndpoints;
  /** Active key first. The first key is created on first issue. */
  keys: LicenseSigningKey[];
}

/** Converts `LicenseSigningKeysResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const LicenseSigningKeysResponseSerializer = {
  parse(json: any, path = "$"): LicenseSigningKeysResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["endpoints", "keys"]),
      endpoints: LicensingEndpointsSerializer.parse(
        json["endpoints"],
        decodePath(path, "endpoints")
      ),
      keys: decodeList(json["keys"], path, "keys", (item: any, p: string, i: number) =>
        LicenseSigningKeySerializer.parse(item, decodePath(p, i))
      ),
    };
  },

  serialize(value: LicenseSigningKeysResponse): any {
    return {
      ...extraProperties(value, ["endpoints", "keys"]),
      endpoints: LicensingEndpointsSerializer.serialize(value.endpoints),
      keys: value.keys.map((item: any) => LicenseSigningKeySerializer.serialize(item)),
    };
  },
};
