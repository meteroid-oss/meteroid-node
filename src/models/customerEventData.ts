// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath, decodeString } from "../decode.js";
import { type CustomerId, CustomerIdSerializer } from "./customerId.js";

export interface CustomerEventData {
  alias?: string | null | undefined;
  billingEmail?: string | null | undefined;
  currency: string;
  /** User-defined custom property values, keyed by definition key. */
  customProperties: unknown;
  customerId: CustomerId;
  invoicingEmails: string[];
  name: string;
  phone?: string | null | undefined;
}

/** Converts `CustomerEventData` values from (`parse`) and to (`serialize`) their JSON form. */
export const CustomerEventDataSerializer = {
  parse(json: any, path = "$"): CustomerEventData {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "alias",
        "billing_email",
        "currency",
        "custom_properties",
        "customer_id",
        "invoicing_emails",
        "name",
        "phone",
      ]),
      alias:
        json["alias"] != null
          ? decodeString(json["alias"], path, "alias")
          : json["alias"],
      billingEmail:
        json["billing_email"] != null
          ? decodeString(json["billing_email"], path, "billing_email")
          : json["billing_email"],
      currency: decodeString(json["currency"], path, "currency"),
      customProperties: json["custom_properties"],
      customerId: CustomerIdSerializer.parse(
        json["customer_id"],
        decodePath(path, "customer_id")
      ),
      invoicingEmails: decodeList(
        json["invoicing_emails"],
        path,
        "invoicing_emails",
        (item: any, p: string, i: number) => decodeString(item, p, i)
      ),
      name: decodeString(json["name"], path, "name"),
      phone:
        json["phone"] != null
          ? decodeString(json["phone"], path, "phone")
          : json["phone"],
    };
  },

  serialize(value: CustomerEventData): any {
    return {
      ...extraProperties(value, [
        "alias",
        "billingEmail",
        "currency",
        "customProperties",
        "customerId",
        "invoicingEmails",
        "name",
        "phone",
      ]),
      alias: value.alias,
      billing_email: value.billingEmail,
      currency: value.currency,
      custom_properties: value.customProperties,
      customer_id: CustomerIdSerializer.serialize(value.customerId),
      invoicing_emails: value.invoicingEmails,
      name: value.name,
      phone: value.phone,
    };
  },
};
