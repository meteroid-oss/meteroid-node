// this file is @generated
import { extraProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath, decodeString } from "../decode.js";
import { type BillableMetricId, BillableMetricIdSerializer } from "./billableMetricId.js";
/**
 * A metric's usage over `[from, until)` that no subscription bills: it matches none of the
 * usage filters of the subscriptions pricing the metric, and none of them bills without one.
 */
export interface UnattributedMetricUsage {
  from: Date;
  metricCode: string;
  metricId: BillableMetricId;
  metricName: string;
  totalValue: string;
  until: Date;
}

/** Converts `UnattributedMetricUsage` values from (`parse`) and to (`serialize`) their JSON form. */
export const UnattributedMetricUsageSerializer = {
  parse(json: any, path = "$"): UnattributedMetricUsage {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "from",
        "metric_code",
        "metric_id",
        "metric_name",
        "total_value",
        "until",
      ]),
      from: decodeDateTime(json["from"], path, "from"),
      metricCode: decodeString(json["metric_code"], path, "metric_code"),
      metricId: BillableMetricIdSerializer.parse(
        json["metric_id"],
        decodePath(path, "metric_id")
      ),
      metricName: decodeString(json["metric_name"], path, "metric_name"),
      totalValue: decodeString(json["total_value"], path, "total_value"),
      until: decodeDateTime(json["until"], path, "until"),
    };
  },

  serialize(value: UnattributedMetricUsage): any {
    return {
      ...extraProperties(value, [
        "from",
        "metricCode",
        "metricId",
        "metricName",
        "totalValue",
        "until",
      ]),
      from: value.from,
      metric_code: value.metricCode,
      metric_id: BillableMetricIdSerializer.serialize(value.metricId),
      metric_name: value.metricName,
      total_value: value.totalValue,
      until: value.until,
    };
  },
};
