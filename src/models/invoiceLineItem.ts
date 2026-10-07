// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeInteger,
  decodeList,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type SubLineItem, SubLineItemSerializer } from "./subLineItem.js";

export interface InvoiceLineItem {
  amountTotal: number;
  description?: string | null | undefined;
  endDate: string;
  name: string;
  quantity?: string | undefined;
  /**
   * The tax-included unit price the customer was quoted, on a line billed from
   * tax-inclusive prices. `unit_price` is its net counterpart.
   */
  quotedUnitPrice?: string | undefined;
  startDate: string;
  subLineItems: SubLineItem[];
  taxRate: string;
  unitPrice?: string | undefined;
}

/** Converts `InvoiceLineItem` values from (`parse`) and to (`serialize`) their JSON form. */
export const InvoiceLineItemSerializer = {
  parse(json: any, path = "$"): InvoiceLineItem {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "amount_total",
        "description",
        "end_date",
        "name",
        "quantity",
        "quoted_unit_price",
        "start_date",
        "sub_line_items",
        "tax_rate",
        "unit_price",
      ]),
      amountTotal: decodeInteger(json["amount_total"], path, "amount_total"),
      description:
        json["description"] != null
          ? decodeString(json["description"], path, "description")
          : json["description"],
      endDate: decodeString(json["end_date"], path, "end_date"),
      name: decodeString(json["name"], path, "name"),
      quantity:
        json["quantity"] != null
          ? decodeString(json["quantity"], path, "quantity")
          : undefined,
      quotedUnitPrice:
        json["quoted_unit_price"] != null
          ? decodeString(json["quoted_unit_price"], path, "quoted_unit_price")
          : undefined,
      startDate: decodeString(json["start_date"], path, "start_date"),
      subLineItems: decodeList(
        json["sub_line_items"],
        path,
        "sub_line_items",
        (item: any, p: string, i: number) =>
          SubLineItemSerializer.parse(item, decodePath(p, i))
      ),
      taxRate: decodeString(json["tax_rate"], path, "tax_rate"),
      unitPrice:
        json["unit_price"] != null
          ? decodeString(json["unit_price"], path, "unit_price")
          : undefined,
    };
  },

  serialize(value: InvoiceLineItem): any {
    return {
      ...extraProperties(value, [
        "amountTotal",
        "description",
        "endDate",
        "name",
        "quantity",
        "quotedUnitPrice",
        "startDate",
        "subLineItems",
        "taxRate",
        "unitPrice",
      ]),
      amount_total: value.amountTotal,
      description: value.description,
      end_date: value.endDate,
      name: value.name,
      quantity: value.quantity,
      quoted_unit_price: value.quotedUnitPrice,
      start_date: value.startDate,
      sub_line_items: value.subLineItems.map((item: any) =>
        SubLineItemSerializer.serialize(item)
      ),
      tax_rate: value.taxRate,
      unit_price: value.unitPrice,
    };
  },
};
