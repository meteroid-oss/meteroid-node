// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";
/**
 * How a usage line priced in a credit unit was paid: the credits it consumed, those the
 * customer's balance in the unit covered, and the rate the rest was billed at.
 */
export interface InvoiceLineCreditUnit {
  /** The credit unit's code, e.g. `CREDITS`. */
  code: string;
  /** Credits the usage priced. */
  consumed: number;
  /** Of which paid by the customer's credit wallet. */
  covered: number;
  /** Credit amounts are integers in 10^-precision credit. */
  precision: number;
  /** Invoice-currency major units per credit. */
  rate: string;
  /** Credits per usage unit. */
  unitPrice?: string | null | undefined;
}

/** Converts `InvoiceLineCreditUnit` values from (`parse`) and to (`serialize`) their JSON form. */
export const InvoiceLineCreditUnitSerializer = {
  parse(json: any, path = "$"): InvoiceLineCreditUnit {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "code",
        "consumed",
        "covered",
        "precision",
        "rate",
        "unit_price",
      ]),
      code: decodeString(json["code"], path, "code"),
      consumed: decodeInteger(json["consumed"], path, "consumed"),
      covered: decodeInteger(json["covered"], path, "covered"),
      precision: decodeInteger(json["precision"], path, "precision"),
      rate: decodeString(json["rate"], path, "rate"),
      unitPrice:
        json["unit_price"] != null
          ? decodeString(json["unit_price"], path, "unit_price")
          : json["unit_price"],
    };
  },

  serialize(value: InvoiceLineCreditUnit): any {
    return {
      ...extraProperties(value, [
        "code",
        "consumed",
        "covered",
        "precision",
        "rate",
        "unitPrice",
      ]),
      code: value.code,
      consumed: value.consumed,
      covered: value.covered,
      precision: value.precision,
      rate: value.rate,
      unit_price: value.unitPrice,
    };
  },
};
