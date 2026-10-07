// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface CustomTaxRate {
  name: string;
  rate: string;
  taxCode: string;
}

/** Converts `CustomTaxRate` values from (`parse`) and to (`serialize`) their JSON form. */
export const CustomTaxRateSerializer = {
  parse(json: any, path = "$"): CustomTaxRate {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["name", "rate", "tax_code"]),
      name: decodeString(json["name"], path, "name"),
      rate: decodeString(json["rate"], path, "rate"),
      taxCode: decodeString(json["tax_code"], path, "tax_code"),
    };
  },

  serialize(value: CustomTaxRate): any {
    return {
      ...extraProperties(value, ["name", "rate", "taxCode"]),
      name: value.name,
      rate: value.rate,
      tax_code: value.taxCode,
    };
  },
};
