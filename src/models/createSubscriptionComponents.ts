// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import {
  type ComponentOverride,
  ComponentOverrideSerializer,
} from "./componentOverride.js";
import {
  type ComponentParameterization,
  ComponentParameterizationSerializer,
} from "./componentParameterization.js";
import { type ExtraComponent, ExtraComponentSerializer } from "./extraComponent.js";
import { type PriceComponentId, PriceComponentIdSerializer } from "./priceComponentId.js";

export interface CreateSubscriptionComponents {
  extraComponents?: ExtraComponent[] | null | undefined;
  overriddenComponents?: ComponentOverride[] | null | undefined;
  parameterizedComponents?: ComponentParameterization[] | null | undefined;
  removeComponents?: PriceComponentId[] | null | undefined;
}

/** Converts `CreateSubscriptionComponents` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreateSubscriptionComponentsSerializer = {
  parse(json: any, path = "$"): CreateSubscriptionComponents {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "extra_components",
        "overridden_components",
        "parameterized_components",
        "remove_components",
      ]),
      extraComponents:
        json["extra_components"] != null
          ? decodeList(
              json["extra_components"],
              path,
              "extra_components",
              (item: any, p: string, i: number) =>
                ExtraComponentSerializer.parse(item, decodePath(p, i))
            )
          : json["extra_components"],
      overriddenComponents:
        json["overridden_components"] != null
          ? decodeList(
              json["overridden_components"],
              path,
              "overridden_components",
              (item: any, p: string, i: number) =>
                ComponentOverrideSerializer.parse(item, decodePath(p, i))
            )
          : json["overridden_components"],
      parameterizedComponents:
        json["parameterized_components"] != null
          ? decodeList(
              json["parameterized_components"],
              path,
              "parameterized_components",
              (item: any, p: string, i: number) =>
                ComponentParameterizationSerializer.parse(item, decodePath(p, i))
            )
          : json["parameterized_components"],
      removeComponents:
        json["remove_components"] != null
          ? decodeList(
              json["remove_components"],
              path,
              "remove_components",
              (item: any, p: string, i: number) =>
                PriceComponentIdSerializer.parse(item, decodePath(p, i))
            )
          : json["remove_components"],
    };
  },

  serialize(value: CreateSubscriptionComponents): any {
    return {
      ...extraProperties(value, [
        "extraComponents",
        "overriddenComponents",
        "parameterizedComponents",
        "removeComponents",
      ]),
      extra_components:
        value.extraComponents != null
          ? value.extraComponents.map((item: any) =>
              ExtraComponentSerializer.serialize(item)
            )
          : value.extraComponents,
      overridden_components:
        value.overriddenComponents != null
          ? value.overriddenComponents.map((item: any) =>
              ComponentOverrideSerializer.serialize(item)
            )
          : value.overriddenComponents,
      parameterized_components:
        value.parameterizedComponents != null
          ? value.parameterizedComponents.map((item: any) =>
              ComponentParameterizationSerializer.serialize(item)
            )
          : value.parameterizedComponents,
      remove_components:
        value.removeComponents != null
          ? value.removeComponents.map((item: any) =>
              PriceComponentIdSerializer.serialize(item)
            )
          : value.removeComponents,
    };
  },
};
