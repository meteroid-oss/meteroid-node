// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeDateTime,
  decodeList,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type MetricUsage, MetricUsageSerializer } from "./metricUsage.js";
import { type UsageCost, UsageCostSerializer } from "./usageCost.js";

export interface UsageResponse {
  /**
   * Beta: when `totals` and the metrics' `costs` were computed. These are present only when a
   * subscription's current billing period is read (no `start_date` nor `end_date`) and its
   * usage could be priced.
   */
  computedAt?: Date | null | undefined;
  periodEnd: string;
  periodStart: string;
  /** Beta: the sum of the metrics' `costs`, per currency or credit unit. */
  totals?: UsageCost[] | null | undefined;
  usage: MetricUsage[];
}

/** Converts `UsageResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const UsageResponseSerializer = {
  parse(json: any, path = "$"): UsageResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "computed_at",
        "period_end",
        "period_start",
        "totals",
        "usage",
      ]),
      computedAt:
        json["computed_at"] != null
          ? decodeDateTime(json["computed_at"], path, "computed_at")
          : json["computed_at"],
      periodEnd: decodeString(json["period_end"], path, "period_end"),
      periodStart: decodeString(json["period_start"], path, "period_start"),
      totals:
        json["totals"] != null
          ? decodeList(
              json["totals"],
              path,
              "totals",
              (item: any, p: string, i: number) =>
                UsageCostSerializer.parse(item, decodePath(p, i))
            )
          : json["totals"],
      usage: decodeList(json["usage"], path, "usage", (item: any, p: string, i: number) =>
        MetricUsageSerializer.parse(item, decodePath(p, i))
      ),
    };
  },

  serialize(value: UsageResponse): any {
    return {
      ...extraProperties(value, [
        "computedAt",
        "periodEnd",
        "periodStart",
        "totals",
        "usage",
      ]),
      computed_at: value.computedAt,
      period_end: value.periodEnd,
      period_start: value.periodStart,
      totals:
        value.totals != null
          ? value.totals.map((item: any) => UsageCostSerializer.serialize(item))
          : value.totals,
      usage: value.usage.map((item: any) => MetricUsageSerializer.serialize(item)),
    };
  },
};
