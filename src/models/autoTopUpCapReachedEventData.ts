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
/** A spending cap stopped an automatic top-up. */
export interface AutoTopUpCapReachedEventData {
  /**
   * What the suppressed top-up would have charged, tax included once it was quoted (before
   * tax when the cap stopped it before then). Caps are always money: for a credit unit wallet,
   * `currency` is the customer's currency.
   */
  attemptedAmount: number;
  /** The cap, tax included, in minor units of `currency`. */
  cap: number;
  /** The currency the cap and the charge are in (ISO 4217). */
  currency: string;
  customerId: CustomerId;
  /** `DAILY` (rolling day) or `MONTHLY` (calendar month, UTC). */
  period: string;
  /** End of the capped period. */
  periodEnd: Date;
  /** Start of the capped period. */
  periodStart: Date;
}

/** Converts `AutoTopUpCapReachedEventData` values from (`parse`) and to (`serialize`) their JSON form. */
export const AutoTopUpCapReachedEventDataSerializer = {
  parse(json: any, path = "$"): AutoTopUpCapReachedEventData {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "attempted_amount",
        "cap",
        "currency",
        "customer_id",
        "period",
        "period_end",
        "period_start",
      ]),
      attemptedAmount: decodeInteger(json["attempted_amount"], path, "attempted_amount"),
      cap: decodeInteger(json["cap"], path, "cap"),
      currency: decodeString(json["currency"], path, "currency"),
      customerId: CustomerIdSerializer.parse(
        json["customer_id"],
        decodePath(path, "customer_id")
      ),
      period: decodeString(json["period"], path, "period"),
      periodEnd: decodeDateTime(json["period_end"], path, "period_end"),
      periodStart: decodeDateTime(json["period_start"], path, "period_start"),
    };
  },

  serialize(value: AutoTopUpCapReachedEventData): any {
    return {
      ...extraProperties(value, [
        "attemptedAmount",
        "cap",
        "currency",
        "customerId",
        "period",
        "periodEnd",
        "periodStart",
      ]),
      attempted_amount: value.attemptedAmount,
      cap: value.cap,
      currency: value.currency,
      customer_id: CustomerIdSerializer.serialize(value.customerId),
      period: value.period,
      period_end: value.periodEnd,
      period_start: value.periodStart,
    };
  },
};
