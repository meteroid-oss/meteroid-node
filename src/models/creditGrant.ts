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
import { type CreditCost, CreditCostSerializer } from "./creditCost.js";
import { type CreditGrantKind, CreditGrantKindSerializer } from "./creditGrantKind.js";
import {
  type CreditGrantSource,
  CreditGrantSourceSerializer,
} from "./creditGrantSource.js";
import {
  type CreditGrantStatus,
  CreditGrantStatusSerializer,
} from "./creditGrantStatus.js";
import { type CreditGrantType, CreditGrantTypeSerializer } from "./creditGrantType.js";
import { type Currency, CurrencySerializer } from "./currency.js";
import { type ProductId, ProductIdSerializer } from "./productId.js";
/**
 * A lot of credit given to or bought by a customer. An invoice applies promotional currency
 * credit before tax and paid credit after it. Within each, it draws the grants that belong to
 * the invoiced subscription first, then grants restricted to products (the fewest products
 * first), then usage-only grants, then the others; then by lowest `priority`, then the soonest
 * to lapse.
 */
export interface CreditGrant {
  /** Amount granted, in minor units of `currency` or `credit_unit`. */
  amount: number;
  /**
   * The products whose charges the credit pays, combined with `applies_to`; empty when it
   * applies to every product.
   */
  applicableProductIds: ProductId[];
  /** ALL pays any charge on an invoice; USAGE only usage charges. */
  appliesTo: CreditAppliesTo;
  /**
   * Only on the response that created a PAID currency grant whose `cost` was below its
   * amount: the PROMOTIONAL "Bonus credit" grant created beside it for the difference, with
   * the same expiry, scope and priority.
   */
  bonusGrantId?: string | null | undefined;
  cost?: CreditCost | null | undefined;
  /**
   * `cost` per one major unit of credit, in major units of the cost currency (e.g. "0.008"),
   * rounded to 12 decimal places, for display only.
   */
  costBasis?: string | null | undefined;
  /** When the grant was recorded. */
  createdAt: Date;
  /** The credit note that gave the credit back. */
  creditNoteId?: string | null | undefined;
  /** The credit unit (its code) the amounts are in; absent for a currency. */
  creditUnit?: string | null | undefined;
  /** Decimal places of `credit_unit`: amounts are integers of 10^-precision credit. */
  creditUnitPrecision?: number | null | undefined;
  currency?: Currency | null | undefined;
  /** When the credit became spendable. */
  effectiveAt: Date;
  /**
   * When the subscription the grant belongs to ended, if it ended. Unspent credit lapses then
   * (status EXPIRED), even before `expires_at`.
   */
  endedAt?: Date | null | undefined;
  /** Lost to expiry; present only on an expired grant. */
  expiredAmount?: number | null | undefined;
  /** When unspent credit lapses; absent never expires. */
  expiresAt?: Date | null | undefined;
  /** The grant's id (`cgr_…`). */
  id: string;
  /** The invoice that sold the credit, or whose void or negative total gave it back. */
  invoiceId?: string | null | undefined;
  /** The group the grant is shown in: INCLUDED, PREPAID, BONUS or ACCOUNT_BALANCE. */
  kind: CreditGrantKind;
  /**
   * The group's name as Meteroid shows it: "Included with <plan>", "Purchased credit", "Free
   * credit" or "Account balance".
   */
  kindLabel: string;
  /**
   * Lower values are drawn first among grants of the same type that pay the same charges; 100
   * by default.
   */
  priority: number;
  /** Shown on the credit ledger. */
  reason: string;
  /** Your own reference, e.g. a contract or support ticket. */
  reference?: string | null | undefined;
  /** Not spent yet, in the same minor units. */
  remaining: number;
  /** Where the credit came from. */
  source: CreditGrantSource;
  /** PENDING until `effective_at`, then ACTIVE, DEPLETED once spent, or EXPIRED. */
  status: CreditGrantStatus;
  /**
   * The subscription the grant belongs to (`sub_…`): it pays only that subscription's
   * charges, and lapses when the subscription ends. Null when it pays any of the customer's
   * subscriptions.
   */
  subscriptionId?: string | null | undefined;
  /** PAID or PROMOTIONAL: whether it applies after or before tax. */
  type: CreditGrantType;
}

