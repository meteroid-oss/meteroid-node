// this file is @generated
import { extraProperties, pickProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath } from "../decode.js";
import { type EventId, EventIdSerializer } from "./eventId.js";
import { type EventType, EventTypeSerializer } from "./eventType.js";
import { type ProductEventData, ProductEventDataSerializer } from "./productEventData.js";

export interface ProductEvent extends ProductEventData {
  id: EventId;
  timestamp: Date;
  type: EventType;
}

/** Converts `ProductEvent` values from (`parse`) and to (`serialize`) their JSON form. */
export const ProductEventSerializer = {
  parse(json: any, path = "$"): ProductEvent {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "id",
        "timestamp",
        "type",
        "created_at",
        "description",
        "fee_type",
        "name",
        "product_family_id",
        "product_id",
      ]),
      ...pickProperties(ProductEventDataSerializer.parse(json, path), [
        "createdAt",
        "description",
        "feeType",
        "name",
        "productFamilyId",
        "productId",
      ]),
      id: EventIdSerializer.parse(json["id"], decodePath(path, "id")),
      timestamp: decodeDateTime(json["timestamp"], path, "timestamp"),
      type: EventTypeSerializer.parse(json["type"], decodePath(path, "type")),
    };
  },

  serialize(value: ProductEvent): any {
    return {
      ...extraProperties(value, [
        "id",
        "timestamp",
        "type",
        "createdAt",
        "description",
        "feeType",
        "name",
        "productFamilyId",
        "productId",
      ]),
      ...pickProperties(ProductEventDataSerializer.serialize(value), [
        "created_at",
        "description",
        "fee_type",
        "name",
        "product_family_id",
        "product_id",
      ]),
      id: EventIdSerializer.serialize(value.id),
      timestamp: value.timestamp,
      type: EventTypeSerializer.serialize(value.type),
    };
  },
};
