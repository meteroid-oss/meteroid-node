// this file is @generated
import { decodeObject } from "../decode.js";
import { type CreditCaps, CreditCapsSerializer } from "./creditCaps.js";
import {
  type CreditExhaustedRuleInvoiceVariant,
  CreditExhaustedRuleInvoiceVariantSerializer,
} from "./creditExhaustedRuleInvoiceVariant.js";
import {
  type CreditExhaustedRulePauseVariant,
  CreditExhaustedRulePauseVariantSerializer,
} from "./creditExhaustedRulePauseVariant.js";

export interface CreditExhaustedRuleInvoice extends CreditExhaustedRuleInvoiceVariant {
  type: "invoice";
}
export interface CreditExhaustedRulePause extends CreditExhaustedRulePauseVariant {
  type: "pause";
}
export interface CreditExhaustedRuleInvoiceUpTo extends CreditCaps {
  type: "invoice_up_to";
}

/**
 * What usage does once the credit it draws on runs out, for every denomination (currency or
 * credit unit) the plan charges usage in. A customer's wallet can override it.
 */
export type CreditExhaustedRule =
  | CreditExhaustedRuleInvoice
  | CreditExhaustedRulePause
  | CreditExhaustedRuleInvoiceUpTo;

/** Converts `CreditExhaustedRule` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditExhaustedRuleSerializer = {
  parse(json: any, path = "$"): CreditExhaustedRule {
    decodeObject(json, path);
    switch (json["type"]) {
      case "invoice":
        return {
          ...CreditExhaustedRuleInvoiceVariantSerializer.parse(json, path),
          type: "invoice",
        };
      case "pause":
        return {
          ...CreditExhaustedRulePauseVariantSerializer.parse(json, path),
          type: "pause",
        };
      case "invoice_up_to":
        return {
          ...CreditCapsSerializer.parse(json, path),
          type: "invoice_up_to",
        };
      default:
        // A variant added to the API after this SDK was generated, kept as received.
        return json;
    }
  },

  serialize(value: CreditExhaustedRule): any {
    switch (value.type) {
      case "invoice":
        return {
          ...CreditExhaustedRuleInvoiceVariantSerializer.serialize(value),
          type: "invoice",
        };
      case "pause":
        return {
          ...CreditExhaustedRulePauseVariantSerializer.serialize(value),
          type: "pause",
        };
      case "invoice_up_to":
        return {
          ...CreditCapsSerializer.serialize(value),
          type: "invoice_up_to",
        };
      default:
        return value;
    }
  },
};
