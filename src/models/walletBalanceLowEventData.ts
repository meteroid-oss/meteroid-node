// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodePath, decodeString } from "../decode.js";
import { type CustomerId, CustomerIdSerializer } from "./customerId.js";
/** A wallet's balance fell below one of its low-balance thresholds. */
export interface WalletBalanceLowEventData {
  /**
   * The balance when it fell below `threshold`, in minor units: the wallet's `balance`, all
   * its credit on account net of the unbilled usage it pays, including credit that belongs to
   * a subscription or is limited to usage or products. Sent once per crossing, for the lowest
   * threshold crossed; it re-arms once the balance is back at the threshold. Because that
   * credit counts here and not in `wallet.depleted`, a wallet can be depleted without this
   * event firing.
   */
  balance: number;
  /** The credit unit (its code) the amounts are in; absent for a currency. */
  creditUnit?: string | null | undefined;
  /** Decimal places of `credit_unit`: amounts are integers of 10^-precision credit. */
  creditUnitPrecision?: number | null | undefined;
  /** Absent when the amounts are in a credit unit. */
  currency?: string | null | undefined;
  customerId: CustomerId;
  /**
   * The part of `balance` that pays any charge of any subscription: what automatic top-ups
   * refill and `wallet.depleted` watches. Absent on events recorded before it was reported.
   */
  sharedBalance?: number | null | undefined;
  /** The low-balance threshold crossed, in the same minor units. */
  threshold: number;
}

/** Converts `WalletBalanceLowEventData` values from (`parse`) and to (`serialize`) their JSON form. */
export const WalletBalanceLowEventDataSerializer = {
  parse(json: any, path = "$"): WalletBalanceLowEventData {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "balance",
        "credit_unit",
        "credit_unit_precision",
        "currency",
        "customer_id",
        "shared_balance",
        "threshold",
      ]),
      balance: decodeInteger(json["balance"], path, "balance"),
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
      sharedBalance:
        json["shared_balance"] != null
          ? decodeInteger(json["shared_balance"], path, "shared_balance")
          : json["shared_balance"],
      threshold: decodeInteger(json["threshold"], path, "threshold"),
    };
  },

  serialize(value: WalletBalanceLowEventData): any {
    return {
      ...extraProperties(value, [
        "balance",
        "creditUnit",
        "creditUnitPrecision",
        "currency",
        "customerId",
        "sharedBalance",
        "threshold",
      ]),
      balance: value.balance,
      credit_unit: value.creditUnit,
      credit_unit_precision: value.creditUnitPrecision,
      currency: value.currency,
      customer_id: CustomerIdSerializer.serialize(value.customerId),
      shared_balance: value.sharedBalance,
      threshold: value.threshold,
    };
  },
};
