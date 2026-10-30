// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import { type License, LicenseSerializer } from "./license.js";

export interface LicenseListResponse {
  data: License[];
}

/** Converts `LicenseListResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const LicenseListResponseSerializer = {
  parse(json: any, path = "$"): LicenseListResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["data"]),
      data: decodeList(json["data"], path, "data", (item: any, p: string, i: number) =>
        LicenseSerializer.parse(item, decodePath(p, i))
      ),
    };
  },

  serialize(value: LicenseListResponse): any {
    return {
      ...extraProperties(value, ["data"]),
      data: value.data.map((item: any) => LicenseSerializer.serialize(item)),
    };
  },
};
