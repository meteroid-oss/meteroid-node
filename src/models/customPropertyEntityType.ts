// this file is @generated
import { decodeString } from "../decode.js";

export const CustomPropertyEntityType = {
  Customer: "CUSTOMER",
  Subscription: "SUBSCRIPTION",
  Invoice: "INVOICE",
  CreditNote: "CREDIT_NOTE",
  Quote: "QUOTE",
} as const;
export type CustomPropertyEntityType =
  | (typeof CustomPropertyEntityType)[keyof typeof CustomPropertyEntityType]
  | (string & {});

/** Converts `CustomPropertyEntityType` values from (`parse`) and to (`serialize`) their JSON form. */
export const CustomPropertyEntityTypeSerializer = {
  parse(json: any, path = "$"): CustomPropertyEntityType {
    return decodeString(json, path);
  },

  serialize(value: CustomPropertyEntityType): any {
    return value;
  },
};
