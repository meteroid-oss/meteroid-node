// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath, decodeString } from "../decode.js";
import {
  type InvoiceLineUsageBreakdownItem,
  InvoiceLineUsageBreakdownItemSerializer,
} from "./invoiceLineUsageBreakdownItem.js";

export interface InvoiceLineUsageBreakdown {
  /** Largest amount first. Past 99 values, the rest are summed in one last item flagged `others`. */
  items: InvoiceLineUsageBreakdownItem[];
  /** The event property the usage is broken down by, e.g. `project_id`. */
  key: string;
}

/** Converts `InvoiceLineUsageBreakdown` values from (`parse`) and to (`serialize`) their JSON form. */
export const InvoiceLineUsageBreakdownSerializer = {
  parse(json: any, path = "$"): InvoiceLineUsageBreakdown {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["items", "key"]),
      items: decodeList(json["items"], path, "items", (item: any, p: string, i: number) =>
        InvoiceLineUsageBreakdownItemSerializer.parse(item, decodePath(p, i))
      ),
      key: decodeString(json["key"], path, "key"),
    };
  },

  serialize(value: InvoiceLineUsageBreakdown): any {
    return {
      ...extraProperties(value, ["items", "key"]),
      items: value.items.map((item: any) =>
        InvoiceLineUsageBreakdownItemSerializer.serialize(item)
      ),
      key: value.key,
    };
  },
};
