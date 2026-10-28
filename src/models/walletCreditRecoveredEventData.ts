// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodePath, decodeString } from "../decode.js";
import { type CreditNoteId, CreditNoteIdSerializer } from "./creditNoteId.js";
import { type CustomerId, CustomerIdSerializer } from "./customerId.js";
import { type InvoiceId, InvoiceIdSerializer } from "./invoiceId.js";
import {
  type PaymentTransactionId,
  PaymentTransactionIdSerializer,
} from "./paymentTransactionId.js";
/** Spent credit reported by `wallet.credit_unrecovered` is backed again. */
export interface WalletCreditRecoveredEventData {
  /**
   * Cause of the loss this recovers: `PAYMENT_DISPUTED`, `PAYMENT_REVERSED`,
   * `PAYMENT_REFUNDED` or `CREDIT_NOTE_REFUNDED`.
   */
  cause: string;
  creditNoteId?: CreditNoteId | null | undefined;
  /**
   * Spent credit an earlier `wallet.credit_unrecovered` reported that is backed again, in
   * minor units: the money came back, or the credit was returned and taken back.
   */
  creditRecovered: number;
  /** The credit unit (its code) the amounts are in; absent for a currency. */
  creditUnit?: string | null | undefined;
  /** Decimal places of `credit_unit`: amounts are integers of 10^-precision credit. */
  creditUnitPrecision?: number | null | undefined;
  /**
   * The loss of this money flow (an invoice's payments, a credit note, or a payment) once
   * this event applies.
   */
  creditUnrecoveredTotal: number;
  /** Absent when the amounts are in a credit unit. */
  currency?: string | null | undefined;
  customerId: CustomerId;
  invoiceId?: InvoiceId | null | undefined;
  paymentId?: PaymentTransactionId | null | undefined;
}

/** Converts `WalletCreditRecoveredEventData` values from (`parse`) and to (`serialize`) their JSON form. */
export const WalletCreditRecoveredEventDataSerializer = {
  parse(json: any, path = "$"): WalletCreditRecoveredEventData {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "cause",
        "credit_note_id",
        "credit_recovered",
        "credit_unit",
        "credit_unit_precision",
        "credit_unrecovered_total",
        "currency",
        "customer_id",
        "invoice_id",
        "payment_id",
      ]),
      cause: decodeString(json["cause"], path, "cause"),
      creditNoteId:
        json["credit_note_id"] != null
          ? CreditNoteIdSerializer.parse(
              json["credit_note_id"],
              decodePath(path, "credit_note_id")
            )
          : json["credit_note_id"],
      creditRecovered: decodeInteger(json["credit_recovered"], path, "credit_recovered"),
      creditUnit:
        json["credit_unit"] != null
          ? decodeString(json["credit_unit"], path, "credit_unit")
          : json["credit_unit"],
      creditUnitPrecision:
        json["credit_unit_precision"] != null
          ? decodeInteger(json["credit_unit_precision"], path, "credit_unit_precision")
          : json["credit_unit_precision"],
      creditUnrecoveredTotal: decodeInteger(
        json["credit_unrecovered_total"],
        path,
        "credit_unrecovered_total"
      ),
      currency:
        json["currency"] != null
          ? decodeString(json["currency"], path, "currency")
          : json["currency"],
      customerId: CustomerIdSerializer.parse(
        json["customer_id"],
        decodePath(path, "customer_id")
      ),
      invoiceId:
        json["invoice_id"] != null
          ? InvoiceIdSerializer.parse(json["invoice_id"], decodePath(path, "invoice_id"))
          : json["invoice_id"],
      paymentId:
        json["payment_id"] != null
          ? PaymentTransactionIdSerializer.parse(
              json["payment_id"],
              decodePath(path, "payment_id")
            )
          : json["payment_id"],
    };
  },

  serialize(value: WalletCreditRecoveredEventData): any {
    return {
      ...extraProperties(value, [
        "cause",
        "creditNoteId",
        "creditRecovered",
        "creditUnit",
        "creditUnitPrecision",
        "creditUnrecoveredTotal",
        "currency",
        "customerId",
        "invoiceId",
        "paymentId",
      ]),
      cause: value.cause,
      credit_note_id:
        value.creditNoteId != null
          ? CreditNoteIdSerializer.serialize(value.creditNoteId)
          : value.creditNoteId,
      credit_recovered: value.creditRecovered,
      credit_unit: value.creditUnit,
      credit_unit_precision: value.creditUnitPrecision,
      credit_unrecovered_total: value.creditUnrecoveredTotal,
      currency: value.currency,
      customer_id: CustomerIdSerializer.serialize(value.customerId),
      invoice_id:
        value.invoiceId != null
          ? InvoiceIdSerializer.serialize(value.invoiceId)
          : value.invoiceId,
      payment_id:
        value.paymentId != null
          ? PaymentTransactionIdSerializer.serialize(value.paymentId)
          : value.paymentId,
    };
  },
};
