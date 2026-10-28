// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodePath, decodeString } from "../decode.js";
import { type CustomerId, CustomerIdSerializer } from "./customerId.js";
/**
 * A wallet's balance (credit that pays any charge of any of the customer's subscriptions, net of
 * unbilled usage) came back above zero.
 */
export interface WalletRecoveredEventData {
  /**
   * The balance (credit on account that pays any charge of any of the customer's subscriptions,
   * net of unbilled usage) now that it is back above zero, in
   * minor units.
   */
  balance: number;
  /** The credit unit (its code) the amounts are in; absent for a currency. */
  creditUnit?: string | null | undefined;
  /** Decimal places of `credit_unit`: amounts are integers of 10^-precision credit. */
  creditUnitPrecision?: number | null | undefined;
  /** Absent when the amounts are in a credit unit. */
  currency?: string | null | undefined;
  customerId: CustomerId;
}

/** Converts `WalletRecoveredEventData` values from (`parse`) and to (`serialize`) their JSON form. */
export const WalletRecoveredEventDataSerializer = {
  parse(json: any, path = "$"): WalletRecoveredEventData {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "balance",
        "credit_unit",
        "credit_unit_precision",
        "currency",
        "customer_id",
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
    };
  },

  serialize(value: WalletRecoveredEventData): any {
    return {
      ...extraProperties(value, [
        "balance",
        "creditUnit",
        "creditUnitPrecision",
        "currency",
        "customerId",
      ]),
      balance: value.balance,
      credit_unit: value.creditUnit,
      credit_unit_precision: value.creditUnitPrecision,
      currency: value.currency,
      customer_id: CustomerIdSerializer.serialize(value.customerId),
    };
  },
};
