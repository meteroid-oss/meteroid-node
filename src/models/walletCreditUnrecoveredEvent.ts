// this file is @generated
import { extraProperties, pickProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath } from "../decode.js";
import { type EventId, EventIdSerializer } from "./eventId.js";
import { type EventType, EventTypeSerializer } from "./eventType.js";
import {
  type WalletCreditUnrecoveredEventData,
  WalletCreditUnrecoveredEventDataSerializer,
} from "./walletCreditUnrecoveredEventData.js";

export interface WalletCreditUnrecoveredEvent extends WalletCreditUnrecoveredEventData {
  id: EventId;
  timestamp: Date;
  type: EventType;
}

/** Converts `WalletCreditUnrecoveredEvent` values from (`parse`) and to (`serialize`) their JSON form. */
export const WalletCreditUnrecoveredEventSerializer = {
  parse(json: any, path = "$"): WalletCreditUnrecoveredEvent {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "id",
        "timestamp",
        "type",
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
      ...pickProperties(WalletCreditUnrecoveredEventDataSerializer.parse(json, path), [
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
      id: EventIdSerializer.parse(json["id"], decodePath(path, "id")),
      timestamp: decodeDateTime(json["timestamp"], path, "timestamp"),
      type: EventTypeSerializer.parse(json["type"], decodePath(path, "type")),
    };
  },

  serialize(value: WalletCreditUnrecoveredEvent): any {
    return {
      ...extraProperties(value, [
        "id",
        "timestamp",
        "type",
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
      ...pickProperties(WalletCreditUnrecoveredEventDataSerializer.serialize(value), [
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
      id: EventIdSerializer.serialize(value.id),
      timestamp: value.timestamp,
      type: EventTypeSerializer.serialize(value.type),
    };
  },
};
