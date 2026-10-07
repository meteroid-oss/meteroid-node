// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeDateTime,
  decodeInteger,
  decodeList,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type CouponLineItem, CouponLineItemSerializer } from "./couponLineItem.js";
import { type Currency, CurrencySerializer } from "./currency.js";
import { type CustomerDetails, CustomerDetailsSerializer } from "./customerDetails.js";
import { type CustomerId, CustomerIdSerializer } from "./customerId.js";
import { type EInvoicingStatus, EInvoicingStatusSerializer } from "./eInvoicingStatus.js";
import { type InvoiceId, InvoiceIdSerializer } from "./invoiceId.js";
import { type InvoiceLineItem, InvoiceLineItemSerializer } from "./invoiceLineItem.js";
import {
  type InvoicePaymentStatus,
  InvoicePaymentStatusSerializer,
} from "./invoicePaymentStatus.js";
import { type InvoiceStatus, InvoiceStatusSerializer } from "./invoiceStatus.js";
import { type InvoiceType, InvoiceTypeSerializer } from "./invoiceType.js";
import { type SubscriptionId, SubscriptionIdSerializer } from "./subscriptionId.js";
import { type TaxBreakdownItem, TaxBreakdownItemSerializer } from "./taxBreakdownItem.js";
import { type Transaction, TransactionSerializer } from "./transaction.js";

export interface Invoice {
  amountDue: number;
  appliedCredits: number;
  /**
   * The period/moment this invoice is about — the subscription period start, or the invoice's
   * own date for manual/one-off. Stable and always present, distinct from `invoice_date` (the
   * emission date). Shown as "Invoice date".
   */
  billingPeriodStart?: string | null | undefined;
  childInvoiceId?: InvoiceId | null | undefined;
  coupons: CouponLineItem[];
  createdAt: Date;
  currency: Currency;
  /** User-defined custom property values, keyed by definition `key`. */
  customProperties: unknown;
  customerDetails: CustomerDetails;
  customerId: CustomerId;
  dueDate?: string | null | undefined;
  einvoicingStatus?: EInvoicingStatus | null | undefined;
  finalizedAt?: Date | null | undefined;
  id: InvoiceId;
  invoiceDate: string;
  invoiceNumber: string;
  invoiceType: InvoiceType;
  lineItems: InvoiceLineItem[];
  markedAsUncollectibleAt?: Date | null | undefined;
  memo?: string | null | undefined;
  netTerms: number;
  paidAt?: Date | null | undefined;
  parentInvoiceId?: InvoiceId | null | undefined;
  paymentStatus: InvoicePaymentStatus;
  purchaseOrder?: string | null | undefined;
  reference?: string | null | undefined;
  status: InvoiceStatus;
  subscriptionId?: SubscriptionId | null | undefined;
  subtotal: number;
  subtotalRecurring: number;
  taxAmount: number;
  taxBreakdown: TaxBreakdownItem[];
  /**
   * The prices billed were quoted tax-included. Amounts are net regardless: the tax was
   * carved out of the quoted price, so `total` is that price to the unit.
   */
  taxInclusive: boolean;
  total: number;
  transactions: Transaction[];
  updatedAt?: Date | null | undefined;
  voidedAt?: Date | null | undefined;
}

