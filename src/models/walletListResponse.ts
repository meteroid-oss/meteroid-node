// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import { type Wallet, WalletSerializer } from "./wallet.js";
/** A customer's wallets, the customer's own currency first. */
export interface WalletListResponse {
  data: Wallet[];
}

/** Converts `WalletListResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const WalletListResponseSerializer = {
  parse(json: any, path = "$"): WalletListResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["data"]),
      data: decodeList(json["data"], path, "data", (item: any, p: string, i: number) =>
        WalletSerializer.parse(item, decodePath(p, i))
      ),
    };
  },

  serialize(value: WalletListResponse): any {
    return {
      ...extraProperties(value, ["data"]),
      data: value.data.map((item: any) => WalletSerializer.serialize(item)),
    };
  },
};
