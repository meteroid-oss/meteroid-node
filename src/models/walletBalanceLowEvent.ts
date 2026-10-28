// this file is @generated
import { extraProperties, pickProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath } from "../decode.js";
import { type EventId, EventIdSerializer } from "./eventId.js";
import { type EventType, EventTypeSerializer } from "./eventType.js";
import {
  type WalletBalanceLowEventData,
  WalletBalanceLowEventDataSerializer,
} from "./walletBalanceLowEventData.js";

export interface WalletBalanceLowEvent extends WalletBalanceLowEventData {
  id: EventId;
  timestamp: Date;
  type: EventType;
}

/** Converts `WalletBalanceLowEvent` values from (`parse`) and to (`serialize`) their JSON form. */
export const WalletBalanceLowEventSerializer = {
  parse(json: any, path = "$"): WalletBalanceLowEvent {
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
        "shared_balance",
        "threshold",
      ]),
      ...pickProperties(WalletBalanceLowEventDataSerializer.parse(json, path), [
        "balance",
        "creditUnit",
        "creditUnitPrecision",
        "currency",
        "customerId",
        "sharedBalance",
        "threshold",
      ]),
      id: EventIdSerializer.parse(json["id"], decodePath(path, "id")),
      timestamp: decodeDateTime(json["timestamp"], path, "timestamp"),
      type: EventTypeSerializer.parse(json["type"], decodePath(path, "type")),
    };
  },

  serialize(value: WalletBalanceLowEvent): any {
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
        "sharedBalance",
        "threshold",
      ]),
      ...pickProperties(WalletBalanceLowEventDataSerializer.serialize(value), [
        "balance",
        "credit_unit",
        "credit_unit_precision",
        "currency",
        "customer_id",
        "shared_balance",
        "threshold",
      ]),
      id: EventIdSerializer.serialize(value.id),
      timestamp: value.timestamp,
      type: EventTypeSerializer.serialize(value.type),
    };
  },
};
