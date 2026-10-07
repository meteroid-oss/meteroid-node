// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import { type ConnectedAccount, ConnectedAccountSerializer } from "./connectedAccount.js";

export interface ConnectedAccountsResponse {
  data: ConnectedAccount[];
}

/** Converts `ConnectedAccountsResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const ConnectedAccountsResponseSerializer = {
  parse(json: any, path = "$"): ConnectedAccountsResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["data"]),
      data: decodeList(json["data"], path, "data", (item: any, p: string, i: number) =>
        ConnectedAccountSerializer.parse(item, decodePath(p, i))
      ),
    };
  },

  serialize(value: ConnectedAccountsResponse): any {
    return {
      ...extraProperties(value, ["data"]),
      data: value.data.map((item: any) => ConnectedAccountSerializer.serialize(item)),
    };
  },
};
