// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type PriceComponentId, PriceComponentIdSerializer } from "./priceComponentId.js";
import { type PriceEntry, PriceEntrySerializer } from "./priceEntry.js";

export interface ComponentOverride {
  componentId: PriceComponentId;
  name: string;
  priceEntry: PriceEntry;
}

/** Converts `ComponentOverride` values from (`parse`) and to (`serialize`) their JSON form. */
export const ComponentOverrideSerializer = {
  parse(json: any, path = "$"): ComponentOverride {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["component_id", "name", "price_entry"]),
      componentId: PriceComponentIdSerializer.parse(
        json["component_id"],
        decodePath(path, "component_id")
      ),
      name: decodeString(json["name"], path, "name"),
      priceEntry: PriceEntrySerializer.parse(
        json["price_entry"],
        decodePath(path, "price_entry")
      ),
    };
  },

  serialize(value: ComponentOverride): any {
    return {
      ...extraProperties(value, ["componentId", "name", "priceEntry"]),
      component_id: PriceComponentIdSerializer.serialize(value.componentId),
      name: value.name,
      price_entry: PriceEntrySerializer.serialize(value.priceEntry),
    };
  },
};
