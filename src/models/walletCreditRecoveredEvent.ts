// this file is @generated
import { extraProperties, pickProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath } from "../decode.js";
import { type EventId, EventIdSerializer } from "./eventId.js";
import { type EventType, EventTypeSerializer } from "./eventType.js";
import {
  type WalletCreditRecoveredEventData,
  WalletCreditRecoveredEventDataSerializer,
} from "./walletCreditRecoveredEventData.js";

export interface WalletCreditRecoveredEvent extends WalletCreditRecoveredEventData {
  id: EventId;
  timestamp: Date;
  type: EventType;
}

/** Converts `WalletCreditRecoveredEvent` values from (`parse`) and to (`serialize`) their JSON form. */
export const WalletCreditRecoveredEventSerializer = {
  parse(json: any, path = "$"): WalletCreditRecoveredEvent {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "id",
        "timestamp",
        "type",
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
      ...pickProperties(WalletCreditRecoveredEventDataSerializer.parse(json, path), [
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
      id: EventIdSerializer.parse(json["id"], decodePath(path, "id")),
      timestamp: decodeDateTime(json["timestamp"], path, "timestamp"),
      type: EventTypeSerializer.parse(json["type"], decodePath(path, "type")),
    };
  },

  serialize(value: WalletCreditRecoveredEvent): any {
    return {
      ...extraProperties(value, [
        "id",
        "timestamp",
        "type",
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
      ...pickProperties(WalletCreditRecoveredEventDataSerializer.serialize(value), [
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
      id: EventIdSerializer.serialize(value.id),
      timestamp: value.timestamp,
      type: EventTypeSerializer.serialize(value.type),
    };
  },
};
