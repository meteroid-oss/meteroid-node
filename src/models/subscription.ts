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
import { type Currency, CurrencySerializer } from "./currency.js";
import { type CustomerId, CustomerIdSerializer } from "./customerId.js";
import {
  type PaymentMethodsConfig,
  PaymentMethodsConfigSerializer,
} from "./paymentMethodsConfig.js";
import { type PlanId, PlanIdSerializer } from "./planId.js";
import { type PlanVersionId, PlanVersionIdSerializer } from "./planVersionId.js";
import { type SubscriptionId, SubscriptionIdSerializer } from "./subscriptionId.js";
import {
  type SubscriptionStatusEnum,
  SubscriptionStatusEnumSerializer,
} from "./subscriptionStatusEnum.js";

export interface Subscription {
  /** When the subscription was activated (first payment or activation condition met) */
  activatedAt?: Date | null | undefined;
  /** If false, invoices will stay in Draft until manually reviewed and finalized. Default to true. */
  autoAdvanceInvoices: boolean;
  billingDayAnchor: number;
  /** When billing started (after any trial period) */
  billingStartDate?: string | null | undefined;
  /** Automatically try to charge the customer's configured payment method on finalize. */
  chargeAutomatically: boolean;
  /** When the subscription was created */
  createdAt: Date;
  currency: Currency;
  /** Current billing period end date */
  currentPeriodEnd?: string | null | undefined;
  /** Current billing period start date */
  currentPeriodStart: string;
  /** User-defined custom property values, keyed by definition `key`. */
  customProperties: unknown;
  customerAlias?: string | null | undefined;
  customerId: CustomerId;
  customerName: string;
  /** When the subscription ends (if set) */
  endDate?: string | null | undefined;
  id: SubscriptionId;
  /** Default memo for invoices */
  invoiceMemo?: string | null | undefined;
  /** Monthly recurring revenue in cents */
  mrrCents: number;
  /** Payment terms in days (0 = due on issue) */
  netTerms: number;
  paymentMethodsConfig?: PaymentMethodsConfig | null | undefined;
  /** Billing period (monthly, annual, etc.) */
  period: BillingPeriodEnum;
  planDescription?: string | null | undefined;
  planId: PlanId;
  planName: string;
  planVersion: number;
  planVersionId: PlanVersionId;
  purchaseOrder?: string | null | undefined;
  /** When the subscription contract starts (benefits apply from this date) */
  startDate: string;
  status: SubscriptionStatusEnum;
  /** The subscription's prices are quoted tax-included (snapshotted from its plan version). */
  taxInclusive: boolean;
  /** Trial duration in days */
  trialDuration?: number | null | undefined;
}

