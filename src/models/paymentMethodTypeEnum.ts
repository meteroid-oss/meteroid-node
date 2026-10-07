// this file is @generated
import { decodeString } from "../decode.js";

export const PaymentMethodTypeEnum = {
  Card: "CARD",
  BankTransfer: "BANK_TRANSFER",
  Wallet: "WALLET",
  Other: "OTHER",
} as const;
export type PaymentMethodTypeEnum =
  | (typeof PaymentMethodTypeEnum)[keyof typeof PaymentMethodTypeEnum]
  | (string & {});

/** Converts `PaymentMethodTypeEnum` values from (`parse`) and to (`serialize`) their JSON form. */
export const PaymentMethodTypeEnumSerializer = {
  parse(json: any, path = "$"): PaymentMethodTypeEnum {
    return decodeString(json, path);
  },

  serialize(value: PaymentMethodTypeEnum): any {
    return value;
  },
};
