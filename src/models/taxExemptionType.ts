// this file is @generated
import { decodeString } from "../decode.js";

export const TaxExemptionType = {
  ReverseCharge: "REVERSE_CHARGE",
  TaxExempt: "TAX_EXEMPT",
  NotRegistered: "NOT_REGISTERED",
  Export: "EXPORT",
  NoVatTerritory: "NO_VAT_TERRITORY",
} as const;
export type TaxExemptionType =
  | (typeof TaxExemptionType)[keyof typeof TaxExemptionType]
  | (string & {});

/** Converts `TaxExemptionType` values from (`parse`) and to (`serialize`) their JSON form. */
export const TaxExemptionTypeSerializer = {
  parse(json: any, path = "$"): TaxExemptionType {
    return decodeString(json, path);
  },

  serialize(value: TaxExemptionType): any {
    return value;
  },
};
