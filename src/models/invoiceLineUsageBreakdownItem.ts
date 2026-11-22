// this file is @generated
import { extraProperties } from "../json.js";
import { decodeBoolean, decodeInteger, decodeObject, decodeString } from "../decode.js";

export interface InvoiceLineUsageBreakdownItem {
  /** Its part of the line's amount before discounts and tax, in minor units. */
  amountSubtotal: number;
  /** Its part of `credit_unit.consumed`, on a line priced in a credit unit. */
  creditsConsumed?: number | null | undefined;
  /** Set on the last item when there are more than 99 values: it sums the rest. */
  others?: boolean | undefined;
  /** Usage of this value, in the units the line is priced in. */
  quantity: string;
  /** Its part of the tax-included amount quoted, on a line billed from tax-inclusive prices. */
  quotedAmountSubtotal?: number | null | undefined;
  /** The property's value; absent for events without it, and for `others`. */
  value?: string | null | undefined;
}

/** Converts `InvoiceLineUsageBreakdownItem` values from (`parse`) and to (`serialize`) their JSON form. */
export const InvoiceLineUsageBreakdownItemSerializer = {
  parse(json: any, path = "$"): InvoiceLineUsageBreakdownItem {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "amount_subtotal",
        "credits_consumed",
        "others",
        "quantity",
        "quoted_amount_subtotal",
        "value",
      ]),
      amountSubtotal: decodeInteger(json["amount_subtotal"], path, "amount_subtotal"),
      creditsConsumed:
        json["credits_consumed"] != null
          ? decodeInteger(json["credits_consumed"], path, "credits_consumed")
          : json["credits_consumed"],
      others:
        json["others"] != null
          ? decodeBoolean(json["others"], path, "others")
          : undefined,
      quantity: decodeString(json["quantity"], path, "quantity"),
      quotedAmountSubtotal:
        json["quoted_amount_subtotal"] != null
          ? decodeInteger(json["quoted_amount_subtotal"], path, "quoted_amount_subtotal")
          : json["quoted_amount_subtotal"],
      value:
        json["value"] != null
          ? decodeString(json["value"], path, "value")
          : json["value"],
    };
  },

  serialize(value: InvoiceLineUsageBreakdownItem): any {
    return {
      ...extraProperties(value, [
        "amountSubtotal",
        "creditsConsumed",
        "others",
        "quantity",
        "quotedAmountSubtotal",
        "value",
      ]),
      amount_subtotal: value.amountSubtotal,
      credits_consumed: value.creditsConsumed,
      others: value.others,
      quantity: value.quantity,
      quoted_amount_subtotal: value.quotedAmountSubtotal,
      value: value.value,
    };
  },
};
