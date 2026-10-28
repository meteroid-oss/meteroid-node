// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";
/**
 * The credit unit a usage fee's amounts are expressed in, with its value in the subscription
 * currency.
 */
export interface FeeCreditUnit {
  /** The credit unit's code, e.g. `CREDITS`. */
  code: string;
  /** The credit unit's id (`cun_…`). */
  creditUnitId: string;
  /**
   * Decimal places of the unit: credit balances and ledger amounts in it are integers of
   * 10^-precision credit.
   */
  precision: number;
  /**
   * Subscription-currency major units per credit: the money billed, before tax, for each
   * credit the customer's balance in the unit does not cover.
   */
  rate: string;
}

/** Converts `FeeCreditUnit` values from (`parse`) and to (`serialize`) their JSON form. */
export const FeeCreditUnitSerializer = {
  parse(json: any, path = "$"): FeeCreditUnit {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["code", "credit_unit_id", "precision", "rate"]),
      code: decodeString(json["code"], path, "code"),
      creditUnitId: decodeString(json["credit_unit_id"], path, "credit_unit_id"),
      precision: decodeInteger(json["precision"], path, "precision"),
      rate: decodeString(json["rate"], path, "rate"),
    };
  },

  serialize(value: FeeCreditUnit): any {
    return {
      ...extraProperties(value, ["code", "creditUnitId", "precision", "rate"]),
      code: value.code,
      credit_unit_id: value.creditUnitId,
      precision: value.precision,
      rate: value.rate,
    };
  },
};
