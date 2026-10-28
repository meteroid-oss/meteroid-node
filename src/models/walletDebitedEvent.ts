// this file is @generated
import { extraProperties, pickProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath } from "../decode.js";
import { type EventId, EventIdSerializer } from "./eventId.js";
import { type EventType, EventTypeSerializer } from "./eventType.js";
import {
  type WalletDebitedEventData,
  WalletDebitedEventDataSerializer,
} from "./walletDebitedEventData.js";

export interface WalletDebitedEvent extends WalletDebitedEventData {
  id: EventId;
  timestamp: Date;
  type: EventType;
}

/** Converts `WalletDebitedEvent` values from (`parse`) and to (`serialize`) their JSON form. */
export const WalletDebitedEventSerializer = {
  parse(json: any, path = "$"): WalletDebitedEvent {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "id",
        "timestamp",
        "type",
        "actor",
        "amount",
        "applicable_product_ids",
        "applies_to",
        "credit_grant_id",
        "credit_note_id",
        "credit_unit",
        "credit_unit_precision",
        "currency",
        "customer_id",
        "invoice_id",
        "ledger_entry_id",
        "reason",
        "subscription_id",
      ]),
      ...pickProperties(WalletDebitedEventDataSerializer.parse(json, path), [
        "actor",
        "amount",
        "applicableProductIds",
        "appliesTo",
        "creditGrantId",
        "creditNoteId",
        "creditUnit",
        "creditUnitPrecision",
        "currency",
        "customerId",
        "invoiceId",
        "ledgerEntryId",
        "reason",
        "subscriptionId",
      ]),
      id: EventIdSerializer.parse(json["id"], decodePath(path, "id")),
      timestamp: decodeDateTime(json["timestamp"], path, "timestamp"),
      type: EventTypeSerializer.parse(json["type"], decodePath(path, "type")),
    };
  },

  serialize(value: WalletDebitedEvent): any {
    return {
      ...extraProperties(value, [
        "id",
        "timestamp",
        "type",
        "actor",
        "amount",
        "applicableProductIds",
        "appliesTo",
        "creditGrantId",
        "creditNoteId",
        "creditUnit",
        "creditUnitPrecision",
        "currency",
        "customerId",
        "invoiceId",
        "ledgerEntryId",
        "reason",
        "subscriptionId",
      ]),
      ...pickProperties(WalletDebitedEventDataSerializer.serialize(value), [
        "actor",
        "amount",
        "applicable_product_ids",
        "applies_to",
        "credit_grant_id",
        "credit_note_id",
        "credit_unit",
        "credit_unit_precision",
        "currency",
        "customer_id",
        "invoice_id",
        "ledger_entry_id",
        "reason",
        "subscription_id",
      ]),
      id: EventIdSerializer.serialize(value.id),
      timestamp: value.timestamp,
      type: EventTypeSerializer.serialize(value.type),
    };
  },
};
