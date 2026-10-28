// this file is @generated
import { extraProperties, pickProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath } from "../decode.js";
import {
  type CreditGrantExpiredEventData,
  CreditGrantExpiredEventDataSerializer,
} from "./creditGrantExpiredEventData.js";
import { type EventId, EventIdSerializer } from "./eventId.js";
import { type EventType, EventTypeSerializer } from "./eventType.js";

export interface CreditGrantExpiredEvent extends CreditGrantExpiredEventData {
  id: EventId;
  timestamp: Date;
  type: EventType;
}

/** Converts `CreditGrantExpiredEvent` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditGrantExpiredEventSerializer = {
  parse(json: any, path = "$"): CreditGrantExpiredEvent {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "id",
        "timestamp",
        "type",
        "applicable_product_ids",
        "applies_to",
        "credit_grant_id",
        "credit_unit",
        "credit_unit_precision",
        "currency",
        "customer_id",
        "expired_amount",
        "expired_at",
        "ledger_entry_id",
        "reason",
        "subscription_id",
      ]),
      ...pickProperties(CreditGrantExpiredEventDataSerializer.parse(json, path), [
        "applicableProductIds",
        "appliesTo",
        "creditGrantId",
        "creditUnit",
        "creditUnitPrecision",
        "currency",
        "customerId",
        "expiredAmount",
        "expiredAt",
        "ledgerEntryId",
        "reason",
        "subscriptionId",
      ]),
      id: EventIdSerializer.parse(json["id"], decodePath(path, "id")),
      timestamp: decodeDateTime(json["timestamp"], path, "timestamp"),
      type: EventTypeSerializer.parse(json["type"], decodePath(path, "type")),
    };
  },

  serialize(value: CreditGrantExpiredEvent): any {
    return {
      ...extraProperties(value, [
        "id",
        "timestamp",
        "type",
        "applicableProductIds",
        "appliesTo",
        "creditGrantId",
        "creditUnit",
        "creditUnitPrecision",
        "currency",
        "customerId",
        "expiredAmount",
        "expiredAt",
        "ledgerEntryId",
        "reason",
        "subscriptionId",
      ]),
      ...pickProperties(CreditGrantExpiredEventDataSerializer.serialize(value), [
        "applicable_product_ids",
        "applies_to",
        "credit_grant_id",
        "credit_unit",
        "credit_unit_precision",
        "currency",
        "customer_id",
        "expired_amount",
        "expired_at",
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
