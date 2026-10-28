// this file is @generated
import { extraProperties, pickProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath } from "../decode.js";
import { type EventId, EventIdSerializer } from "./eventId.js";
import { type EventType, EventTypeSerializer } from "./eventType.js";
import {
  type WalletFundedEventData,
  WalletFundedEventDataSerializer,
} from "./walletFundedEventData.js";

export interface WalletFundedEvent extends WalletFundedEventData {
  id: EventId;
  timestamp: Date;
  type: EventType;
}

/** Converts `WalletFundedEvent` values from (`parse`) and to (`serialize`) their JSON form. */
export const WalletFundedEventSerializer = {
  parse(json: any, path = "$"): WalletFundedEvent {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "id",
        "timestamp",
        "type",
        "amount",
        "applicable_product_ids",
        "applies_to",
        "credit_grant_id",
        "credit_note_id",
        "credit_unit",
        "credit_unit_precision",
        "currency",
        "customer_id",
        "grant_type",
        "invoice_id",
        "ledger_entry_id",
        "source",
        "subscription_id",
      ]),
      ...pickProperties(WalletFundedEventDataSerializer.parse(json, path), [
        "amount",
        "applicableProductIds",
        "appliesTo",
        "creditGrantId",
        "creditNoteId",
        "creditUnit",
        "creditUnitPrecision",
        "currency",
        "customerId",
        "grantType",
        "invoiceId",
        "ledgerEntryId",
        "source",
        "subscriptionId",
      ]),
      id: EventIdSerializer.parse(json["id"], decodePath(path, "id")),
      timestamp: decodeDateTime(json["timestamp"], path, "timestamp"),
      type: EventTypeSerializer.parse(json["type"], decodePath(path, "type")),
    };
  },

  serialize(value: WalletFundedEvent): any {
    return {
      ...extraProperties(value, [
        "id",
        "timestamp",
        "type",
        "amount",
        "applicableProductIds",
        "appliesTo",
        "creditGrantId",
        "creditNoteId",
        "creditUnit",
        "creditUnitPrecision",
        "currency",
        "customerId",
        "grantType",
        "invoiceId",
        "ledgerEntryId",
        "source",
        "subscriptionId",
      ]),
      ...pickProperties(WalletFundedEventDataSerializer.serialize(value), [
        "amount",
        "applicable_product_ids",
        "applies_to",
        "credit_grant_id",
        "credit_note_id",
        "credit_unit",
        "credit_unit_precision",
        "currency",
        "customer_id",
        "grant_type",
        "invoice_id",
        "ledger_entry_id",
        "source",
        "subscription_id",
      ]),
      id: EventIdSerializer.serialize(value.id),
      timestamp: value.timestamp,
      type: EventTypeSerializer.serialize(value.type),
    };
  },
};
