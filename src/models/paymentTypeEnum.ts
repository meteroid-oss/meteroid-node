// this file is @generated
import { decodeString } from "../decode.js";

export const PaymentTypeEnum = {
  Payment: "PAYMENT",
  Refund: "REFUND",
} as const;
export type PaymentTypeEnum =
  | (typeof PaymentTypeEnum)[keyof typeof PaymentTypeEnum]
  | (string & {});

/** Converts `PaymentTypeEnum` values from (`parse`) and to (`serialize`) their JSON form. */
export const PaymentTypeEnumSerializer = {
  parse(json: any, path = "$"): PaymentTypeEnum {
    return decodeString(json, path);
  },

  serialize(value: PaymentTypeEnum): any {
    return value;
  },
};
