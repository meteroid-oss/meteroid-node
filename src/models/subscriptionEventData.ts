// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeDateTime,
  decodeInteger,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import {
  type BillingPeriodEnum,
  BillingPeriodEnumSerializer,
} from "./billingPeriodEnum.js";
import { type CustomerId, CustomerIdSerializer } from "./customerId.js";
import { type SubscriptionId, SubscriptionIdSerializer } from "./subscriptionId.js";
import {
  type SubscriptionStatusEnum,
  SubscriptionStatusEnumSerializer,
} from "./subscriptionStatusEnum.js";
import {
  type SubscriptionUpdateType,
  SubscriptionUpdateTypeSerializer,
} from "./subscriptionUpdateType.js";

export interface SubscriptionEventData {
  activatedAt?: Date | null | undefined;
  autoAdvanceInvoices: boolean;
  billingDayAnchor: number;
  billingStartDate?: string | null | undefined;
  /** Present on `subscription.cancelled` when a reason was supplied. */
  cancellationReason?: string | null | undefined;
  changeType?: SubscriptionUpdateType | null | undefined;
  chargeAutomatically: boolean;
  createdAt: Date;
  currency: string;
  /** User-defined custom property values, keyed by definition key. */
  customProperties: unknown;
  customerAlias?: string | null | undefined;
  customerId: CustomerId;
  customerName: string;
  endDate?: string | null | undefined;
  invoiceMemo?: string | null | undefined;
  invoiceThreshold?: string | null | undefined;
  mrrCents: number;
  netTerms: number;
  period: BillingPeriodEnum;
  planName: string;
  purchaseOrder?: string | null | undefined;
  startDate: string;
  status: SubscriptionStatusEnum;
  subscriptionId: SubscriptionId;
  trialDuration?: number | null | undefined;
  version: number;
}

/** Converts `SubscriptionEventData` values from (`parse`) and to (`serialize`) their JSON form. */
export const SubscriptionEventDataSerializer = {
  parse(json: any, path = "$"): SubscriptionEventData {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "activated_at",
        "auto_advance_invoices",
        "billing_day_anchor",
        "billing_start_date",
        "cancellation_reason",
        "change_type",
        "charge_automatically",
        "created_at",
        "currency",
        "custom_properties",
        "customer_alias",
        "customer_id",
        "customer_name",
        "end_date",
        "invoice_memo",
        "invoice_threshold",
        "mrr_cents",
        "net_terms",
        "period",
        "plan_name",
        "purchase_order",
        "start_date",
        "status",
        "subscription_id",
        "trial_duration",
        "version",
      ]),
      activatedAt:
        json["activated_at"] != null
          ? decodeDateTime(json["activated_at"], path, "activated_at")
          : json["activated_at"],
      autoAdvanceInvoices: decodeBoolean(
        json["auto_advance_invoices"],
        path,
        "auto_advance_invoices"
      ),
      billingDayAnchor: decodeInteger(
        json["billing_day_anchor"],
        path,
        "billing_day_anchor"
      ),
      billingStartDate:
        json["billing_start_date"] != null
          ? decodeString(json["billing_start_date"], path, "billing_start_date")
          : json["billing_start_date"],
      cancellationReason:
        json["cancellation_reason"] != null
          ? decodeString(json["cancellation_reason"], path, "cancellation_reason")
          : json["cancellation_reason"],
      changeType:
        json["change_type"] != null
          ? SubscriptionUpdateTypeSerializer.parse(
              json["change_type"],
              decodePath(path, "change_type")
            )
          : json["change_type"],
      chargeAutomatically: decodeBoolean(
        json["charge_automatically"],
        path,
        "charge_automatically"
      ),
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      currency: decodeString(json["currency"], path, "currency"),
      customProperties: json["custom_properties"],
      customerAlias:
        json["customer_alias"] != null
          ? decodeString(json["customer_alias"], path, "customer_alias")
          : json["customer_alias"],
      customerId: CustomerIdSerializer.parse(
        json["customer_id"],
        decodePath(path, "customer_id")
      ),
      customerName: decodeString(json["customer_name"], path, "customer_name"),
      endDate:
        json["end_date"] != null
          ? decodeString(json["end_date"], path, "end_date")
          : json["end_date"],
      invoiceMemo:
        json["invoice_memo"] != null
          ? decodeString(json["invoice_memo"], path, "invoice_memo")
          : json["invoice_memo"],
      invoiceThreshold:
        json["invoice_threshold"] != null
          ? decodeString(json["invoice_threshold"], path, "invoice_threshold")
          : json["invoice_threshold"],
      mrrCents: decodeInteger(json["mrr_cents"], path, "mrr_cents"),
      netTerms: decodeInteger(json["net_terms"], path, "net_terms"),
      period: BillingPeriodEnumSerializer.parse(
        json["period"],
        decodePath(path, "period")
      ),
      planName: decodeString(json["plan_name"], path, "plan_name"),
      purchaseOrder:
        json["purchase_order"] != null
          ? decodeString(json["purchase_order"], path, "purchase_order")
          : json["purchase_order"],
      startDate: decodeString(json["start_date"], path, "start_date"),
      status: SubscriptionStatusEnumSerializer.parse(
        json["status"],
        decodePath(path, "status")
      ),
      subscriptionId: SubscriptionIdSerializer.parse(
        json["subscription_id"],
        decodePath(path, "subscription_id")
      ),
      trialDuration:
        json["trial_duration"] != null
          ? decodeInteger(json["trial_duration"], path, "trial_duration")
          : json["trial_duration"],
      version: decodeInteger(json["version"], path, "version"),
    };
  },

  serialize(value: SubscriptionEventData): any {
    return {
      ...extraProperties(value, [
        "activatedAt",
        "autoAdvanceInvoices",
        "billingDayAnchor",
        "billingStartDate",
        "cancellationReason",
        "changeType",
        "chargeAutomatically",
        "createdAt",
        "currency",
        "customProperties",
        "customerAlias",
        "customerId",
        "customerName",
        "endDate",
        "invoiceMemo",
        "invoiceThreshold",
        "mrrCents",
        "netTerms",
        "period",
        "planName",
        "purchaseOrder",
        "startDate",
        "status",
        "subscriptionId",
        "trialDuration",
        "version",
      ]),
      activated_at: value.activatedAt,
      auto_advance_invoices: value.autoAdvanceInvoices,
      billing_day_anchor: value.billingDayAnchor,
      billing_start_date: value.billingStartDate,
      cancellation_reason: value.cancellationReason,
      change_type:
        value.changeType != null
          ? SubscriptionUpdateTypeSerializer.serialize(value.changeType)
          : value.changeType,
      charge_automatically: value.chargeAutomatically,
      created_at: value.createdAt,
      currency: value.currency,
      custom_properties: value.customProperties,
      customer_alias: value.customerAlias,
      customer_id: CustomerIdSerializer.serialize(value.customerId),
      customer_name: value.customerName,
      end_date: value.endDate,
      invoice_memo: value.invoiceMemo,
      invoice_threshold: value.invoiceThreshold,
      mrr_cents: value.mrrCents,
      net_terms: value.netTerms,
      period: BillingPeriodEnumSerializer.serialize(value.period),
      plan_name: value.planName,
      purchase_order: value.purchaseOrder,
      start_date: value.startDate,
      status: SubscriptionStatusEnumSerializer.serialize(value.status),
      subscription_id: SubscriptionIdSerializer.serialize(value.subscriptionId),
      trial_duration: value.trialDuration,
      version: value.version,
    };
  },
};
