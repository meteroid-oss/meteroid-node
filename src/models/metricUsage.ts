// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath, decodeString } from "../decode.js";
import { type BillableMetricId, BillableMetricIdSerializer } from "./billableMetricId.js";
import { type GroupedUsage, GroupedUsageSerializer } from "./groupedUsage.js";

export interface MetricUsage {
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
        "grouped_usage",
        "metric_code",
        "metric_id",
        "metric_name",
        "total_value",
      ]),
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
        "groupedUsage",
        "metricCode",
        "metricId",
        "metricName",
        "totalValue",
      ]),
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
