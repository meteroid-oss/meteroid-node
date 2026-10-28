// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath, decodeString } from "../decode.js";
import {
  type UnattributedMetricUsage,
  UnattributedMetricUsageSerializer,
} from "./unattributedMetricUsage.js";

export interface UnattributedUsageResponse {
  periodEnd: string;
  periodStart: string;
  usage: UnattributedMetricUsage[];
}

/** Converts `UnattributedUsageResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const UnattributedUsageResponseSerializer = {
  parse(json: any, path = "$"): UnattributedUsageResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["period_end", "period_start", "usage"]),
      periodEnd: decodeString(json["period_end"], path, "period_end"),
      periodStart: decodeString(json["period_start"], path, "period_start"),
      usage: decodeList(json["usage"], path, "usage", (item: any, p: string, i: number) =>
        UnattributedMetricUsageSerializer.parse(item, decodePath(p, i))
      ),
    };
  },

  serialize(value: UnattributedUsageResponse): any {
    return {
      ...extraProperties(value, ["periodEnd", "periodStart", "usage"]),
      period_end: value.periodEnd,
      period_start: value.periodStart,
      usage: value.usage.map((item: any) =>
        UnattributedMetricUsageSerializer.serialize(item)
      ),
    };
  },
};
