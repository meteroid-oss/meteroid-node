// this file is @generated
import { decodeObject } from "../decode.js";
import { type ExistingPriceRef, ExistingPriceRefSerializer } from "./existingPriceRef.js";
import { type PriceInput, PriceInputSerializer } from "./priceInput.js";

export interface PriceEntryExisting extends ExistingPriceRef {
  type: "EXISTING";
}
export interface PriceEntryNew extends PriceInput {
  type: "NEW";
}

export type PriceEntry = PriceEntryExisting | PriceEntryNew;

/** Converts `PriceEntry` values from (`parse`) and to (`serialize`) their JSON form. */
export const PriceEntrySerializer = {
  parse(json: any, path = "$"): PriceEntry {
    decodeObject(json, path);
    switch (json["type"]) {
      case "EXISTING":
        return {
          ...ExistingPriceRefSerializer.parse(json, path),
          type: "EXISTING",
        };
      case "NEW":
        return {
          ...PriceInputSerializer.parse(json, path),
          type: "NEW",
        };
      default:
        // A variant added to the API after this SDK was generated, kept as received.
        return json;
    }
  },

  serialize(value: PriceEntry): any {
    switch (value.type) {
      case "EXISTING":
        return {
          ...ExistingPriceRefSerializer.serialize(value),
          type: "EXISTING",
        };
      case "NEW":
        return {
          ...PriceInputSerializer.serialize(value),
          type: "NEW",
        };
      default:
        return value;
    }
  },
};
