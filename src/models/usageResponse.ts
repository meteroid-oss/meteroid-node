// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath, decodeString } from "../decode.js";
import { type MetricUsage, MetricUsageSerializer } from "./metricUsage.js";

export interface UsageResponse {
  periodEnd: string;
  periodStart: string;
  usage: MetricUsage[];
}

/** Converts `UsageResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const UsageResponseSerializer = {
  parse(json: any, path = "$"): UsageResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["period_end", "period_start", "usage"]),
      periodEnd: decodeString(json["period_end"], path, "period_end"),
      periodStart: decodeString(json["period_start"], path, "period_start"),
      usage: decodeList(json["usage"], path, "usage", (item: any, p: string, i: number) =>
        MetricUsageSerializer.parse(item, decodePath(p, i))
      ),
    };
  },

  serialize(value: UsageResponse): any {
    return {
      ...extraProperties(value, ["periodEnd", "periodStart", "usage"]),
      period_end: value.periodEnd,
      period_start: value.periodStart,
      usage: value.usage.map((item: any) => MetricUsageSerializer.serialize(item)),
    };
  },
};
