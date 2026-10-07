// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeInteger,
  decodeList,
  decodeMap,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import {
  type BillingPeriodEnum,
  BillingPeriodEnumSerializer,
} from "./billingPeriodEnum.js";

export interface AvailableParameters {
  /** Map of component_id -> available billing periods (e.g., "MONTHLY", "ANNUAL") */
  billingPeriods?: { [key: string]: BillingPeriodEnum[] } | undefined;
  /** Map of component_id -> available capacity values */
  capacityThresholds?: { [key: string]: number[] } | undefined;
  /** List of component_ids that support slot parametrization (initial slot count) */
  slotComponents?: string[] | undefined;
}

/** Converts `AvailableParameters` values from (`parse`) and to (`serialize`) their JSON form. */
export const AvailableParametersSerializer = {
  parse(json: any, path = "$"): AvailableParameters {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "billing_periods",
        "capacity_thresholds",
        "slot_components",
      ]),
      billingPeriods:
        json["billing_periods"] != null
          ? decodeMap(
              json["billing_periods"],
              path,
              "billing_periods",
              (entry: any, p: string, key: string) =>
                decodeList(entry, p, key, (item: any, p: string, i: number) =>
                  BillingPeriodEnumSerializer.parse(item, decodePath(p, i))
                )
            )
          : undefined,
      capacityThresholds:
        json["capacity_thresholds"] != null
          ? decodeMap(
              json["capacity_thresholds"],
              path,
              "capacity_thresholds",
              (entry: any, p: string, key: string) =>
                decodeList(entry, p, key, (item: any, p: string, i: number) =>
                  decodeInteger(item, p, i)
                )
            )
          : undefined,
      slotComponents:
        json["slot_components"] != null
          ? decodeList(
              json["slot_components"],
              path,
              "slot_components",
              (item: any, p: string, i: number) => decodeString(item, p, i)
            )
          : undefined,
    };
  },

  serialize(value: AvailableParameters): any {
    return {
      ...extraProperties(value, [
        "billingPeriods",
        "capacityThresholds",
        "slotComponents",
      ]),
      billing_periods:
        value.billingPeriods != null
          ? Object.fromEntries(
              Object.entries(value.billingPeriods).map(([key, entry]) => [
                key,
                entry.map((item: any) => BillingPeriodEnumSerializer.serialize(item)),
              ])
            )
          : undefined,
      capacity_thresholds: value.capacityThresholds,
      slot_components: value.slotComponents,
    };
  },
};
