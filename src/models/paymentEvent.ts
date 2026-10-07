// this file is @generated
import { extraProperties, pickProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath } from "../decode.js";
import { type EventId, EventIdSerializer } from "./eventId.js";
import { type EventType, EventTypeSerializer } from "./eventType.js";
import { type RefundEventData, RefundEventDataSerializer } from "./refundEventData.js";

export interface PaymentEvent extends RefundEventData {
  id: EventId;
  timestamp: Date;
  type: EventType;
}

/** Converts `PaymentEvent` values from (`parse`) and to (`serialize`) their JSON form. */
export const PaymentEventSerializer = {
  parse(json: any, path = "$"): PaymentEvent {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "id",
        "timestamp",
        "type",
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
      ...pickProperties(RefundEventDataSerializer.parse(json, path), [
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
      id: EventIdSerializer.parse(json["id"], decodePath(path, "id")),
      timestamp: decodeDateTime(json["timestamp"], path, "timestamp"),
      type: EventTypeSerializer.parse(json["type"], decodePath(path, "type")),
    };
  },

  serialize(value: PaymentEvent): any {
    return {
      ...extraProperties(value, [
        "id",
        "timestamp",
        "type",
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
      ...pickProperties(RefundEventDataSerializer.serialize(value), [
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
      id: EventIdSerializer.serialize(value.id),
      timestamp: value.timestamp,
      type: EventTypeSerializer.serialize(value.type),
    };
  },
};
