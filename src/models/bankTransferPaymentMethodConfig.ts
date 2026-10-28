// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type BankAccountId, BankAccountIdSerializer } from "./bankAccountId.js";

export interface BankTransferPaymentMethodConfig {
  accountId?: BankAccountId | null | undefined;
  type: "bank_transfer";
}

/** Converts `BankTransferPaymentMethodConfig` values from (`parse`) and to (`serialize`) their JSON form. */
export const BankTransferPaymentMethodConfigSerializer = {
  parse(json: any, path = "$"): BankTransferPaymentMethodConfig {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["account_id", "type"]),
      accountId:
        json["account_id"] != null
          ? BankAccountIdSerializer.parse(
              json["account_id"],
              decodePath(path, "account_id")
            )
          : json["account_id"],
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "bank_transfer")
          : "bank_transfer",
    };
  },

  serialize(value: BankTransferPaymentMethodConfig): any {
    return {
      ...extraProperties(value, ["accountId", "type"]),
      account_id:
        value.accountId != null
          ? BankAccountIdSerializer.serialize(value.accountId)
          : value.accountId,
      type: value.type ?? "bank_transfer",
    };
  },
};