/** Converts `Invoice` values from (`parse`) and to (`serialize`) their JSON form. */
export const InvoiceSerializer = {
  parse(json: any, path = "$"): Invoice {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "amount_due",
        "applied_credits",
        "billing_period_start",
        "child_invoice_id",
        "coupons",
        "created_at",
        "currency",
        "custom_properties",
        "customer_details",
        "customer_id",
        "due_date",
        "einvoicing_status",
        "finalized_at",
        "id",
        "invoice_date",
        "invoice_number",
        "invoice_type",
        "line_items",
        "marked_as_uncollectible_at",
        "memo",
        "net_terms",
        "paid_at",
        "parent_invoice_id",
        "payment_status",
        "purchase_order",
        "reference",
        "status",
        "subscription_id",
        "subtotal",
        "subtotal_recurring",
        "tax_amount",
        "tax_breakdown",
        "tax_inclusive",
        "total",
        "transactions",
        "updated_at",
        "voided_at",
      ]),
      amountDue: decodeInteger(json["amount_due"], path, "amount_due"),
      appliedCredits: decodeInteger(json["applied_credits"], path, "applied_credits"),
      billingPeriodStart:
        json["billing_period_start"] != null
          ? decodeString(json["billing_period_start"], path, "billing_period_start")
          : json["billing_period_start"],
      childInvoiceId:
        json["child_invoice_id"] != null
          ? InvoiceIdSerializer.parse(
              json["child_invoice_id"],
              decodePath(path, "child_invoice_id")
            )
          : json["child_invoice_id"],
      coupons: decodeList(
        json["coupons"],
        path,
        "coupons",
        (item: any, p: string, i: number) =>
          CouponLineItemSerializer.parse(item, decodePath(p, i))
      ),
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      currency: CurrencySerializer.parse(json["currency"], decodePath(path, "currency")),
      customProperties: json["custom_properties"],
      customerDetails: CustomerDetailsSerializer.parse(
        json["customer_details"],
        decodePath(path, "customer_details")
      ),
      customerId: CustomerIdSerializer.parse(
        json["customer_id"],
        decodePath(path, "customer_id")
      ),
      dueDate:
        json["due_date"] != null
          ? decodeString(json["due_date"], path, "due_date")
          : json["due_date"],
      einvoicingStatus:
        json["einvoicing_status"] != null
          ? EInvoicingStatusSerializer.parse(
              json["einvoicing_status"],
              decodePath(path, "einvoicing_status")
            )
          : json["einvoicing_status"],
      finalizedAt:
        json["finalized_at"] != null
          ? decodeDateTime(json["finalized_at"], path, "finalized_at")
          : json["finalized_at"],
      id: InvoiceIdSerializer.parse(json["id"], decodePath(path, "id")),
      invoiceDate: decodeString(json["invoice_date"], path, "invoice_date"),
      invoiceNumber: decodeString(json["invoice_number"], path, "invoice_number"),
      invoiceType: InvoiceTypeSerializer.parse(
        json["invoice_type"],
        decodePath(path, "invoice_type")
      ),
      lineItems: decodeList(
        json["line_items"],
        path,
        "line_items",
        (item: any, p: string, i: number) =>
          InvoiceLineItemSerializer.parse(item, decodePath(p, i))
      ),
      markedAsUncollectibleAt:
        json["marked_as_uncollectible_at"] != null
          ? decodeDateTime(
              json["marked_as_uncollectible_at"],
              path,
              "marked_as_uncollectible_at"
            )
          : json["marked_as_uncollectible_at"],
      memo:
        json["memo"] != null ? decodeString(json["memo"], path, "memo") : json["memo"],
      netTerms: decodeInteger(json["net_terms"], path, "net_terms"),
      paidAt:
        json["paid_at"] != null
          ? decodeDateTime(json["paid_at"], path, "paid_at")
          : json["paid_at"],
      parentInvoiceId:
        json["parent_invoice_id"] != null
          ? InvoiceIdSerializer.parse(
              json["parent_invoice_id"],
              decodePath(path, "parent_invoice_id")
            )
          : json["parent_invoice_id"],
      paymentStatus: InvoicePaymentStatusSerializer.parse(
        json["payment_status"],
        decodePath(path, "payment_status")
      ),
      purchaseOrder:
        json["purchase_order"] != null
          ? decodeString(json["purchase_order"], path, "purchase_order")
          : json["purchase_order"],
      reference:
        json["reference"] != null
          ? decodeString(json["reference"], path, "reference")
          : json["reference"],
      status: InvoiceStatusSerializer.parse(json["status"], decodePath(path, "status")),
      subscriptionId:
        json["subscription_id"] != null
          ? SubscriptionIdSerializer.parse(
              json["subscription_id"],
              decodePath(path, "subscription_id")
            )
          : json["subscription_id"],
      subtotal: decodeInteger(json["subtotal"], path, "subtotal"),
      subtotalRecurring: decodeInteger(
        json["subtotal_recurring"],
        path,
        "subtotal_recurring"
      ),
      taxAmount: decodeInteger(json["tax_amount"], path, "tax_amount"),
      taxBreakdown: decodeList(
        json["tax_breakdown"],
        path,
        "tax_breakdown",
        (item: any, p: string, i: number) =>
          TaxBreakdownItemSerializer.parse(item, decodePath(p, i))
      ),
      taxInclusive: decodeBoolean(json["tax_inclusive"], path, "tax_inclusive"),
      total: decodeInteger(json["total"], path, "total"),
      transactions: decodeList(
        json["transactions"],
        path,
        "transactions",
        (item: any, p: string, i: number) =>
          TransactionSerializer.parse(item, decodePath(p, i))
      ),
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

  serialize(value: Invoice): any {
    return {
      ...extraProperties(value, [
        "amountDue",
        "appliedCredits",
        "billingPeriodStart",
        "childInvoiceId",
        "coupons",
        "createdAt",
        "currency",
        "customProperties",
        "customerDetails",
        "customerId",
        "dueDate",
        "einvoicingStatus",
        "finalizedAt",
        "id",
        "invoiceDate",
        "invoiceNumber",
        "invoiceType",
        "lineItems",
        "markedAsUncollectibleAt",
        "memo",
        "netTerms",
        "paidAt",
        "parentInvoiceId",
        "paymentStatus",
        "purchaseOrder",
        "reference",
        "status",
        "subscriptionId",
        "subtotal",
        "subtotalRecurring",
        "taxAmount",
        "taxBreakdown",
        "taxInclusive",
        "total",
        "transactions",
        "updatedAt",
        "voidedAt",
      ]),
      amount_due: value.amountDue,
      applied_credits: value.appliedCredits,
      billing_period_start: value.billingPeriodStart,
      child_invoice_id:
        value.childInvoiceId != null
          ? InvoiceIdSerializer.serialize(value.childInvoiceId)
          : value.childInvoiceId,
      coupons: value.coupons.map((item: any) => CouponLineItemSerializer.serialize(item)),
      created_at: value.createdAt,
      currency: CurrencySerializer.serialize(value.currency),
      custom_properties: value.customProperties,
      customer_details: CustomerDetailsSerializer.serialize(value.customerDetails),
      customer_id: CustomerIdSerializer.serialize(value.customerId),
      due_date: value.dueDate,
      einvoicing_status:
        value.einvoicingStatus != null
          ? EInvoicingStatusSerializer.serialize(value.einvoicingStatus)
          : value.einvoicingStatus,
      finalized_at: value.finalizedAt,
      id: InvoiceIdSerializer.serialize(value.id),
      invoice_date: value.invoiceDate,
      invoice_number: value.invoiceNumber,
      invoice_type: InvoiceTypeSerializer.serialize(value.invoiceType),
      line_items: value.lineItems.map((item: any) =>
        InvoiceLineItemSerializer.serialize(item)
      ),
      marked_as_uncollectible_at: value.markedAsUncollectibleAt,
      memo: value.memo,
      net_terms: value.netTerms,
      paid_at: value.paidAt,
      parent_invoice_id:
        value.parentInvoiceId != null
          ? InvoiceIdSerializer.serialize(value.parentInvoiceId)
          : value.parentInvoiceId,
      payment_status: InvoicePaymentStatusSerializer.serialize(value.paymentStatus),
      purchase_order: value.purchaseOrder,
      reference: value.reference,
      status: InvoiceStatusSerializer.serialize(value.status),
      subscription_id:
        value.subscriptionId != null
          ? SubscriptionIdSerializer.serialize(value.subscriptionId)
          : value.subscriptionId,
      subtotal: value.subtotal,
      subtotal_recurring: value.subtotalRecurring,
      tax_amount: value.taxAmount,
      tax_breakdown: value.taxBreakdown.map((item: any) =>
        TaxBreakdownItemSerializer.serialize(item)
      ),
      tax_inclusive: value.taxInclusive,
      total: value.total,
      transactions: value.transactions.map((item: any) =>
        TransactionSerializer.serialize(item)
      ),
      updated_at: value.updatedAt,
      voided_at: value.voidedAt,
    };
  },
};
