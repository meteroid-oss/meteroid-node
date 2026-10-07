// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodeString } from "../decode.js";

export interface CreateOAuthAppRequest {
  name: string;
  redirectUris: string[];
  scopes?: string[] | null | undefined;
}

/** Converts `CreateOAuthAppRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreateOAuthAppRequestSerializer = {
  parse(json: any, path = "$"): CreateOAuthAppRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["name", "redirect_uris", "scopes"]),
      name: decodeString(json["name"], path, "name"),
      redirectUris: decodeList(
        json["redirect_uris"],
        path,
        "redirect_uris",
        (item: any, p: string, i: number) => decodeString(item, p, i)
      ),
      scopes:
        json["scopes"] != null
          ? decodeList(
              json["scopes"],
              path,
              "scopes",
              (item: any, p: string, i: number) => decodeString(item, p, i)
            )
          : json["scopes"],
    };
  },

  serialize(value: CreateOAuthAppRequest): any {
    return {
      ...extraProperties(value, ["name", "redirectUris", "scopes"]),
      name: value.name,
      redirect_uris: value.redirectUris,
      scopes: value.scopes,
    };
  },
};
