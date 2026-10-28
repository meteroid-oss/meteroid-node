// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";
/** The credit unit a credit pack grants. */
export interface CreditPackUnit {
  /** The credit unit's code, e.g. `CREDITS`. */
  code: string;
  /** The credit unit's id (`cun_…`). */
  creditUnitId: string;
  /**
   * Decimal places of the unit: credit balances and ledger amounts in it are integers of
   * 10^-precision credit.
   */
  precision: number;
}

/** Converts `CreditPackUnit` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditPackUnitSerializer = {
  parse(json: any, path = "$"): CreditPackUnit {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["code", "credit_unit_id", "precision"]),
      code: decodeString(json["code"], path, "code"),
      creditUnitId: decodeString(json["credit_unit_id"], path, "credit_unit_id"),
      precision: decodeInteger(json["precision"], path, "precision"),
    };
  },

  serialize(value: CreditPackUnit): any {
    return {
      ...extraProperties(value, ["code", "creditUnitId", "precision"]),
      code: value.code,
      credit_unit_id: value.creditUnitId,
      precision: value.precision,
    };
  },
};
