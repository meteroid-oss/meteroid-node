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
import { type CreditGrantId, CreditGrantIdSerializer } from "./creditGrantId.js";
import {
  type CreditGrantLapseReason,
  CreditGrantLapseReasonSerializer,
} from "./creditGrantLapseReason.js";
import { type CustomerId, CustomerIdSerializer } from "./customerId.js";
import { type LedgerEntryId, LedgerEntryIdSerializer } from "./ledgerEntryId.js";
/**
 * A credit grant expired, or the subscription it belongs to ended, with credit left, which
 * lapsed.
 */
export interface CreditGrantExpiredEventData {
  /** The products whose charges the grant pays; empty when it pays every product. */
  applicableProductIds: string[];
  /** What the grant pays: ALL any charge, USAGE only usage charges. */
  appliesTo: CreditAppliesTo;
  /** The grant that expired. */
  creditGrantId: CreditGrantId;
  /** The credit unit (its code) the amounts are in; absent for a currency. */
  creditUnit?: string | null | undefined;
  /** Decimal places of `credit_unit`: amounts are integers of 10^-precision credit. */
  creditUnitPrecision?: number | null | undefined;
  /** Absent when the amounts are in a credit unit. */
  currency?: string | null | undefined;
  customerId: CustomerId;
  /** Unspent credit that lapsed, in minor units of `currency` or `credit_unit`. */
  expiredAmount: number;
  /** When the grant expired, or its subscription ended. */
  expiredAt: Date;
  /** The credit ledger entry recording the expiry. */
  ledgerEntryId: LedgerEntryId;
  /**
   * SUBSCRIPTION_ENDED when the subscription the grant belongs to ended at or before the grant's
   * expiry, EXPIRED otherwise.
   */
  reason: CreditGrantLapseReason;
  /**
   * The subscription the grant belongs to: it pays only that subscription's charges. Null when
   * it pays any of the customer's subscriptions.
   */
  subscriptionId?: string | null | undefined;
}

/** Converts `CreditGrantExpiredEventData` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditGrantExpiredEventDataSerializer = {
  parse(json: any, path = "$"): CreditGrantExpiredEventData {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "applicable_product_ids",
        "applies_to",
        "credit_grant_id",
        "credit_unit",
        "credit_unit_precision",
        "currency",
        "customer_id",
        "expired_amount",
        "expired_at",
        "ledger_entry_id",
        "reason",
        "subscription_id",
      ]),
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
      expiredAmount: decodeInteger(json["expired_amount"], path, "expired_amount"),
      expiredAt: decodeDateTime(json["expired_at"], path, "expired_at"),
      ledgerEntryId: LedgerEntryIdSerializer.parse(
        json["ledger_entry_id"],
        decodePath(path, "ledger_entry_id")
      ),
      reason: CreditGrantLapseReasonSerializer.parse(
        json["reason"],
        decodePath(path, "reason")
      ),
      subscriptionId:
        json["subscription_id"] != null
          ? decodeString(json["subscription_id"], path, "subscription_id")
          : json["subscription_id"],
    };
  },

  serialize(value: CreditGrantExpiredEventData): any {
    return {
      ...extraProperties(value, [
        "applicableProductIds",
        "appliesTo",
        "creditGrantId",
        "creditUnit",
        "creditUnitPrecision",
        "currency",
        "customerId",
        "expiredAmount",
        "expiredAt",
        "ledgerEntryId",
        "reason",
        "subscriptionId",
      ]),
      applicable_product_ids: value.applicableProductIds,
      applies_to: CreditAppliesToSerializer.serialize(value.appliesTo),
      credit_grant_id: CreditGrantIdSerializer.serialize(value.creditGrantId),
      credit_unit: value.creditUnit,
      credit_unit_precision: value.creditUnitPrecision,
      currency: value.currency,
      customer_id: CustomerIdSerializer.serialize(value.customerId),
      expired_amount: value.expiredAmount,
      expired_at: value.expiredAt,
      ledger_entry_id: LedgerEntryIdSerializer.serialize(value.ledgerEntryId),
      reason: CreditGrantLapseReasonSerializer.serialize(value.reason),
      subscription_id: value.subscriptionId,
    };
  },
};
