// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeInteger,
  decodeList,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type BillableMetricId, BillableMetricIdSerializer } from "./billableMetricId.js";
import {
  type EntitlementOverageBehavior,
  EntitlementOverageBehaviorSerializer,
} from "./entitlementOverageBehavior.js";
import { type ResetPeriod, ResetPeriodSerializer } from "./resetPeriod.js";

export interface MeteredEntitlementSpec {
  /**
   * False when switched off, or once a `BLOCK` limit (plus its grace) is reached. An `ALLOW`
   * limit never turns it off.
   */
  enabled: boolean;
  /** `BLOCK` only: usage allowed beyond the limit before it is refused, in percent of it. */
  gracePct?: number | null | undefined;
  /** Event property the limit applies to separately; usage is then the largest value's. */
  groupBy?: string | null | undefined;
  limit?: string | null | undefined;
  metricId: BillableMetricId;
  overageBehavior?: EntitlementOverageBehavior | null | undefined;
  resetPeriod: ResetPeriod;
  /** Percents of the limit at which an alert is sent, ascending. */
  thresholds?: number[] | null | undefined;
  /** Deprecated: the lowest of `thresholds`. */
  warningThresholdPct?: number | null | undefined;
}

/** Converts `MeteredEntitlementSpec` values from (`parse`) and to (`serialize`) their JSON form. */
export const MeteredEntitlementSpecSerializer = {
  parse(json: any, path = "$"): MeteredEntitlementSpec {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "enabled",
        "grace_pct",
        "group_by",
        "limit",
        "metric_id",
        "overage_behavior",
        "reset_period",
        "thresholds",
        "warning_threshold_pct",
      ]),
      enabled: decodeBoolean(json["enabled"], path, "enabled"),
      gracePct:
        json["grace_pct"] != null
          ? decodeInteger(json["grace_pct"], path, "grace_pct")
          : json["grace_pct"],
      groupBy:
        json["group_by"] != null
          ? decodeString(json["group_by"], path, "group_by")
          : json["group_by"],
      limit:
        json["limit"] != null
          ? decodeString(json["limit"], path, "limit")
          : json["limit"],
      metricId: BillableMetricIdSerializer.parse(
        json["metric_id"],
        decodePath(path, "metric_id")
      ),
      overageBehavior:
        json["overage_behavior"] != null
          ? EntitlementOverageBehaviorSerializer.parse(
              json["overage_behavior"],
              decodePath(path, "overage_behavior")
            )
          : json["overage_behavior"],
      resetPeriod: ResetPeriodSerializer.parse(
        json["reset_period"],
        decodePath(path, "reset_period")
      ),
      thresholds:
        json["thresholds"] != null
          ? decodeList(
              json["thresholds"],
              path,
              "thresholds",
              (item: any, p: string, i: number) => decodeInteger(item, p, i)
            )
          : json["thresholds"],
      warningThresholdPct:
        json["warning_threshold_pct"] != null
          ? decodeInteger(json["warning_threshold_pct"], path, "warning_threshold_pct")
          : json["warning_threshold_pct"],
    };
  },

  serialize(value: MeteredEntitlementSpec): any {
    return {
      ...extraProperties(value, [
        "enabled",
        "gracePct",
        "groupBy",
        "limit",
        "metricId",
        "overageBehavior",
        "resetPeriod",
        "thresholds",
        "warningThresholdPct",
      ]),
      enabled: value.enabled,
      grace_pct: value.gracePct,
      group_by: value.groupBy,
      limit: value.limit,
      metric_id: BillableMetricIdSerializer.serialize(value.metricId),
      overage_behavior:
        value.overageBehavior != null
          ? EntitlementOverageBehaviorSerializer.serialize(value.overageBehavior)
          : value.overageBehavior,
      reset_period: ResetPeriodSerializer.serialize(value.resetPeriod),
      thresholds: value.thresholds,
      warning_threshold_pct: value.warningThresholdPct,
    };
  },
};
