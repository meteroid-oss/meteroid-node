// this file is @generated
import { extraProperties, pickProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath } from "../decode.js";
import { type CouponEventData, CouponEventDataSerializer } from "./couponEventData.js";
import { type EventId, EventIdSerializer } from "./eventId.js";
import { type EventType, EventTypeSerializer } from "./eventType.js";

export interface CouponEvent extends CouponEventData {
  id: EventId;
  timestamp: Date;
  type: EventType;
}

/** Converts `CouponEvent` values from (`parse`) and to (`serialize`) their JSON form. */
export const CouponEventSerializer = {
  parse(json: any, path = "$"): CouponEvent {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "id",
        "timestamp",
        "type",
        "code",
        "coupon_id",
        "created_at",
        "description",
        "disabled",
        "discount",
        "expires_at",
        "recurring_value",
        "redemption_limit",
        "reusable",
      ]),
      ...pickProperties(CouponEventDataSerializer.parse(json, path), [
        "code",
        "couponId",
        "createdAt",
        "description",
        "disabled",
        "discount",
        "expiresAt",
        "recurringValue",
        "redemptionLimit",
        "reusable",
      ]),
      id: EventIdSerializer.parse(json["id"], decodePath(path, "id")),
      timestamp: decodeDateTime(json["timestamp"], path, "timestamp"),
      type: EventTypeSerializer.parse(json["type"], decodePath(path, "type")),
    };
  },

  serialize(value: CouponEvent): any {
    return {
      ...extraProperties(value, [
        "id",
        "timestamp",
        "type",
        "code",
        "couponId",
        "createdAt",
        "description",
        "disabled",
        "discount",
        "expiresAt",
        "recurringValue",
        "redemptionLimit",
        "reusable",
      ]),
      ...pickProperties(CouponEventDataSerializer.serialize(value), [
        "code",
        "coupon_id",
        "created_at",
        "description",
        "disabled",
        "discount",
        "expires_at",
        "recurring_value",
        "redemption_limit",
        "reusable",
      ]),
      id: EventIdSerializer.serialize(value.id),
      timestamp: value.timestamp,
      type: EventTypeSerializer.serialize(value.type),
    };
  },
};
