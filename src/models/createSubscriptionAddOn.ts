// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodePath } from "../decode.js";
import { type AddOnId, AddOnIdSerializer } from "./addOnId.js";
import {
  type SubscriptionAddOnCustomization,
  SubscriptionAddOnCustomizationSerializer,
} from "./subscriptionAddOnCustomization.js";

export interface CreateSubscriptionAddOn {
  addOnId: AddOnId;
  customization?: SubscriptionAddOnCustomization | null | undefined;
  quantity?: number | undefined;
}

/** Converts `CreateSubscriptionAddOn` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreateSubscriptionAddOnSerializer = {
  parse(json: any, path = "$"): CreateSubscriptionAddOn {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["add_on_id", "customization", "quantity"]),
      addOnId: AddOnIdSerializer.parse(json["add_on_id"], decodePath(path, "add_on_id")),
      customization:
        json["customization"] != null
          ? SubscriptionAddOnCustomizationSerializer.parse(
              json["customization"],
              decodePath(path, "customization")
            )
          : json["customization"],
      quantity:
        json["quantity"] != null
          ? decodeInteger(json["quantity"], path, "quantity")
          : undefined,
    };
  },

  serialize(value: CreateSubscriptionAddOn): any {
    return {
      ...extraProperties(value, ["addOnId", "customization", "quantity"]),
      add_on_id: AddOnIdSerializer.serialize(value.addOnId),
      customization:
        value.customization != null
          ? SubscriptionAddOnCustomizationSerializer.serialize(value.customization)
          : value.customization,
      quantity: value.quantity,
    };
  },
};
