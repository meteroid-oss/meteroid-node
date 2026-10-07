// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeInteger,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import {
  type PaymentMethodsConfig,
  PaymentMethodsConfigSerializer,
} from "./paymentMethodsConfig.js";

export interface SubscriptionUpdateRequest {
  /** If false, invoices will stay in Draft until manually reviewed and finalized. */
  autoAdvanceInvoices?: boolean | null | undefined;
  /** Automatically try to charge the customer's configured payment method on finalize. */
  chargeAutomatically?: boolean | null | undefined;
  /**
   * Partial update of custom property values (merge; send a key with `null` to remove it).
   * Validated against the tenant's `SUBSCRIPTION` property definitions. Omit to leave unchanged.
   */
  customProperties?: unknown | undefined;
  /** Default memo for invoices */
  invoiceMemo?: string | null | undefined;
  /** Payment terms in days (0 = due on issue) */
  netTerms?: number | null | undefined;
  paymentMethodsConfig?: PaymentMethodsConfig | null | undefined;
  /** Purchase order number */
  purchaseOrder?: string | null | undefined;
}

/** Converts `SubscriptionUpdateRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const SubscriptionUpdateRequestSerializer = {
  parse(json: any, path = "$"): SubscriptionUpdateRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "auto_advance_invoices",
        "charge_automatically",
        "custom_properties",
        "invoice_memo",
        "net_terms",
        "payment_methods_config",
        "purchase_order",
      ]),
      autoAdvanceInvoices:
        json["auto_advance_invoices"] != null
          ? decodeBoolean(json["auto_advance_invoices"], path, "auto_advance_invoices")
          : json["auto_advance_invoices"],
      chargeAutomatically:
        json["charge_automatically"] != null
          ? decodeBoolean(json["charge_automatically"], path, "charge_automatically")
          : json["charge_automatically"],
      customProperties: json["custom_properties"],
      invoiceMemo:
        json["invoice_memo"] != null
          ? decodeString(json["invoice_memo"], path, "invoice_memo")
          : json["invoice_memo"],
      netTerms:
        json["net_terms"] != null
          ? decodeInteger(json["net_terms"], path, "net_terms")
          : json["net_terms"],
      paymentMethodsConfig:
        json["payment_methods_config"] != null
          ? PaymentMethodsConfigSerializer.parse(
              json["payment_methods_config"],
              decodePath(path, "payment_methods_config")
            )
          : json["payment_methods_config"],
      purchaseOrder:
        json["purchase_order"] != null
          ? decodeString(json["purchase_order"], path, "purchase_order")
          : json["purchase_order"],
    };
  },

  serialize(value: SubscriptionUpdateRequest): any {
    return {
      ...extraProperties(value, [
        "autoAdvanceInvoices",
        "chargeAutomatically",
        "customProperties",
        "invoiceMemo",
        "netTerms",
        "paymentMethodsConfig",
        "purchaseOrder",
      ]),
      auto_advance_invoices: value.autoAdvanceInvoices,
      charge_automatically: value.chargeAutomatically,
      custom_properties: value.customProperties,
      invoice_memo: value.invoiceMemo,
      net_terms: value.netTerms,
      payment_methods_config:
        value.paymentMethodsConfig != null
          ? PaymentMethodsConfigSerializer.serialize(value.paymentMethodsConfig)
          : value.paymentMethodsConfig,
      purchase_order: value.purchaseOrder,
    };
  },
};
