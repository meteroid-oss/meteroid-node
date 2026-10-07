// this file is @generated
import { extraProperties, pickProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath } from "../decode.js";
import { type EventId, EventIdSerializer } from "./eventId.js";
import { type EventType, EventTypeSerializer } from "./eventType.js";
import { type InvoiceEventData, InvoiceEventDataSerializer } from "./invoiceEventData.js";

export interface InvoiceEvent extends InvoiceEventData {
  id: EventId;
  timestamp: Date;
  type: EventType;
}

/** Converts `InvoiceEvent` values from (`parse`) and to (`serialize`) their JSON form. */
export const InvoiceEventSerializer = {
  parse(json: any, path = "$"): InvoiceEvent {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "id",
        "timestamp",
        "type",
        "consolidated_into_invoice_id",
        "created_at",
        "currency",
        "custom_properties",
        "customer_id",
        "invoice_id",
        "invoice_number",
        "parent_invoice_id",
        "status",
        "tax_amount",
        "total",
      ]),
      ...pickProperties(InvoiceEventDataSerializer.parse(json, path), [
        "consolidatedIntoInvoiceId",
        "createdAt",
        "currency",
        "customProperties",
        "customerId",
        "invoiceId",
        "invoiceNumber",
        "parentInvoiceId",
        "status",
        "taxAmount",
        "total",
      ]),
      id: EventIdSerializer.parse(json["id"], decodePath(path, "id")),
      timestamp: decodeDateTime(json["timestamp"], path, "timestamp"),
      type: EventTypeSerializer.parse(json["type"], decodePath(path, "type")),
    };
  },

  serialize(value: InvoiceEvent): any {
    return {
      ...extraProperties(value, [
        "id",
        "timestamp",
        "type",
        "consolidatedIntoInvoiceId",
        "createdAt",
        "currency",
        "customProperties",
        "customerId",
        "invoiceId",
        "invoiceNumber",
        "parentInvoiceId",
        "status",
        "taxAmount",
        "total",
      ]),
      ...pickProperties(InvoiceEventDataSerializer.serialize(value), [
        "consolidated_into_invoice_id",
        "created_at",
        "currency",
        "custom_properties",
        "customer_id",
        "invoice_id",
        "invoice_number",
        "parent_invoice_id",
        "status",
        "tax_amount",
        "total",
      ]),
      id: EventIdSerializer.serialize(value.id),
      timestamp: value.timestamp,
      type: EventTypeSerializer.serialize(value.type),
    };
  },
};
