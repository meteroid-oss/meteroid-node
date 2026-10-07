// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import { type OAuthApp, OAuthAppSerializer } from "./oAuthApp.js";

export interface OAuthAppsResponse {
  data: OAuthApp[];
}

/** Converts `OAuthAppsResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const OAuthAppsResponseSerializer = {
  parse(json: any, path = "$"): OAuthAppsResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["data"]),
      data: decodeList(json["data"], path, "data", (item: any, p: string, i: number) =>
        OAuthAppSerializer.parse(item, decodePath(p, i))
      ),
    };
  },

  serialize(value: OAuthAppsResponse): any {
    return {
      ...extraProperties(value, ["data"]),
      data: value.data.map((item: any) => OAuthAppSerializer.serialize(item)),
    };
  },
};
