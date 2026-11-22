// this file is @generated
import { extraProperties } from "../json.js";
import { decodeDateTime, decodeInteger, decodeObject, decodeString } from "../decode.js";

export interface RecordInvoicePaymentRequest {
  /** The positive amount received, in minor units of the invoice currency (e.g. cents). */
  amount: number;
  /** When the payment was received, at most a day ahead. Defaults to the current time. */
  paidAt?: Date | null | undefined;
  /** Reference for the external payment, such as a bank transfer ID. */
  reference?: string | null | undefined;
}

/** Converts `RecordInvoicePaymentRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const RecordInvoicePaymentRequestSerializer = {
  parse(json: any, path = "$"): RecordInvoicePaymentRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["amount", "paid_at", "reference"]),
      amount: decodeInteger(json["amount"], path, "amount"),
      paidAt:
        json["paid_at"] != null
          ? decodeDateTime(json["paid_at"], path, "paid_at")
          : json["paid_at"],
      reference:
        json["reference"] != null
          ? decodeString(json["reference"], path, "reference")
          : json["reference"],
    };
  },

  serialize(value: RecordInvoicePaymentRequest): any {
    return {
      ...extraProperties(value, ["amount", "paidAt", "reference"]),
      amount: value.amount,
      paid_at: value.paidAt,
      reference: value.reference,
    };
  },
};
