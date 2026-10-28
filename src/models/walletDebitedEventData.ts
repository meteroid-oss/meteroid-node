// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeInteger,
  decodeList,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type Actor, ActorSerializer } from "./actor.js";
import { type CreditAppliesTo, CreditAppliesToSerializer } from "./creditAppliesTo.js";
import { type CreditGrantId, CreditGrantIdSerializer } from "./creditGrantId.js";
import { type CreditNoteId, CreditNoteIdSerializer } from "./creditNoteId.js";
import { type CustomerId, CustomerIdSerializer } from "./customerId.js";
import { type InvoiceId, InvoiceIdSerializer } from "./invoiceId.js";
import { type LedgerEntryId, LedgerEntryIdSerializer } from "./ledgerEntryId.js";
/** Credit left a customer's wallet. */
export interface WalletDebitedEventData {
  actor?: Actor | null | undefined;
  /** In minor units of `currency` or `credit_unit`. */
  amount: number;
  /** The products whose charges the grant pays; empty when it pays every product. */
  applicableProductIds: string[];
  /** What the grant pays: ALL any charge, USAGE only usage charges. */
  appliesTo: CreditAppliesTo;
  /** The grant the credit left. */
  creditGrantId: CreditGrantId;
  creditNoteId?: CreditNoteId | null | undefined;
  /** The credit unit (its code) the amounts are in; absent for a currency. */
  creditUnit?: string | null | undefined;
  /** Decimal places of `credit_unit`: amounts are integers of 10^-precision credit. */
  creditUnitPrecision?: number | null | undefined;
  /** Absent when the amounts are in a credit unit. */
  currency?: string | null | undefined;
  customerId: CustomerId;
  invoiceId?: InvoiceId | null | undefined;
  /** The credit ledger entry recording the movement. */
  ledgerEntryId: LedgerEntryId;
  /** Why the credit moved, as shown on the ledger. */
  reason: string;
  /**
   * The subscription the grant belongs to: it pays only that subscription's charges. Null when
   * it pays any of the customer's subscriptions.
   */
  subscriptionId?: string | null | undefined;
}

/** Converts `WalletDebitedEventData` values from (`parse`) and to (`serialize`) their JSON form. */
export const WalletDebitedEventDataSerializer = {
  parse(json: any, path = "$"): WalletDebitedEventData {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "actor",
        "amount",
        "applicable_product_ids",
        "applies_to",
        "credit_grant_id",
        "credit_note_id",
        "credit_unit",
        "credit_unit_precision",
        "currency",
        "customer_id",
        "invoice_id",
        "ledger_entry_id",
        "reason",
        "subscription_id",
      ]),
      actor:
        json["actor"] != null
          ? ActorSerializer.parse(json["actor"], decodePath(path, "actor"))
          : json["actor"],
      amount: decodeInteger(json["amount"], path, "amount"),
      applicableProductIds: decodeList(
        json["applicable_product_ids"],
        path,
        "applicable_product_ids",
        (item: any, p: string, i: number) => decodeString(item, p, i)
      ),
      appliesTo: CreditAppliesToSerializer.parse(
        json["applies_to"],
        decodePath(path, "applies_to")
      ),
      creditGrantId: CreditGrantIdSerializer.parse(
        json["credit_grant_id"],
        decodePath(path, "credit_grant_id")
      ),
      creditNoteId:
        json["credit_note_id"] != null
          ? CreditNoteIdSerializer.parse(
              json["credit_note_id"],
              decodePath(path, "credit_note_id")
            )
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
          ? decodeString(json["currency"], path, "currency")
          : json["currency"],
      customerId: CustomerIdSerializer.parse(
        json["customer_id"],
        decodePath(path, "customer_id")
      ),
      invoiceId:
        json["invoice_id"] != null
          ? InvoiceIdSerializer.parse(json["invoice_id"], decodePath(path, "invoice_id"))
          : json["invoice_id"],
      ledgerEntryId: LedgerEntryIdSerializer.parse(
        json["ledger_entry_id"],
        decodePath(path, "ledger_entry_id")
      ),
      reason: decodeString(json["reason"], path, "reason"),
      subscriptionId:
        json["subscription_id"] != null
          ? decodeString(json["subscription_id"], path, "subscription_id")
          : json["subscription_id"],
    };
  },

  serialize(value: WalletDebitedEventData): any {
    return {
      ...extraProperties(value, [
        "actor",
        "amount",
        "applicableProductIds",
        "appliesTo",
        "creditGrantId",
        "creditNoteId",
        "creditUnit",
        "creditUnitPrecision",
        "currency",
        "customerId",
        "invoiceId",
        "ledgerEntryId",
        "reason",
        "subscriptionId",
      ]),
      actor: value.actor != null ? ActorSerializer.serialize(value.actor) : value.actor,
      amount: value.amount,
      applicable_product_ids: value.applicableProductIds,
      applies_to: CreditAppliesToSerializer.serialize(value.appliesTo),
      credit_grant_id: CreditGrantIdSerializer.serialize(value.creditGrantId),
      credit_note_id:
        value.creditNoteId != null
          ? CreditNoteIdSerializer.serialize(value.creditNoteId)
          : value.creditNoteId,
      credit_unit: value.creditUnit,
      credit_unit_precision: value.creditUnitPrecision,
      currency: value.currency,
      customer_id: CustomerIdSerializer.serialize(value.customerId),
      invoice_id:
        value.invoiceId != null
          ? InvoiceIdSerializer.serialize(value.invoiceId)
          : value.invoiceId,
      ledger_entry_id: LedgerEntryIdSerializer.serialize(value.ledgerEntryId),
      reason: value.reason,
      subscription_id: value.subscriptionId,
    };
  },
};
