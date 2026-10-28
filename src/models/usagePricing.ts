// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import {
  type UsagePricingModel,
  UsagePricingModelSerializer,
} from "./usagePricingModel.js";

export interface UsagePricing {
  model: UsagePricingModel;
  type: "USAGE";
}

/** Converts `UsagePricing` values from (`parse`) and to (`serialize`) their JSON form. */
export const UsagePricingSerializer = {
  parse(json: any, path = "$"): UsagePricing {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["model", "type"]),
      model: UsagePricingModelSerializer.parse(json["model"], decodePath(path, "model")),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "USAGE")
          : "USAGE",
    };
  },

  serialize(value: UsagePricing): any {
    return {
      ...extraProperties(value, ["model", "type"]),
      model: UsagePricingModelSerializer.serialize(value.model),
      type: value.type ?? "USAGE",
    };
  },
};
