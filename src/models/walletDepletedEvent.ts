// this file is @generated
import { extraProperties, pickProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath } from "../decode.js";
import { type EventId, EventIdSerializer } from "./eventId.js";
import { type EventType, EventTypeSerializer } from "./eventType.js";
import {
  type WalletDepletedEventData,
  WalletDepletedEventDataSerializer,
} from "./walletDepletedEventData.js";

export interface WalletDepletedEvent extends WalletDepletedEventData {
  id: EventId;
  timestamp: Date;
  type: EventType;
}

/** Converts `WalletDepletedEvent` values from (`parse`) and to (`serialize`) their JSON form. */
export const WalletDepletedEventSerializer = {
  parse(json: any, path = "$"): WalletDepletedEvent {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "id",
        "timestamp",
        "type",
        "credit_unit",
        "credit_unit_precision",
        "currency",
        "customer_id",
      ]),
      ...pickProperties(WalletDepletedEventDataSerializer.parse(json, path), [
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

  serialize(value: WalletDepletedEvent): any {
    return {
      ...extraProperties(value, [
        "id",
        "timestamp",
        "type",
        "creditUnit",
        "creditUnitPrecision",
        "currency",
        "customerId",
      ]),
      ...pickProperties(WalletDepletedEventDataSerializer.serialize(value), [
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
