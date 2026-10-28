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
import { type CreditAppliesTo, CreditAppliesToSerializer } from "./creditAppliesTo.js";
import {
  type CreditCostRequest,
  CreditCostRequestSerializer,
} from "./creditCostRequest.js";
import { type CreditGrantType, CreditGrantTypeSerializer } from "./creditGrantType.js";
import { type Currency, CurrencySerializer } from "./currency.js";
import { type ProductId, ProductIdSerializer } from "./productId.js";
/** Credit granted without charging or invoicing. */
export interface CreateCreditGrantRequest {
  /**
   * Credit granted, in minor units of `currency`, or of `credit_unit` when set (e.g. 500000
   * is 5,000.00 credits of a unit with precision 2). Positive.
   */
  amount: number;
  /**
   * Restricts the credit to charges of these products; absent applies to every product.
   * Combined with `applies_to`. Not available for credit units.
   */
  applicableProductIds?: ProductId[] | null | undefined;
  /** ALL pays any charge on an invoice; USAGE only usage charges. */
  appliesTo?: CreditAppliesTo | undefined;
  cost?: CreditCostRequest | null | undefined;
  /**
   * Grants in this credit unit (its code) instead of a currency; excludes `currency`. Credit in
   * a credit unit pays the usage priced in that unit, so `applies_to` must stay ALL.
   */
  creditUnit?: string | null | undefined;
  currency?: Currency | null | undefined;
  /** When unspent credit lapses; absent never expires. */
  expiresAt?: Date | null | undefined;
  /**
   * Lower values are drawn first among grants of the same type that pay the same charges;
   * defaults to 100.
   */
  priority?: number | null | undefined;
  /** Shown on the credit ledger. */
  reason?: string | null | undefined;
  /**
   * Your own reference, e.g. a contract or support ticket. Required for PAID credit that cost
   * more than zero when the customer's invoicing entity is in France: the number of the invoice
   * or receipt for the payment, as French law requires a supporting document for every
   * accounting entry. Refused with 400 when missing.
   */
  reference?: string | null | undefined;
  /**
   * The customer's subscription (`sub_…`) the credit belongs to: it pays only that
   * subscription's charges and lapses when the subscription ends. It must not have ended,
   * and its currency must be the grant's. Absent pays any of the customer's subscriptions.
   */
  subscriptionId?: string | null | undefined;
  /**
   * PROMOTIONAL gives credit for free (a goodwill or marketing grant). PAID records credit
   * the customer paid for outside of Meteroid: nothing is charged or invoiced, and the grant
   * is shown as "Paid outside Meteroid". Usage paid with PAID currency credit is taxed on the
   * invoice that bills it, so do not charge tax on the external sale of currency credit, or
   * the customer is taxed twice. Credit in a credit unit is the exception: its usage is billed
   * in credits, untaxed, so tax its sale as you would any other. Use a top-up to sell credit
   * through Meteroid.
   */
  type: CreditGrantType;
}

/** Converts `CreateCreditGrantRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreateCreditGrantRequestSerializer = {
  parse(json: any, path = "$"): CreateCreditGrantRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "amount",
        "applicable_product_ids",
        "applies_to",
        "cost",
        "credit_unit",
        "currency",
        "expires_at",
        "priority",
        "reason",
        "reference",
        "subscription_id",
        "type",
      ]),
      amount: decodeInteger(json["amount"], path, "amount"),
      applicableProductIds:
        json["applicable_product_ids"] != null
          ? decodeList(
              json["applicable_product_ids"],
              path,
              "applicable_product_ids",
              (item: any, p: string, i: number) =>
                ProductIdSerializer.parse(item, decodePath(p, i))
            )
          : json["applicable_product_ids"],
      appliesTo:
        json["applies_to"] != null
          ? CreditAppliesToSerializer.parse(
              json["applies_to"],
              decodePath(path, "applies_to")
            )
          : undefined,
      cost:
        json["cost"] != null
          ? CreditCostRequestSerializer.parse(json["cost"], decodePath(path, "cost"))
          : json["cost"],
      creditUnit:
        json["credit_unit"] != null
          ? decodeString(json["credit_unit"], path, "credit_unit")
          : json["credit_unit"],
      currency:
        json["currency"] != null
          ? CurrencySerializer.parse(json["currency"], decodePath(path, "currency"))
          : json["currency"],
      expiresAt:
        json["expires_at"] != null
          ? decodeDateTime(json["expires_at"], path, "expires_at")
          : json["expires_at"],
      priority:
        json["priority"] != null
          ? decodeInteger(json["priority"], path, "priority")
          : json["priority"],
      reason:
        json["reason"] != null
          ? decodeString(json["reason"], path, "reason")
          : json["reason"],
      reference:
        json["reference"] != null
          ? decodeString(json["reference"], path, "reference")
          : json["reference"],
      subscriptionId:
        json["subscription_id"] != null
          ? decodeString(json["subscription_id"], path, "subscription_id")
          : json["subscription_id"],
      type: CreditGrantTypeSerializer.parse(json["type"], decodePath(path, "type")),
    };
  },

  serialize(value: CreateCreditGrantRequest): any {
    return {
      ...extraProperties(value, [
        "amount",
        "applicableProductIds",
        "appliesTo",
        "cost",
        "creditUnit",
        "currency",
        "expiresAt",
        "priority",
        "reason",
        "reference",
        "subscriptionId",
        "type",
      ]),
      amount: value.amount,
      applicable_product_ids:
        value.applicableProductIds != null
          ? value.applicableProductIds.map((item: any) =>
              ProductIdSerializer.serialize(item)
            )
          : value.applicableProductIds,
      applies_to:
        value.appliesTo != null
          ? CreditAppliesToSerializer.serialize(value.appliesTo)
          : undefined,
      cost:
        value.cost != null
          ? CreditCostRequestSerializer.serialize(value.cost)
          : value.cost,
      credit_unit: value.creditUnit,
      currency:
        value.currency != null
          ? CurrencySerializer.serialize(value.currency)
          : value.currency,
      expires_at: value.expiresAt,
      priority: value.priority,
      reason: value.reason,
      reference: value.reference,
      subscription_id: value.subscriptionId,
      type: CreditGrantTypeSerializer.serialize(value.type),
    };
  },
};
