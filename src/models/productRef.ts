// this file is @generated
import { decodeObject } from "../decode.js";
import {
  type ExistingProductRef,
  ExistingProductRefSerializer,
} from "./existingProductRef.js";
import { type NewProductRef, NewProductRefSerializer } from "./newProductRef.js";

export interface ProductRefExisting extends ExistingProductRef {
  type: "EXISTING";
}
export interface ProductRefNew extends NewProductRef {
  type: "NEW";
}

export type ProductRef = ProductRefExisting | ProductRefNew;

/** Converts `ProductRef` values from (`parse`) and to (`serialize`) their JSON form. */
export const ProductRefSerializer = {
  parse(json: any, path = "$"): ProductRef {
    decodeObject(json, path);
    switch (json["type"]) {
      case "EXISTING":
        return {
          ...ExistingProductRefSerializer.parse(json, path),
          type: "EXISTING",
        };
      case "NEW":
        return {
          ...NewProductRefSerializer.parse(json, path),
          type: "NEW",
        };
      default:
        // A variant added to the API after this SDK was generated, kept as received.
        return json;
    }
  },

  serialize(value: ProductRef): any {
    switch (value.type) {
      case "EXISTING":
        return {
          ...ExistingProductRefSerializer.serialize(value),
          type: "EXISTING",
        };
      case "NEW":
        return {
          ...NewProductRefSerializer.serialize(value),
          type: "NEW",
        };
      default:
        return value;
    }
  },
};
