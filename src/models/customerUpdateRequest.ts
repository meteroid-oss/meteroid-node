// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeList,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type Address, AddressSerializer } from "./address.js";
import { type Currency, CurrencySerializer } from "./currency.js";
import { type CustomTaxRate, CustomTaxRateSerializer } from "./customTaxRate.js";
import { type CustomerType, CustomerTypeSerializer } from "./customerType.js";
import {
  type InvoicingEntityId,
  InvoicingEntityIdSerializer,
} from "./invoicingEntityId.js";
import { type ShippingAddress, ShippingAddressSerializer } from "./shippingAddress.js";

export interface CustomerUpdateRequest {
  alias?: string | null | undefined;
  billingAddress?: Address | null | undefined;
  billingEmail?: string | null | undefined;
  /**
   * BT-10 — the reference the buyer routes invoices by (a Leitweg-ID for German
   * public bodies). Required by XRechnung.
   */
  buyerReference?: string | null | undefined;
  currency: Currency;
  /** User-defined custom property values (full replace). Omit to leave unchanged. */
  customProperties?: unknown | undefined;
  customTaxes: CustomTaxRate[];
  customerType?: CustomerType | null | undefined;
  /** Free-text legal exemption mention surfaced on exempt invoices. */
  exemptionReason?: string | null | undefined;
  /** Omit to keep the stored value (a full replace does not blank a person's name). */
  firstName?: string | null | undefined;
  invoicingEmails: string[];
  invoicingEntityId: InvoicingEntityId;
  /**
   * Deprecated: use `preferred_locales`. Applied only when `preferred_locales` is absent.
   *
   * @deprecated
   */
  invoicingLanguage?: string | null | undefined;
  isTaxExempt?: boolean | null | undefined;
  lastName?: string | null | undefined;
  /** BT-47 — the buyer's national register identifier (SIREN/SIRET, HRB). */
  legalNumber?: string | null | undefined;
  /** Required for `COMPANY`. Ignored for `INDIVIDUAL`: derived from `first_name` + `last_name`. */
  name?: string | undefined;
  phone?: string | null | undefined;
  /**
   * Preferred document languages, most-preferred first (BCP-47 tags, e.g.
   * `["fr-FR", "en"]`); overrides the invoicing entity default. Omit or send `[]` to
   * reset to that default (full-replace update).
   */
  preferredLocales?: string[] | null | undefined;
  shippingAddress?: ShippingAddress | null | undefined;
  vatNumber?: string | null | undefined;
}

