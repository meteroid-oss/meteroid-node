// this file is @generated
import { decodeString } from "../decode.js";

export const LedgerEntryType = {
  Credit: "CREDIT",
  InvoiceApplication: "INVOICE_APPLICATION",
  InvoiceReturn: "INVOICE_RETURN",
  CreditReversal: "CREDIT_REVERSAL",
  CreditReinstatement: "CREDIT_REINSTATEMENT",
  CreditExpiry: "CREDIT_EXPIRY",
  CreditRollover: "CREDIT_ROLLOVER",
} as const;
export type LedgerEntryType =
  | (typeof LedgerEntryType)[keyof typeof LedgerEntryType]
  | (string & {});

/** Converts `LedgerEntryType` values from (`parse`) and to (`serialize`) their JSON form. */
export const LedgerEntryTypeSerializer = {
  parse(json: any, path = "$"): LedgerEntryType {
    return decodeString(json, path);
  },

  serialize(value: LedgerEntryType): any {
    return value;
  },
};
