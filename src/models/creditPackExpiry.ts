// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodePath } from "../decode.js";
import { type CreditExpiryUnit, CreditExpiryUnitSerializer } from "./creditExpiryUnit.js";
/** How long funded credit stays spendable. BILLING_PERIOD takes value 1. */
export interface CreditPackExpiry {
  /** DAY, MONTH or BILLING_PERIOD. */
  unit: CreditExpiryUnit;
  /** How many days or months; 1 for BILLING_PERIOD. */
  value: number;
}

/** Converts `CreditPackExpiry` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditPackExpirySerializer = {
  parse(json: any, path = "$"): CreditPackExpiry {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["unit", "value"]),
      unit: CreditExpiryUnitSerializer.parse(json["unit"], decodePath(path, "unit")),
      value: decodeInteger(json["value"], path, "value"),
    };
  },

  serialize(value: CreditPackExpiry): any {
    return {
      ...extraProperties(value, ["unit", "value"]),
      unit: CreditExpiryUnitSerializer.serialize(value.unit),
      value: value.value,
    };
  },
};
