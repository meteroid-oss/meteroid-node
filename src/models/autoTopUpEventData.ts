// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeDateTime,
  decodeInteger,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type CustomerId, CustomerIdSerializer } from "./customerId.js";
/** An automatic top-up charge failed, or the automatic top-up was suspended. */
export interface AutoTopUpEventData {
  /**
   * The charge in minor units of `currency`: the credit it would have added, or for a credit
   * unit wallet the price of those credits in the customer's currency. When the credits could
   * not be priced (no selling price), the credits themselves, with `currency` the unit code. On
   * a suspension after a top-up payment was refunded or disputed: that payment's top-up.
   */
  amount: number;
  /** Failed charges in a row, this one included. */
  consecutiveFailures: number;
  /** The currency charged (ISO 4217), or the credit unit code when the credits had no price. */
  currency: string;
  customerId: CustomerId;
  /** May carry payment provider detail. */
  error: string;
  /** Set on `wallet.auto_top_up_suspended`: when it was suspended. */
  suspendedAt?: Date | null | undefined;
}

/** Converts `AutoTopUpEventData` values from (`parse`) and to (`serialize`) their JSON form. */
export const AutoTopUpEventDataSerializer = {
  parse(json: any, path = "$"): AutoTopUpEventData {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "amount",
        "consecutive_failures",
        "currency",
        "customer_id",
        "error",
        "suspended_at",
      ]),
      amount: decodeInteger(json["amount"], path, "amount"),
      consecutiveFailures: decodeInteger(
        json["consecutive_failures"],
        path,
        "consecutive_failures"
      ),
      currency: decodeString(json["currency"], path, "currency"),
      customerId: CustomerIdSerializer.parse(
        json["customer_id"],
        decodePath(path, "customer_id")
      ),
      error: decodeString(json["error"], path, "error"),
      suspendedAt:
        json["suspended_at"] != null
          ? decodeDateTime(json["suspended_at"], path, "suspended_at")
          : json["suspended_at"],
    };
  },

  serialize(value: AutoTopUpEventData): any {
    return {
      ...extraProperties(value, [
        "amount",
        "consecutiveFailures",
        "currency",
        "customerId",
        "error",
        "suspendedAt",
      ]),
      amount: value.amount,
      consecutive_failures: value.consecutiveFailures,
      currency: value.currency,
      customer_id: CustomerIdSerializer.serialize(value.customerId),
      error: value.error,
      suspended_at: value.suspendedAt,
    };
  },
};
