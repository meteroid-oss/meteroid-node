// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";
/** Usage beyond the credit is invoiced. */
export interface CreditExhaustedRuleInvoiceVariant {
  type: "invoice";
}

/** Converts `CreditExhaustedRuleInvoiceVariant` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditExhaustedRuleInvoiceVariantSerializer = {
  parse(json: any, path = "$"): CreditExhaustedRuleInvoiceVariant {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["type"]),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "invoice")
          : "invoice",
    };
  },

  serialize(value: CreditExhaustedRuleInvoiceVariant): any {
    return {
      ...extraProperties(value, ["type"]),
      type: value.type ?? "invoice",
    };
  },
};
