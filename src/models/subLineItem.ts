// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";

export interface SubLineItem {
  id: string;
  name: string;
  quantity: string;
  total: number;
  unitPrice: string;
}

/** Converts `SubLineItem` values from (`parse`) and to (`serialize`) their JSON form. */
export const SubLineItemSerializer = {
  parse(json: any, path = "$"): SubLineItem {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["id", "name", "quantity", "total", "unit_price"]),
      id: decodeString(json["id"], path, "id"),
      name: decodeString(json["name"], path, "name"),
      quantity: decodeString(json["quantity"], path, "quantity"),
      total: decodeInteger(json["total"], path, "total"),
      unitPrice: decodeString(json["unit_price"], path, "unit_price"),
    };
  },

  serialize(value: SubLineItem): any {
    return {
      ...extraProperties(value, ["id", "name", "quantity", "total", "unitPrice"]),
      id: value.id,
      name: value.name,
      quantity: value.quantity,
      total: value.total,
      unit_price: value.unitPrice,
    };
  },
};
