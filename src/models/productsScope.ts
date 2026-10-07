// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodeString } from "../decode.js";
/**
 * Only lines for the listed products count. A product is the identity shared by plan
 * components, overrides and ad-hoc extras, so a subscription's billed set is matched uniformly.
 */
export interface ProductsScope {
  productIds: string[];
}

/** Converts `ProductsScope` values from (`parse`) and to (`serialize`) their JSON form. */
export const ProductsScopeSerializer = {
  parse(json: any, path = "$"): ProductsScope {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["product_ids"]),
      productIds: decodeList(
        json["product_ids"],
        path,
        "product_ids",
        (item: any, p: string, i: number) => decodeString(item, p, i)
      ),
    };
  },

  serialize(value: ProductsScope): any {
    return {
      ...extraProperties(value, ["productIds"]),
      product_ids: value.productIds,
    };
  },
};
