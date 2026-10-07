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
import {
  type CustomerPaymentMethodId,
  CustomerPaymentMethodIdSerializer,
} from "./customerPaymentMethodId.js";
import {
  type PaymentMethodInfo,
  PaymentMethodInfoSerializer,
} from "./paymentMethodInfo.js";
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

export interface Transaction {
  amount: number;
  /**
   * On a PAYMENT: how much was voluntarily given back (the sum of its settled REFUND
   * children). The invoice stays paid — the Refund credit note is what reduces it.
   */
  amountRefunded: number;
  /**
   * On a PAYMENT: how much was involuntarily clawed back (chargeback, bank recall, lost
   * dispute). This is what the invoice nets out, reopening it.
   */
  amountReversed: number;
  creditNoteId?: CreditNoteId | null | undefined;
  currency: string;
  error?: string | null | undefined;
  id: PaymentTransactionId;
  parentTransactionId?: PaymentTransactionId | null | undefined;
  paymentMethodId?: CustomerPaymentMethodId | null | undefined;
  paymentMethodInfo?: PaymentMethodInfo | null | undefined;
  paymentType: PaymentTypeEnum;
  processedAt?: Date | null | undefined;
  providerTransactionId?: string | null | undefined;
  refundMode?: RefundMode | null | undefined;
  reversalKind?: ReversalKind | null | undefined;
  /** The provider's raw cause, or what the operator typed when reversing by hand. */
  reversalReason?: string | null | undefined;
  status: PaymentStatusEnum;
}

/** Converts `Transaction` values from (`parse`) and to (`serialize`) their JSON form. */
export const TransactionSerializer = {
  parse(json: any, path = "$"): Transaction {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "amount",
        "amount_refunded",
        "amount_reversed",
        "credit_note_id",
        "currency",
        "error",
        "id",
        "parent_transaction_id",
        "payment_method_id",
        "payment_method_info",
        "payment_type",
        "processed_at",
        "provider_transaction_id",
        "refund_mode",
        "reversal_kind",
        "reversal_reason",
        "status",
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
      error:
        json["error"] != null
          ? decodeString(json["error"], path, "error")
          : json["error"],
      id: PaymentTransactionIdSerializer.parse(json["id"], decodePath(path, "id")),
      parentTransactionId:
        json["parent_transaction_id"] != null
          ? PaymentTransactionIdSerializer.parse(
              json["parent_transaction_id"],
              decodePath(path, "parent_transaction_id")
            )
          : json["parent_transaction_id"],
      paymentMethodId:
        json["payment_method_id"] != null
          ? CustomerPaymentMethodIdSerializer.parse(
              json["payment_method_id"],
              decodePath(path, "payment_method_id")
            )
          : json["payment_method_id"],
      paymentMethodInfo:
        json["payment_method_info"] != null
          ? PaymentMethodInfoSerializer.parse(
              json["payment_method_info"],
              decodePath(path, "payment_method_info")
            )
          : json["payment_method_info"],
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
      reversalReason:
        json["reversal_reason"] != null
          ? decodeString(json["reversal_reason"], path, "reversal_reason")
          : json["reversal_reason"],
      status: PaymentStatusEnumSerializer.parse(
        json["status"],
        decodePath(path, "status")
      ),
    };
  },

  serialize(value: Transaction): any {
    return {
      ...extraProperties(value, [
        "amount",
        "amountRefunded",
        "amountReversed",
        "creditNoteId",
        "currency",
        "error",
        "id",
        "parentTransactionId",
        "paymentMethodId",
        "paymentMethodInfo",
        "paymentType",
        "processedAt",
        "providerTransactionId",
        "refundMode",
        "reversalKind",
        "reversalReason",
        "status",
      ]),
      amount: value.amount,
      amount_refunded: value.amountRefunded,
      amount_reversed: value.amountReversed,
      credit_note_id:
        value.creditNoteId != null
          ? CreditNoteIdSerializer.serialize(value.creditNoteId)
          : value.creditNoteId,
      currency: value.currency,
      error: value.error,
      id: PaymentTransactionIdSerializer.serialize(value.id),
      parent_transaction_id:
        value.parentTransactionId != null
          ? PaymentTransactionIdSerializer.serialize(value.parentTransactionId)
          : value.parentTransactionId,
      payment_method_id:
        value.paymentMethodId != null
          ? CustomerPaymentMethodIdSerializer.serialize(value.paymentMethodId)
          : value.paymentMethodId,
      payment_method_info:
        value.paymentMethodInfo != null
          ? PaymentMethodInfoSerializer.serialize(value.paymentMethodInfo)
          : value.paymentMethodInfo,
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
      reversal_reason: value.reversalReason,
      status: PaymentStatusEnumSerializer.serialize(value.status),
    };
  },
};
