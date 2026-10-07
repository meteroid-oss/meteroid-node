// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type PriceEntry, PriceEntrySerializer } from "./priceEntry.js";
import { type ProductRef, ProductRefSerializer } from "./productRef.js";

export interface ExtraComponent {
  name: string;
  priceEntry: PriceEntry;
  productRef: ProductRef;
}

/** Converts `ExtraComponent` values from (`parse`) and to (`serialize`) their JSON form. */
export const ExtraComponentSerializer = {
  parse(json: any, path = "$"): ExtraComponent {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["name", "price_entry", "product_ref"]),
      name: decodeString(json["name"], path, "name"),
      priceEntry: PriceEntrySerializer.parse(
        json["price_entry"],
        decodePath(path, "price_entry")
      ),
      productRef: ProductRefSerializer.parse(
        json["product_ref"],
        decodePath(path, "product_ref")
      ),
    };
  },

  serialize(value: ExtraComponent): any {
    return {
      ...extraProperties(value, ["name", "priceEntry", "productRef"]),
      name: value.name,
      price_entry: PriceEntrySerializer.serialize(value.priceEntry),
      product_ref: ProductRefSerializer.serialize(value.productRef),
    };
  },
};
