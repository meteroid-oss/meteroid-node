// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeDateTime,
  decodeInteger,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type CreditNoteId, CreditNoteIdSerializer } from "./creditNoteId.js";
import { type DeclineKind, DeclineKindSerializer } from "./declineKind.js";
import { type InvoiceId, InvoiceIdSerializer } from "./invoiceId.js";
import {
  type PaymentStatusEnum,
  PaymentStatusEnumSerializer,
} from "./paymentStatusEnum.js";
import {
  type PaymentTransactionId,
  PaymentTransactionIdSerializer,
} from "./paymentTransactionId.js";
import { type PaymentTypeEnum, PaymentTypeEnumSerializer } from "./paymentTypeEnum.js";
import { type RefundMode, RefundModeSerializer } from "./refundMode.js";
import { type ReversalKind, ReversalKindSerializer } from "./reversalKind.js";
/**
 * A refund row, or the payment that failed or was clawed back — the same shape the REST invoice
 * exposes as a transaction. `reversal_reason` is deliberately absent: it is free provider text and is
 * not carried on the outbox event.
 */
export interface RefundEventData {
  amount: number;
  amountRefunded: number;
  amountReversed: number;
  creditNoteId?: CreditNoteId | null | undefined;
  currency: string;
  declineKind?: DeclineKind | null | undefined;
  error?: string | null | undefined;
  invoiceId?: InvoiceId | null | undefined;
  parentTransactionId?: PaymentTransactionId | null | undefined;
  paymentType: PaymentTypeEnum;
  processedAt?: Date | null | undefined;
  providerTransactionId?: string | null | undefined;
  refundMode?: RefundMode | null | undefined;
  reversalKind?: ReversalKind | null | undefined;
  status: PaymentStatusEnum;
  transactionId: PaymentTransactionId;
}

/** Converts `RefundEventData` values from (`parse`) and to (`serialize`) their JSON form. */
export const RefundEventDataSerializer = {
  parse(json: any, path = "$"): RefundEventData {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "amount",
        "amount_refunded",
        "amount_reversed",
        "credit_note_id",
        "currency",
        "decline_kind",
        "error",
        "invoice_id",
        "parent_transaction_id",
        "payment_type",
        "processed_at",
        "provider_transaction_id",
        "refund_mode",
        "reversal_kind",
        "status",
        "transaction_id",
      ]),
      amount: decodeInteger(json["amount"], path, "amount"),
      amountRefunded: decodeInteger(json["amount_refunded"], path, "amount_refunded"),
      amountReversed: decodeInteger(json["amount_reversed"], path, "amount_reversed"),
      creditNoteId:
        json["credit_note_id"] != null
          ? CreditNoteIdSerializer.parse(
              json["credit_note_id"],
              decodePath(path, "credit_note_id")
            )
          : json["credit_note_id"],
      currency: decodeString(json["currency"], path, "currency"),
      declineKind:
        json["decline_kind"] != null
          ? DeclineKindSerializer.parse(
              json["decline_kind"],
              decodePath(path, "decline_kind")
            )
          : json["decline_kind"],
      error:
        json["error"] != null
          ? decodeString(json["error"], path, "error")
          : json["error"],
      invoiceId:
        json["invoice_id"] != null
          ? InvoiceIdSerializer.parse(json["invoice_id"], decodePath(path, "invoice_id"))
          : json["invoice_id"],
      parentTransactionId:
        json["parent_transaction_id"] != null
          ? PaymentTransactionIdSerializer.parse(
              json["parent_transaction_id"],
              decodePath(path, "parent_transaction_id")
            )
          : json["parent_transaction_id"],
      paymentType: PaymentTypeEnumSerializer.parse(
        json["payment_type"],
        decodePath(path, "payment_type")
      ),
      processedAt:
        json["processed_at"] != null
          ? decodeDateTime(json["processed_at"], path, "processed_at")
          : json["processed_at"],
      providerTransactionId:
        json["provider_transaction_id"] != null
          ? decodeString(json["provider_transaction_id"], path, "provider_transaction_id")
          : json["provider_transaction_id"],
      refundMode:
        json["refund_mode"] != null
          ? RefundModeSerializer.parse(
              json["refund_mode"],
              decodePath(path, "refund_mode")
            )
          : json["refund_mode"],
      reversalKind:
        json["reversal_kind"] != null
          ? ReversalKindSerializer.parse(
              json["reversal_kind"],
              decodePath(path, "reversal_kind")
            )
          : json["reversal_kind"],
      status: PaymentStatusEnumSerializer.parse(
        json["status"],
        decodePath(path, "status")
      ),
      transactionId: PaymentTransactionIdSerializer.parse(
        json["transaction_id"],
        decodePath(path, "transaction_id")
      ),
    };
  },

  serialize(value: RefundEventData): any {
    return {
      ...extraProperties(value, [
        "amount",
        "amountRefunded",
        "amountReversed",
        "creditNoteId",
        "currency",
        "declineKind",
        "error",
        "invoiceId",
        "parentTransactionId",
        "paymentType",
        "processedAt",
        "providerTransactionId",
        "refundMode",
        "reversalKind",
        "status",
        "transactionId",
      ]),
      amount: value.amount,
      amount_refunded: value.amountRefunded,
      amount_reversed: value.amountReversed,
      credit_note_id:
        value.creditNoteId != null
          ? CreditNoteIdSerializer.serialize(value.creditNoteId)
          : value.creditNoteId,
      currency: value.currency,
      decline_kind:
        value.declineKind != null
          ? DeclineKindSerializer.serialize(value.declineKind)
          : value.declineKind,
      error: value.error,
      invoice_id:
        value.invoiceId != null
          ? InvoiceIdSerializer.serialize(value.invoiceId)
          : value.invoiceId,
      parent_transaction_id:
        value.parentTransactionId != null
          ? PaymentTransactionIdSerializer.serialize(value.parentTransactionId)
          : value.parentTransactionId,
      payment_type: PaymentTypeEnumSerializer.serialize(value.paymentType),
      processed_at: value.processedAt,
      provider_transaction_id: value.providerTransactionId,
      refund_mode:
        value.refundMode != null
          ? RefundModeSerializer.serialize(value.refundMode)
          : value.refundMode,
      reversal_kind:
        value.reversalKind != null
          ? ReversalKindSerializer.serialize(value.reversalKind)
          : value.reversalKind,
      status: PaymentStatusEnumSerializer.serialize(value.status),
      transaction_id: PaymentTransactionIdSerializer.serialize(value.transactionId),
    };
  },
};
