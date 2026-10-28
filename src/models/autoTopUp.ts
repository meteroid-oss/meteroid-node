// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeDateTime,
  decodeInteger,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type AutoTopUpMethod, AutoTopUpMethodSerializer } from "./autoTopUpMethod.js";
import { type AutoTopUpStatus, AutoTopUpStatusSerializer } from "./autoTopUpStatus.js";
/**
 * Automatic top-up of the credit that applies to ALL charges: it charges the customer's payment
 * method when the balance falls below `threshold`.
 */
export interface AutoTopUp {
  /** FIXED only: credit bought each time, in minor units of the wallet. */
  amount?: number | null | undefined;
  /**
   * When an operator attested that the customer agreed to automatic charges on exactly these
   * terms. Absent when the customer confirmed them in their portal, or the terms changed since.
   */
  customerConsentAttestedAt?: Date | null | undefined;
  /**
   * Most charged in a rolling day, tax included. For a credit unit wallet caps are money, in
   * minor units of the customer's currency.
   */
  dailyCap?: number | null | undefined;
  /** Why the last charge failed; may carry payment provider detail. */
  lastError?: string | null | undefined;
  /** The last charge that succeeded. */
  lastSucceededAt?: Date | null | undefined;
  /** Largest single charge, in the same money as `minimum`. */
  maximum?: number | null | undefined;
  /** FIXED buys `amount` each time; TO_TARGET buys back up to `target`. */
  method: AutoTopUpMethod;
  /**
   * Smallest single charge. For a credit unit wallet it is money (the price before tax, in
   * minor units of the customer's currency), like the caps; the threshold, amount and target
   * are credits.
   */
  minimum?: number | null | undefined;
  /** Most charged in a calendar month (UTC), tax included. */
  monthlyCap?: number | null | undefined;
  /** Absent charges the customer's default payment method. */
  paymentMethodId?: string | null | undefined;
  /** ACTIVE, DISABLED (terms kept) or SUSPENDED after repeated failed charges. */
  status: AutoTopUpStatus;
  /** Set while SUSPENDED: since when. */
  suspendedAt?: Date | null | undefined;
  /** TO_TARGET only: the balance a top-up brings the wallet back to, in minor units. */
  target?: number | null | undefined;
  /** Tops up once the balance is at or below this, in minor units of the wallet. */
  threshold: number;
}

/** Converts `AutoTopUp` values from (`parse`) and to (`serialize`) their JSON form. */
export const AutoTopUpSerializer = {
  parse(json: any, path = "$"): AutoTopUp {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "amount",
        "customer_consent_attested_at",
        "daily_cap",
        "last_error",
        "last_succeeded_at",
        "maximum",
        "method",
        "minimum",
        "monthly_cap",
        "payment_method_id",
        "status",
        "suspended_at",
        "target",
        "threshold",
      ]),
      amount:
        json["amount"] != null
          ? decodeInteger(json["amount"], path, "amount")
          : json["amount"],
      customerConsentAttestedAt:
        json["customer_consent_attested_at"] != null
          ? decodeDateTime(
              json["customer_consent_attested_at"],
              path,
              "customer_consent_attested_at"
            )
          : json["customer_consent_attested_at"],
      dailyCap:
        json["daily_cap"] != null
          ? decodeInteger(json["daily_cap"], path, "daily_cap")
          : json["daily_cap"],
      lastError:
        json["last_error"] != null
          ? decodeString(json["last_error"], path, "last_error")
          : json["last_error"],
      lastSucceededAt:
        json["last_succeeded_at"] != null
          ? decodeDateTime(json["last_succeeded_at"], path, "last_succeeded_at")
          : json["last_succeeded_at"],
      maximum:
        json["maximum"] != null
          ? decodeInteger(json["maximum"], path, "maximum")
          : json["maximum"],
      method: AutoTopUpMethodSerializer.parse(json["method"], decodePath(path, "method")),
      minimum:
        json["minimum"] != null
          ? decodeInteger(json["minimum"], path, "minimum")
          : json["minimum"],
      monthlyCap:
        json["monthly_cap"] != null
          ? decodeInteger(json["monthly_cap"], path, "monthly_cap")
          : json["monthly_cap"],
      paymentMethodId:
        json["payment_method_id"] != null
          ? decodeString(json["payment_method_id"], path, "payment_method_id")
          : json["payment_method_id"],
      status: AutoTopUpStatusSerializer.parse(json["status"], decodePath(path, "status")),
      suspendedAt:
        json["suspended_at"] != null
          ? decodeDateTime(json["suspended_at"], path, "suspended_at")
          : json["suspended_at"],
      target:
        json["target"] != null
          ? decodeInteger(json["target"], path, "target")
          : json["target"],
      threshold: decodeInteger(json["threshold"], path, "threshold"),
    };
  },

  serialize(value: AutoTopUp): any {
    return {
      ...extraProperties(value, [
        "amount",
        "customerConsentAttestedAt",
        "dailyCap",
        "lastError",
        "lastSucceededAt",
        "maximum",
        "method",
        "minimum",
        "monthlyCap",
        "paymentMethodId",
        "status",
        "suspendedAt",
        "target",
        "threshold",
      ]),
      amount: value.amount,
      customer_consent_attested_at: value.customerConsentAttestedAt,
      daily_cap: value.dailyCap,
      last_error: value.lastError,
      last_succeeded_at: value.lastSucceededAt,
      maximum: value.maximum,
      method: AutoTopUpMethodSerializer.serialize(value.method),
      minimum: value.minimum,
      monthly_cap: value.monthlyCap,
      payment_method_id: value.paymentMethodId,
      status: AutoTopUpStatusSerializer.serialize(value.status),
      suspended_at: value.suspendedAt,
      target: value.target,
      threshold: value.threshold,
    };
  },
};
