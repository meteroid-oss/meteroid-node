// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeInteger,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type AutoTopUpMethod, AutoTopUpMethodSerializer } from "./autoTopUpMethod.js";
/**
 * An automatic top-up's terms, replaced as a whole. FIXED needs `amount` and no `target`;
 * TO_TARGET needs `target` above `threshold` and no `amount`; amounts are positive.
 */
export interface AutoTopUpWriteRequest {
  /** FIXED only: credit bought each time, in minor units of the wallet. */
  amount?: number | null | undefined;
  /**
   * Credit unit wallets: authorize today's price per credit for these terms, which lifts a
   * stop caused by a price increase. When false (the default) the terms keep the price they
   * were authorized at, and a rule stopped by a price increase stays stopped.
   * A price at or below the authorized one never stops the rule: top-ups charge it.
   */
  atCurrentPrice?: boolean | undefined;
  /**
   * Attests that the customer agreed to automatic charges on these terms; recorded with the
   * API key and the time. Required (true) when the terms turn automatic top-up on, including
   * one the customer turned off, or change what it charges. Not needed to resend the stored
   * terms unchanged, nor to change terms the customer confirmed in their portal: those stop
   * until the customer confirms the new ones.
   */
  customerConsentAttested?: boolean | undefined;
  /**
   * Most charged in a rolling day, tax included. For a credit unit wallet caps are money, in
   * minor units of the customer's currency.
   */
  dailyCap?: number | null | undefined;
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
  /**
   * Defaults to the customer's default payment method: the customer's agreement, and your
   * attestation of it, then cover whichever method is their default at each top-up.
   */
  paymentMethodId?: string | null | undefined;
  /** TO_TARGET only: the balance a top-up brings the wallet back to; must exceed `threshold`. */
  target?: number | null | undefined;
  /** Tops up once the balance is at or below this, in minor units of the wallet. */
  threshold: number;
}

/** Converts `AutoTopUpWriteRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const AutoTopUpWriteRequestSerializer = {
  parse(json: any, path = "$"): AutoTopUpWriteRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "amount",
        "at_current_price",
        "customer_consent_attested",
        "daily_cap",
        "maximum",
        "method",
        "minimum",
        "monthly_cap",
        "payment_method_id",
        "target",
        "threshold",
      ]),
      amount:
        json["amount"] != null
          ? decodeInteger(json["amount"], path, "amount")
          : json["amount"],
      atCurrentPrice:
        json["at_current_price"] != null
          ? decodeBoolean(json["at_current_price"], path, "at_current_price")
          : undefined,
      customerConsentAttested:
        json["customer_consent_attested"] != null
          ? decodeBoolean(
              json["customer_consent_attested"],
              path,
              "customer_consent_attested"
            )
          : undefined,
      dailyCap:
        json["daily_cap"] != null
          ? decodeInteger(json["daily_cap"], path, "daily_cap")
          : json["daily_cap"],
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
      target:
        json["target"] != null
          ? decodeInteger(json["target"], path, "target")
          : json["target"],
      threshold: decodeInteger(json["threshold"], path, "threshold"),
    };
  },

  serialize(value: AutoTopUpWriteRequest): any {
    return {
      ...extraProperties(value, [
        "amount",
        "atCurrentPrice",
        "customerConsentAttested",
        "dailyCap",
        "maximum",
        "method",
        "minimum",
        "monthlyCap",
        "paymentMethodId",
        "target",
        "threshold",
      ]),
      amount: value.amount,
      at_current_price: value.atCurrentPrice,
      customer_consent_attested: value.customerConsentAttested,
      daily_cap: value.dailyCap,
      maximum: value.maximum,
      method: AutoTopUpMethodSerializer.serialize(value.method),
      minimum: value.minimum,
      monthly_cap: value.monthlyCap,
      payment_method_id: value.paymentMethodId,
      target: value.target,
      threshold: value.threshold,
    };
  },
};