/** Converts `Subscription` values from (`parse`) and to (`serialize`) their JSON form. */
export const SubscriptionSerializer = {
  parse(json: any, path = "$"): Subscription {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "activated_at",
        "auto_advance_invoices",
        "billing_day_anchor",
        "billing_start_date",
        "charge_automatically",
        "created_at",
        "currency",
        "current_period_end",
        "current_period_start",
        "custom_properties",
        "customer_alias",
        "customer_id",
        "customer_name",
        "end_date",
        "id",
        "invoice_memo",
        "mrr_cents",
        "net_terms",
        "payment_methods_config",
        "period",
        "plan_description",
        "plan_id",
        "plan_name",
        "plan_version",
        "plan_version_id",
        "purchase_order",
        "start_date",
        "status",
        "tax_inclusive",
        "trial_duration",
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
      chargeAutomatically: decodeBoolean(
        json["charge_automatically"],
        path,
        "charge_automatically"
      ),
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      currency: CurrencySerializer.parse(json["currency"], decodePath(path, "currency")),
      currentPeriodEnd:
        json["current_period_end"] != null
          ? decodeString(json["current_period_end"], path, "current_period_end")
          : json["current_period_end"],
      currentPeriodStart: decodeString(
        json["current_period_start"],
        path,
        "current_period_start"
      ),
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
      id: SubscriptionIdSerializer.parse(json["id"], decodePath(path, "id")),
      invoiceMemo:
        json["invoice_memo"] != null
          ? decodeString(json["invoice_memo"], path, "invoice_memo")
          : json["invoice_memo"],
      mrrCents: decodeInteger(json["mrr_cents"], path, "mrr_cents"),
      netTerms: decodeInteger(json["net_terms"], path, "net_terms"),
      paymentMethodsConfig:
        json["payment_methods_config"] != null
          ? PaymentMethodsConfigSerializer.parse(
              json["payment_methods_config"],
              decodePath(path, "payment_methods_config")
            )
          : json["payment_methods_config"],
      period: BillingPeriodEnumSerializer.parse(
        json["period"],
        decodePath(path, "period")
      ),
      planDescription:
        json["plan_description"] != null
          ? decodeString(json["plan_description"], path, "plan_description")
          : json["plan_description"],
      planId: PlanIdSerializer.parse(json["plan_id"], decodePath(path, "plan_id")),
      planName: decodeString(json["plan_name"], path, "plan_name"),
      planVersion: decodeInteger(json["plan_version"], path, "plan_version"),
      planVersionId: PlanVersionIdSerializer.parse(
        json["plan_version_id"],
        decodePath(path, "plan_version_id")
      ),
      purchaseOrder:
        json["purchase_order"] != null
          ? decodeString(json["purchase_order"], path, "purchase_order")
          : json["purchase_order"],
      startDate: decodeString(json["start_date"], path, "start_date"),
      status: SubscriptionStatusEnumSerializer.parse(
        json["status"],
        decodePath(path, "status")
      ),
      taxInclusive: decodeBoolean(json["tax_inclusive"], path, "tax_inclusive"),
      trialDuration:
        json["trial_duration"] != null
          ? decodeInteger(json["trial_duration"], path, "trial_duration")
          : json["trial_duration"],
    };
  },

  serialize(value: Subscription): any {
    return {
      ...extraProperties(value, [
        "activatedAt",
        "autoAdvanceInvoices",
        "billingDayAnchor",
        "billingStartDate",
        "chargeAutomatically",
        "createdAt",
        "currency",
        "currentPeriodEnd",
        "currentPeriodStart",
        "customProperties",
        "customerAlias",
        "customerId",
        "customerName",
        "endDate",
        "id",
        "invoiceMemo",
        "mrrCents",
        "netTerms",
        "paymentMethodsConfig",
        "period",
        "planDescription",
        "planId",
        "planName",
        "planVersion",
        "planVersionId",
        "purchaseOrder",
        "startDate",
        "status",
        "taxInclusive",
        "trialDuration",
      ]),
      activated_at: value.activatedAt,
      auto_advance_invoices: value.autoAdvanceInvoices,
      billing_day_anchor: value.billingDayAnchor,
      billing_start_date: value.billingStartDate,
      charge_automatically: value.chargeAutomatically,
      created_at: value.createdAt,
      currency: CurrencySerializer.serialize(value.currency),
      current_period_end: value.currentPeriodEnd,
      current_period_start: value.currentPeriodStart,
      custom_properties: value.customProperties,
      customer_alias: value.customerAlias,
      customer_id: CustomerIdSerializer.serialize(value.customerId),
      customer_name: value.customerName,
      end_date: value.endDate,
      id: SubscriptionIdSerializer.serialize(value.id),
      invoice_memo: value.invoiceMemo,
      mrr_cents: value.mrrCents,
      net_terms: value.netTerms,
      payment_methods_config:
        value.paymentMethodsConfig != null
          ? PaymentMethodsConfigSerializer.serialize(value.paymentMethodsConfig)
          : value.paymentMethodsConfig,
      period: BillingPeriodEnumSerializer.serialize(value.period),
      plan_description: value.planDescription,
      plan_id: PlanIdSerializer.serialize(value.planId),
      plan_name: value.planName,
      plan_version: value.planVersion,
      plan_version_id: PlanVersionIdSerializer.serialize(value.planVersionId),
      purchase_order: value.purchaseOrder,
      start_date: value.startDate,
      status: SubscriptionStatusEnumSerializer.serialize(value.status),
      tax_inclusive: value.taxInclusive,
      trial_duration: value.trialDuration,
    };
  },
};
