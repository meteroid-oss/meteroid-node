// this file is @generated
import { extraProperties, pickProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath } from "../decode.js";
import { type EventId, EventIdSerializer } from "./eventId.js";
import { type EventType, EventTypeSerializer } from "./eventType.js";
import {
  type WalletRecoveredEventData,
  WalletRecoveredEventDataSerializer,
} from "./walletRecoveredEventData.js";

export interface WalletRecoveredEvent extends WalletRecoveredEventData {
  id: EventId;
  timestamp: Date;
  type: EventType;
}

/** Converts `WalletRecoveredEvent` values from (`parse`) and to (`serialize`) their JSON form. */
export const WalletRecoveredEventSerializer = {
  parse(json: any, path = "$"): WalletRecoveredEvent {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "id",
        "timestamp",
        "type",
        "balance",
        "credit_unit",
        "credit_unit_precision",
        "currency",
        "customer_id",
      ]),
      ...pickProperties(WalletRecoveredEventDataSerializer.parse(json, path), [
        "balance",
        "creditUnit",
        "creditUnitPrecision",
        "currency",
        "customerId",
      ]),
      id: EventIdSerializer.parse(json["id"], decodePath(path, "id")),
      timestamp: decodeDateTime(json["timestamp"], path, "timestamp"),
      type: EventTypeSerializer.parse(json["type"], decodePath(path, "type")),
    };
  },

  serialize(value: WalletRecoveredEvent): any {
    return {
      ...extraProperties(value, [
        "id",
        "timestamp",
        "type",
        "balance",
        "creditUnit",
        "creditUnitPrecision",
        "currency",
        "customerId",
      ]),
      ...pickProperties(WalletRecoveredEventDataSerializer.serialize(value), [
        "balance",
        "credit_unit",
        "credit_unit_precision",
        "currency",
        "customer_id",
      ]),
      id: EventIdSerializer.serialize(value.id),
      timestamp: value.timestamp,
      type: EventTypeSerializer.serialize(value.type),
    };
  },
};
