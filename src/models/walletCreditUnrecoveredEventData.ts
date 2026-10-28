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
/** Purchased credit was already spent when its money came back. */
export interface WalletCreditUnrecoveredEventData {
  /**
   * `PAYMENT_DISPUTED` (lost to a dispute or chargeback), `PAYMENT_REVERSED` (a failed
   * collection clawed back), `PAYMENT_REFUNDED` (a payment refunded without a credit note, at
   * the provider or as an overpayment, after the credit it backed was spent) or
   * `CREDIT_NOTE_REFUNDED`.
   */
  cause: string;
  creditNoteId?: CreditNoteId | null | undefined;
  /** Unspent credit taken back from the wallet at the same time, in minor units. */
  creditTakenBack: number;
  /** The credit unit (its code) the amounts are in; absent for a currency. */
  creditUnit?: string | null | undefined;
  /** Decimal places of `credit_unit`: amounts are integers of 10^-precision credit. */
  creditUnitPrecision?: number | null | undefined;
  /**
   * Spent credit this event adds to the loss, in minor units. A failed collection reopens its
   * invoice, which collects it again; a dispute's loss stays unless the dispute is won.
   * `wallet.credit_recovered` reports what comes back.
   */
  creditUnrecovered: number;
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

/** Converts `WalletCreditUnrecoveredEventData` values from (`parse`) and to (`serialize`) their JSON form. */
export const WalletCreditUnrecoveredEventDataSerializer = {
  parse(json: any, path = "$"): WalletCreditUnrecoveredEventData {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "cause",
        "credit_note_id",
        "credit_taken_back",
        "credit_unit",
        "credit_unit_precision",
        "credit_unrecovered",
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
      creditTakenBack: decodeInteger(
        json["credit_taken_back"],
        path,
        "credit_taken_back"
      ),
      creditUnit:
        json["credit_unit"] != null
          ? decodeString(json["credit_unit"], path, "credit_unit")
          : json["credit_unit"],
      creditUnitPrecision:
        json["credit_unit_precision"] != null
          ? decodeInteger(json["credit_unit_precision"], path, "credit_unit_precision")
          : json["credit_unit_precision"],
      creditUnrecovered: decodeInteger(
        json["credit_unrecovered"],
        path,
        "credit_unrecovered"
      ),
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

  serialize(value: WalletCreditUnrecoveredEventData): any {
    return {
      ...extraProperties(value, [
        "cause",
        "creditNoteId",
        "creditTakenBack",
        "creditUnit",
        "creditUnitPrecision",
        "creditUnrecovered",
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
      credit_taken_back: value.creditTakenBack,
      credit_unit: value.creditUnit,
      credit_unit_precision: value.creditUnitPrecision,
      credit_unrecovered: value.creditUnrecovered,
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
