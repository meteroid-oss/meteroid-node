// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeDateTime,
  decodeInteger,
  decodeList,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type CreditNoteId, CreditNoteIdSerializer } from "./creditNoteId.js";
import { type CreditNoteStatus, CreditNoteStatusSerializer } from "./creditNoteStatus.js";
import { type CreditType, CreditTypeSerializer } from "./creditType.js";
import { type Currency, CurrencySerializer } from "./currency.js";
import { type CustomerId, CustomerIdSerializer } from "./customerId.js";
import { type InvoiceId, InvoiceIdSerializer } from "./invoiceId.js";
import { type InvoiceLineItem, InvoiceLineItemSerializer } from "./invoiceLineItem.js";
import { type PlanVersionId, PlanVersionIdSerializer } from "./planVersionId.js";
import { type SubscriptionId, SubscriptionIdSerializer } from "./subscriptionId.js";
import { type TaxBreakdownItem, TaxBreakdownItemSerializer } from "./taxBreakdownItem.js";

export interface CreditNote {
  createdAt: Date;
  creditNoteNumber: string;
  creditType: CreditType;
  creditedAmountCents: number;
  currency: Currency;
  /** User-defined custom property values, keyed by definition `key`. */
  customProperties: unknown;
  customerId: CustomerId;
  finalizedAt?: Date | null | undefined;
  id: CreditNoteId;
  invoiceId: InvoiceId;
  invoiceNumber: string;
  lineItems: InvoiceLineItem[];
  memo?: string | null | undefined;
  planVersionId?: PlanVersionId | null | undefined;
  reason?: string | null | undefined;
  refundedAmountCents: number;
  status: CreditNoteStatus;
  subscriptionId?: SubscriptionId | null | undefined;
  subtotal: number;
  taxAmount: number;
  taxBreakdown: TaxBreakdownItem[];
  total: number;
  updatedAt?: Date | null | undefined;
  voidedAt?: Date | null | undefined;
}

/** Converts `CreditNote` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditNoteSerializer = {
  parse(json: any, path = "$"): CreditNote {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "created_at",
        "credit_note_number",
        "credit_type",
        "credited_amount_cents",
        "currency",
        "custom_properties",
        "customer_id",
        "finalized_at",
        "id",
        "invoice_id",
        "invoice_number",
        "line_items",
        "memo",
        "plan_version_id",
        "reason",
        "refunded_amount_cents",
        "status",
        "subscription_id",
        "subtotal",
        "tax_amount",
        "tax_breakdown",
        "total",
        "updated_at",
        "voided_at",
      ]),
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      creditNoteNumber: decodeString(
        json["credit_note_number"],
        path,
        "credit_note_number"
      ),
      creditType: CreditTypeSerializer.parse(
        json["credit_type"],
        decodePath(path, "credit_type")
      ),
      creditedAmountCents: decodeInteger(
        json["credited_amount_cents"],
        path,
        "credited_amount_cents"
      ),
      currency: CurrencySerializer.parse(json["currency"], decodePath(path, "currency")),
      customProperties: json["custom_properties"],
      customerId: CustomerIdSerializer.parse(
        json["customer_id"],
        decodePath(path, "customer_id")
      ),
      finalizedAt:
        json["finalized_at"] != null
          ? decodeDateTime(json["finalized_at"], path, "finalized_at")
          : json["finalized_at"],
      id: CreditNoteIdSerializer.parse(json["id"], decodePath(path, "id")),
      invoiceId: InvoiceIdSerializer.parse(
        json["invoice_id"],
        decodePath(path, "invoice_id")
      ),
      invoiceNumber: decodeString(json["invoice_number"], path, "invoice_number"),
      lineItems: decodeList(
        json["line_items"],
        path,
        "line_items",
        (item: any, p: string, i: number) =>
          InvoiceLineItemSerializer.parse(item, decodePath(p, i))
      ),
      memo:
        json["memo"] != null ? decodeString(json["memo"], path, "memo") : json["memo"],
      planVersionId:
        json["plan_version_id"] != null
          ? PlanVersionIdSerializer.parse(
              json["plan_version_id"],
              decodePath(path, "plan_version_id")
            )
          : json["plan_version_id"],
      reason:
        json["reason"] != null
          ? decodeString(json["reason"], path, "reason")
          : json["reason"],
      refundedAmountCents: decodeInteger(
        json["refunded_amount_cents"],
        path,
        "refunded_amount_cents"
      ),
      status: CreditNoteStatusSerializer.parse(
        json["status"],
        decodePath(path, "status")
      ),
      subscriptionId:
        json["subscription_id"] != null
          ? SubscriptionIdSerializer.parse(
              json["subscription_id"],
              decodePath(path, "subscription_id")
            )
          : json["subscription_id"],
      subtotal: decodeInteger(json["subtotal"], path, "subtotal"),
      taxAmount: decodeInteger(json["tax_amount"], path, "tax_amount"),
      taxBreakdown: decodeList(
        json["tax_breakdown"],
        path,
        "tax_breakdown",
        (item: any, p: string, i: number) =>
          TaxBreakdownItemSerializer.parse(item, decodePath(p, i))
      ),
      total: decodeInteger(json["total"], path, "total"),
      updatedAt:
        json["updated_at"] != null
          ? decodeDateTime(json["updated_at"], path, "updated_at")
          : json["updated_at"],
      voidedAt:
        json["voided_at"] != null
          ? decodeDateTime(json["voided_at"], path, "voided_at")
          : json["voided_at"],
    };
  },

  serialize(value: CreditNote): any {
    return {
      ...extraProperties(value, [
        "createdAt",
        "creditNoteNumber",
        "creditType",
        "creditedAmountCents",
        "currency",
        "customProperties",
        "customerId",
        "finalizedAt",
        "id",
        "invoiceId",
        "invoiceNumber",
        "lineItems",
        "memo",
        "planVersionId",
        "reason",
        "refundedAmountCents",
        "status",
        "subscriptionId",
        "subtotal",
        "taxAmount",
        "taxBreakdown",
        "total",
        "updatedAt",
        "voidedAt",
      ]),
      created_at: value.createdAt,
      credit_note_number: value.creditNoteNumber,
      credit_type: CreditTypeSerializer.serialize(value.creditType),
      credited_amount_cents: value.creditedAmountCents,
      currency: CurrencySerializer.serialize(value.currency),
      custom_properties: value.customProperties,
      customer_id: CustomerIdSerializer.serialize(value.customerId),
      finalized_at: value.finalizedAt,
      id: CreditNoteIdSerializer.serialize(value.id),
      invoice_id: InvoiceIdSerializer.serialize(value.invoiceId),
      invoice_number: value.invoiceNumber,
      line_items: value.lineItems.map((item: any) =>
        InvoiceLineItemSerializer.serialize(item)
      ),
      memo: value.memo,
      plan_version_id:
        value.planVersionId != null
          ? PlanVersionIdSerializer.serialize(value.planVersionId)
          : value.planVersionId,
      reason: value.reason,
      refunded_amount_cents: value.refundedAmountCents,
      status: CreditNoteStatusSerializer.serialize(value.status),
      subscription_id:
        value.subscriptionId != null
          ? SubscriptionIdSerializer.serialize(value.subscriptionId)
          : value.subscriptionId,
      subtotal: value.subtotal,
      tax_amount: value.taxAmount,
      tax_breakdown: value.taxBreakdown.map((item: any) =>
        TaxBreakdownItemSerializer.serialize(item)
      ),
      total: value.total,
      updated_at: value.updatedAt,
      voided_at: value.voidedAt,
    };
  },
};