/** Converts `CustomerUpdateRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const CustomerUpdateRequestSerializer = {
  parse(json: any, path = "$"): CustomerUpdateRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "alias",
        "billing_address",
        "billing_email",
        "buyer_reference",
        "currency",
        "custom_properties",
        "custom_taxes",
        "customer_type",
        "exemption_reason",
        "first_name",
        "invoicing_emails",
        "invoicing_entity_id",
        "invoicing_language",
        "is_tax_exempt",
        "last_name",
        "legal_number",
        "name",
        "phone",
        "preferred_locales",
        "shipping_address",
        "vat_number",
      ]),
      alias:
        json["alias"] != null
          ? decodeString(json["alias"], path, "alias")
          : json["alias"],
      billingAddress:
        json["billing_address"] != null
          ? AddressSerializer.parse(
              json["billing_address"],
              decodePath(path, "billing_address")
            )
          : json["billing_address"],
      billingEmail:
        json["billing_email"] != null
          ? decodeString(json["billing_email"], path, "billing_email")
          : json["billing_email"],
      buyerReference:
        json["buyer_reference"] != null
          ? decodeString(json["buyer_reference"], path, "buyer_reference")
          : json["buyer_reference"],
      currency: CurrencySerializer.parse(json["currency"], decodePath(path, "currency")),
      customProperties: json["custom_properties"],
      customTaxes: decodeList(
        json["custom_taxes"],
        path,
        "custom_taxes",
        (item: any, p: string, i: number) =>
          CustomTaxRateSerializer.parse(item, decodePath(p, i))
      ),
      customerType:
        json["customer_type"] != null
          ? CustomerTypeSerializer.parse(
              json["customer_type"],
              decodePath(path, "customer_type")
            )
          : json["customer_type"],
      exemptionReason:
        json["exemption_reason"] != null
          ? decodeString(json["exemption_reason"], path, "exemption_reason")
          : json["exemption_reason"],
      firstName:
        json["first_name"] != null
          ? decodeString(json["first_name"], path, "first_name")
          : json["first_name"],
      invoicingEmails: decodeList(
        json["invoicing_emails"],
        path,
        "invoicing_emails",
        (item: any, p: string, i: number) => decodeString(item, p, i)
      ),
      invoicingEntityId: InvoicingEntityIdSerializer.parse(
        json["invoicing_entity_id"],
        decodePath(path, "invoicing_entity_id")
      ),
      invoicingLanguage:
        json["invoicing_language"] != null
          ? decodeString(json["invoicing_language"], path, "invoicing_language")
          : json["invoicing_language"],
      isTaxExempt:
        json["is_tax_exempt"] != null
          ? decodeBoolean(json["is_tax_exempt"], path, "is_tax_exempt")
          : json["is_tax_exempt"],
      lastName:
        json["last_name"] != null
          ? decodeString(json["last_name"], path, "last_name")
          : json["last_name"],
      legalNumber:
        json["legal_number"] != null
          ? decodeString(json["legal_number"], path, "legal_number")
          : json["legal_number"],
      name: json["name"] != null ? decodeString(json["name"], path, "name") : undefined,
      phone:
        json["phone"] != null
          ? decodeString(json["phone"], path, "phone")
          : json["phone"],
      preferredLocales:
        json["preferred_locales"] != null
          ? decodeList(
              json["preferred_locales"],
              path,
              "preferred_locales",
              (item: any, p: string, i: number) => decodeString(item, p, i)
            )
          : json["preferred_locales"],
      shippingAddress:
        json["shipping_address"] != null
          ? ShippingAddressSerializer.parse(
              json["shipping_address"],
              decodePath(path, "shipping_address")
            )
          : json["shipping_address"],
      vatNumber:
        json["vat_number"] != null
          ? decodeString(json["vat_number"], path, "vat_number")
          : json["vat_number"],
    };
  },

  serialize(value: CustomerUpdateRequest): any {
    return {
      ...extraProperties(value, [
        "alias",
        "billingAddress",
        "billingEmail",
        "buyerReference",
        "currency",
        "customProperties",
        "customTaxes",
        "customerType",
        "exemptionReason",
        "firstName",
        "invoicingEmails",
        "invoicingEntityId",
        "invoicingLanguage",
        "isTaxExempt",
        "lastName",
        "legalNumber",
        "name",
        "phone",
        "preferredLocales",
        "shippingAddress",
        "vatNumber",
      ]),
      alias: value.alias,
      billing_address:
        value.billingAddress != null
          ? AddressSerializer.serialize(value.billingAddress)
          : value.billingAddress,
      billing_email: value.billingEmail,
      buyer_reference: value.buyerReference,
      currency: CurrencySerializer.serialize(value.currency),
      custom_properties: value.customProperties,
      custom_taxes: value.customTaxes.map((item: any) =>
        CustomTaxRateSerializer.serialize(item)
      ),
      customer_type:
        value.customerType != null
          ? CustomerTypeSerializer.serialize(value.customerType)
          : value.customerType,
      exemption_reason: value.exemptionReason,
      first_name: value.firstName,
      invoicing_emails: value.invoicingEmails,
      invoicing_entity_id: InvoicingEntityIdSerializer.serialize(value.invoicingEntityId),
      invoicing_language: value.invoicingLanguage,
      is_tax_exempt: value.isTaxExempt,
      last_name: value.lastName,
      legal_number: value.legalNumber,
      name: value.name,
      phone: value.phone,
      preferred_locales: value.preferredLocales,
      shipping_address:
        value.shippingAddress != null
          ? ShippingAddressSerializer.serialize(value.shippingAddress)
          : value.shippingAddress,
      vat_number: value.vatNumber,
    };
  },
};