/** Converts `CreditGrant` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditGrantSerializer = {
  parse(json: any, path = "$"): CreditGrant {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "amount",
        "applicable_product_ids",
        "applies_to",
        "bonus_grant_id",
        "cost",
        "cost_basis",
        "created_at",
        "credit_note_id",
        "credit_unit",
        "credit_unit_precision",
        "currency",
        "effective_at",
        "ended_at",
        "expired_amount",
        "expires_at",
        "id",
        "invoice_id",
        "kind",
        "kind_label",
        "priority",
        "reason",
        "reference",
        "remaining",
        "source",
        "status",
        "subscription_id",
        "type",
      ]),
      amount: decodeInteger(json["amount"], path, "amount"),
      applicableProductIds: decodeList(
        json["applicable_product_ids"],
        path,
        "applicable_product_ids",
        (item: any, p: string, i: number) =>
          ProductIdSerializer.parse(item, decodePath(p, i))
      ),
      appliesTo: CreditAppliesToSerializer.parse(
        json["applies_to"],
        decodePath(path, "applies_to")
      ),
      bonusGrantId:
        json["bonus_grant_id"] != null
          ? decodeString(json["bonus_grant_id"], path, "bonus_grant_id")
          : json["bonus_grant_id"],
      cost:
        json["cost"] != null
          ? CreditCostSerializer.parse(json["cost"], decodePath(path, "cost"))
          : json["cost"],
      costBasis:
        json["cost_basis"] != null
          ? decodeString(json["cost_basis"], path, "cost_basis")
          : json["cost_basis"],
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      creditNoteId:
        json["credit_note_id"] != null
          ? decodeString(json["credit_note_id"], path, "credit_note_id")
          : json["credit_note_id"],
      creditUnit:
        json["credit_unit"] != null
          ? decodeString(json["credit_unit"], path, "credit_unit")
          : json["credit_unit"],
      creditUnitPrecision:
        json["credit_unit_precision"] != null
          ? decodeInteger(json["credit_unit_precision"], path, "credit_unit_precision")
          : json["credit_unit_precision"],
      currency:
        json["currency"] != null
          ? CurrencySerializer.parse(json["currency"], decodePath(path, "currency"))
          : json["currency"],
      effectiveAt: decodeDateTime(json["effective_at"], path, "effective_at"),
      endedAt:
        json["ended_at"] != null
          ? decodeDateTime(json["ended_at"], path, "ended_at")
          : json["ended_at"],
      expiredAmount:
        json["expired_amount"] != null
          ? decodeInteger(json["expired_amount"], path, "expired_amount")
          : json["expired_amount"],
      expiresAt:
        json["expires_at"] != null
          ? decodeDateTime(json["expires_at"], path, "expires_at")
          : json["expires_at"],
      id: decodeString(json["id"], path, "id"),
      invoiceId:
        json["invoice_id"] != null
          ? decodeString(json["invoice_id"], path, "invoice_id")
          : json["invoice_id"],
      kind: CreditGrantKindSerializer.parse(json["kind"], decodePath(path, "kind")),
      kindLabel: decodeString(json["kind_label"], path, "kind_label"),
      priority: decodeInteger(json["priority"], path, "priority"),
      reason: decodeString(json["reason"], path, "reason"),
      reference:
        json["reference"] != null
          ? decodeString(json["reference"], path, "reference")
          : json["reference"],
      remaining: decodeInteger(json["remaining"], path, "remaining"),
      source: CreditGrantSourceSerializer.parse(
        json["source"],
        decodePath(path, "source")
      ),
      status: CreditGrantStatusSerializer.parse(
        json["status"],
        decodePath(path, "status")
      ),
      subscriptionId:
        json["subscription_id"] != null
          ? decodeString(json["subscription_id"], path, "subscription_id")
          : json["subscription_id"],
      type: CreditGrantTypeSerializer.parse(json["type"], decodePath(path, "type")),
    };
  },

  serialize(value: CreditGrant): any {
    return {
      ...extraProperties(value, [
        "amount",
        "applicableProductIds",
        "appliesTo",
        "bonusGrantId",
        "cost",
        "costBasis",
        "createdAt",
        "creditNoteId",
        "creditUnit",
        "creditUnitPrecision",
        "currency",
        "effectiveAt",
        "endedAt",
        "expiredAmount",
        "expiresAt",
        "id",
        "invoiceId",
        "kind",
        "kindLabel",
        "priority",
        "reason",
        "reference",
        "remaining",
        "source",
        "status",
        "subscriptionId",
        "type",
      ]),
      amount: value.amount,
      applicable_product_ids: value.applicableProductIds.map((item: any) =>
        ProductIdSerializer.serialize(item)
      ),
      applies_to: CreditAppliesToSerializer.serialize(value.appliesTo),
      bonus_grant_id: value.bonusGrantId,
      cost: value.cost != null ? CreditCostSerializer.serialize(value.cost) : value.cost,
      cost_basis: value.costBasis,
      created_at: value.createdAt,
      credit_note_id: value.creditNoteId,
      credit_unit: value.creditUnit,
      credit_unit_precision: value.creditUnitPrecision,
      currency:
        value.currency != null
          ? CurrencySerializer.serialize(value.currency)
          : value.currency,
      effective_at: value.effectiveAt,
      ended_at: value.endedAt,
      expired_amount: value.expiredAmount,
      expires_at: value.expiresAt,
      id: value.id,
      invoice_id: value.invoiceId,
      kind: CreditGrantKindSerializer.serialize(value.kind),
      kind_label: value.kindLabel,
      priority: value.priority,
      reason: value.reason,
      reference: value.reference,
      remaining: value.remaining,
      source: CreditGrantSourceSerializer.serialize(value.source),
      status: CreditGrantStatusSerializer.serialize(value.status),
      subscription_id: value.subscriptionId,
      type: CreditGrantTypeSerializer.serialize(value.type),
    };
  },
};
