// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeDateTime,
  decodeInteger,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type CreditAppliesTo, CreditAppliesToSerializer } from "./creditAppliesTo.js";
import { type CreditCost, CreditCostSerializer } from "./creditCost.js";
import { type Currency, CurrencySerializer } from "./currency.js";
import { type LedgerEntryType, LedgerEntryTypeSerializer } from "./ledgerEntryType.js";
/** One movement of a customer's credit. */
export interface LedgerEntry {
  /** Signed change to the credit on account, in minor units. */
  amount: number;
  /** What the moved credit's grant pays: ALL any charge, USAGE only usage charges. */
  appliesTo: CreditAppliesTo;
  /** The credit on account after this entry, whatever it applies to. */
  balanceAfter: number;
  cost?: CreditCost | null | undefined;
  /** The grant the credit moved in or out of. */
  creditGrantId: string;
  /** The credit note that gave the credit back or took it back. */
  creditNoteId?: string | null | undefined;
  /** The credit unit (its code) the amounts are in; absent for a currency. */
  creditUnit?: string | null | undefined;
  /** Decimal places of `credit_unit`: amounts are integers of 10^-precision credit. */
  creditUnitPrecision?: number | null | undefined;
  currency?: Currency | null | undefined;
  /** When the movement took effect; the ledger is ordered by it. */
  effectiveAt: Date;
  /** The entry's id (`wle_…`). */
  id: string;
  /** The invoice the credit was applied to, bought on, or given back by. */
  invoiceId?: string | null | undefined;
  /** Why the credit moved, as shown on the ledger. */
  reason: string;
  /** When the movement was recorded. */
  recordedAt: Date;
  /** Your own reference, e.g. a contract or support ticket. */
  reference?: string | null | undefined;
  /**
   * Position within the currency's ledger in the order the movements took effect, from 1. A
   * movement recorded later with an earlier date shifts the positions after it: identify an
   * entry by its `id`.
   */
  sequence: number;
  /**
   * The subscription the moved credit's grant belongs to; null when it pays any of the
   * customer's subscriptions.
   */
  subscriptionId?: string | null | undefined;
  /** What moved the credit. */
  type: LedgerEntryType;
}

/** Converts `LedgerEntry` values from (`parse`) and to (`serialize`) their JSON form. */
export const LedgerEntrySerializer = {
  parse(json: any, path = "$"): LedgerEntry {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "amount",
        "applies_to",
        "balance_after",
        "cost",
        "credit_grant_id",
        "credit_note_id",
        "credit_unit",
        "credit_unit_precision",
        "currency",
        "effective_at",
        "id",
        "invoice_id",
        "reason",
        "recorded_at",
        "reference",
        "sequence",
        "subscription_id",
        "type",
      ]),
      amount: decodeInteger(json["amount"], path, "amount"),
      appliesTo: CreditAppliesToSerializer.parse(
        json["applies_to"],
        decodePath(path, "applies_to")
      ),
      balanceAfter: decodeInteger(json["balance_after"], path, "balance_after"),
      cost:
        json["cost"] != null
          ? CreditCostSerializer.parse(json["cost"], decodePath(path, "cost"))
          : json["cost"],
      creditGrantId: decodeString(json["credit_grant_id"], path, "credit_grant_id"),
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
      id: decodeString(json["id"], path, "id"),
      invoiceId:
        json["invoice_id"] != null
          ? decodeString(json["invoice_id"], path, "invoice_id")
          : json["invoice_id"],
      reason: decodeString(json["reason"], path, "reason"),
      recordedAt: decodeDateTime(json["recorded_at"], path, "recorded_at"),
      reference:
        json["reference"] != null
          ? decodeString(json["reference"], path, "reference")
          : json["reference"],
      sequence: decodeInteger(json["sequence"], path, "sequence"),
      subscriptionId:
        json["subscription_id"] != null
          ? decodeString(json["subscription_id"], path, "subscription_id")
          : json["subscription_id"],
      type: LedgerEntryTypeSerializer.parse(json["type"], decodePath(path, "type")),
    };
  },

  serialize(value: LedgerEntry): any {
    return {
      ...extraProperties(value, [
        "amount",
        "appliesTo",
        "balanceAfter",
        "cost",
        "creditGrantId",
        "creditNoteId",
        "creditUnit",
        "creditUnitPrecision",
        "currency",
        "effectiveAt",
        "id",
        "invoiceId",
        "reason",
        "recordedAt",
        "reference",
        "sequence",
        "subscriptionId",
        "type",
      ]),
      amount: value.amount,
      applies_to: CreditAppliesToSerializer.serialize(value.appliesTo),
      balance_after: value.balanceAfter,
      cost: value.cost != null ? CreditCostSerializer.serialize(value.cost) : value.cost,
      credit_grant_id: value.creditGrantId,
      credit_note_id: value.creditNoteId,
      credit_unit: value.creditUnit,
      credit_unit_precision: value.creditUnitPrecision,
      currency:
        value.currency != null
          ? CurrencySerializer.serialize(value.currency)
          : value.currency,
      effective_at: value.effectiveAt,
      id: value.id,
      invoice_id: value.invoiceId,
      reason: value.reason,
      recorded_at: value.recordedAt,
      reference: value.reference,
      sequence: value.sequence,
      subscription_id: value.subscriptionId,
      type: LedgerEntryTypeSerializer.serialize(value.type),
    };
  },
};
