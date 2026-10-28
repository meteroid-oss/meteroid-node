// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath, decodeString } from "../decode.js";
import { type BillableMetricId, BillableMetricIdSerializer } from "./billableMetricId.js";
import { type GroupedUsage, GroupedUsageSerializer } from "./groupedUsage.js";
import { type UsageCost, UsageCostSerializer } from "./usageCost.js";

export interface MetricUsage {
  /**
   * Beta: what the metric's usage adds so far to the subscription's next invoice, per currency
   * or credit unit; empty while it bills nothing, as during a free trial or once cancelled.
   */
  costs?: UsageCost[] | null | undefined;
  groupedUsage: GroupedUsage[];
  metricCode: string;
  metricId: BillableMetricId;
  metricName: string;
  totalValue: string;
}

/** Converts `MetricUsage` values from (`parse`) and to (`serialize`) their JSON form. */
export const MetricUsageSerializer = {
  parse(json: any, path = "$"): MetricUsage {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "costs",
        "grouped_usage",
        "metric_code",
        "metric_id",
        "metric_name",
        "total_value",
      ]),
      costs:
        json["costs"] != null
          ? decodeList(json["costs"], path, "costs", (item: any, p: string, i: number) =>
              UsageCostSerializer.parse(item, decodePath(p, i))
            )
          : json["costs"],
      groupedUsage: decodeList(
        json["grouped_usage"],
        path,
        "grouped_usage",
        (item: any, p: string, i: number) =>
          GroupedUsageSerializer.parse(item, decodePath(p, i))
      ),
      metricCode: decodeString(json["metric_code"], path, "metric_code"),
      metricId: BillableMetricIdSerializer.parse(
        json["metric_id"],
        decodePath(path, "metric_id")
      ),
      metricName: decodeString(json["metric_name"], path, "metric_name"),
      totalValue: decodeString(json["total_value"], path, "total_value"),
    };
  },

  serialize(value: MetricUsage): any {
    return {
      ...extraProperties(value, [
        "costs",
        "groupedUsage",
        "metricCode",
        "metricId",
        "metricName",
        "totalValue",
      ]),
      costs:
        value.costs != null
          ? value.costs.map((item: any) => UsageCostSerializer.serialize(item))
          : value.costs,
      grouped_usage: value.groupedUsage.map((item: any) =>
        GroupedUsageSerializer.serialize(item)
      ),
      metric_code: value.metricCode,
      metric_id: BillableMetricIdSerializer.serialize(value.metricId),
      metric_name: value.metricName,
      total_value: value.totalValue,
    };
  },
};
