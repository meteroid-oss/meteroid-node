// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeDateTime,
  decodeInteger,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type CustomerId, CustomerIdSerializer } from "./customerId.js";
import { type InvoiceId, InvoiceIdSerializer } from "./invoiceId.js";
import { type InvoiceStatus, InvoiceStatusSerializer } from "./invoiceStatus.js";

export interface InvoiceEventData {
  consolidatedIntoInvoiceId?: InvoiceId | null | undefined;
  createdAt: Date;
  currency: string;
  /** User-defined custom property values, keyed by definition key. */
  customProperties: unknown;
  customerId: CustomerId;
  invoiceId: InvoiceId;
  /** Absent while the invoice is a draft — the number is assigned at finalization. */
  invoiceNumber?: string | null | undefined;
  parentInvoiceId?: InvoiceId | null | undefined;
  status: InvoiceStatus;
  taxAmount: number;
  total: number;
}

/** Converts `InvoiceEventData` values from (`parse`) and to (`serialize`) their JSON form. */
export const InvoiceEventDataSerializer = {
  parse(json: any, path = "$"): InvoiceEventData {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
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
      consolidatedIntoInvoiceId:
        json["consolidated_into_invoice_id"] != null
          ? InvoiceIdSerializer.parse(
              json["consolidated_into_invoice_id"],
              decodePath(path, "consolidated_into_invoice_id")
            )
          : json["consolidated_into_invoice_id"],
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      currency: decodeString(json["currency"], path, "currency"),
      customProperties: json["custom_properties"],
      customerId: CustomerIdSerializer.parse(
        json["customer_id"],
        decodePath(path, "customer_id")
      ),
      invoiceId: InvoiceIdSerializer.parse(
        json["invoice_id"],
        decodePath(path, "invoice_id")
      ),
      invoiceNumber:
        json["invoice_number"] != null
          ? decodeString(json["invoice_number"], path, "invoice_number")
          : json["invoice_number"],
      parentInvoiceId:
        json["parent_invoice_id"] != null
          ? InvoiceIdSerializer.parse(
              json["parent_invoice_id"],
              decodePath(path, "parent_invoice_id")
            )
          : json["parent_invoice_id"],
      status: InvoiceStatusSerializer.parse(json["status"], decodePath(path, "status")),
      taxAmount: decodeInteger(json["tax_amount"], path, "tax_amount"),
      total: decodeInteger(json["total"], path, "total"),
    };
  },

  serialize(value: InvoiceEventData): any {
    return {
      ...extraProperties(value, [
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
      consolidated_into_invoice_id:
        value.consolidatedIntoInvoiceId != null
          ? InvoiceIdSerializer.serialize(value.consolidatedIntoInvoiceId)
          : value.consolidatedIntoInvoiceId,
      created_at: value.createdAt,
      currency: value.currency,
      custom_properties: value.customProperties,
      customer_id: CustomerIdSerializer.serialize(value.customerId),
      invoice_id: InvoiceIdSerializer.serialize(value.invoiceId),
      invoice_number: value.invoiceNumber,
      parent_invoice_id:
        value.parentInvoiceId != null
          ? InvoiceIdSerializer.serialize(value.parentInvoiceId)
          : value.parentInvoiceId,
      status: InvoiceStatusSerializer.serialize(value.status),
      tax_amount: value.taxAmount,
      total: value.total,
    };
  },
};
