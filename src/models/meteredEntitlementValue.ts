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
import {
  type EntitlementOverageBehavior,
  EntitlementOverageBehaviorSerializer,
} from "./entitlementOverageBehavior.js";
import { type ResetPeriod, ResetPeriodSerializer } from "./resetPeriod.js";

export interface MeteredEntitlementValue {
  /** Per-entitlement kill switch. `false` means disabled. */
  enabled?: boolean | undefined;
  /**
   * `BLOCK` only: usage allowed beyond the limit before it is refused, in percent of the
   * limit (1 to 1000).
   */
  gracePct?: number | null | undefined;
  /** Event property the limit applies to separately, one limit per value (e.g. `user_id`). */
  groupBy?: string | null | undefined;
  /** Cap on usage. Null means unlimited. */
  limit?: string | null | undefined;
  overageBehavior?: EntitlementOverageBehavior | null | undefined;
  resetPeriod?: ResetPeriod | undefined;
  /**
   * Percents of the limit (1 to 100, at most 10) at which an alert is sent, once per period:
   * `entitlement.usage_threshold_reached`, or `entitlement.limit_reached` at 100. Requires a
   * limit and a window that is not sliding.
   */
  thresholds?: number[] | null | undefined;
  type: "METERED";
  /**
   * Deprecated: use `thresholds`. A single alert threshold, read only when `thresholds` is
   * omitted; returned as the lowest of `thresholds`.
   */
  warningThresholdPct?: number | null | undefined;
}

/** Converts `MeteredEntitlementValue` values from (`parse`) and to (`serialize`) their JSON form. */
export const MeteredEntitlementValueSerializer = {
  parse(json: any, path = "$"): MeteredEntitlementValue {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "enabled",
        "grace_pct",
        "group_by",
        "limit",
        "overage_behavior",
        "reset_period",
        "thresholds",
        "type",
        "warning_threshold_pct",
      ]),
      enabled:
        json["enabled"] != null
          ? decodeBoolean(json["enabled"], path, "enabled")
          : undefined,
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
      overageBehavior:
        json["overage_behavior"] != null
          ? EntitlementOverageBehaviorSerializer.parse(
              json["overage_behavior"],
              decodePath(path, "overage_behavior")
            )
          : json["overage_behavior"],
      resetPeriod:
        json["reset_period"] != null
          ? ResetPeriodSerializer.parse(
              json["reset_period"],
              decodePath(path, "reset_period")
            )
          : undefined,
      thresholds:
        json["thresholds"] != null
          ? decodeList(
              json["thresholds"],
              path,
              "thresholds",
              (item: any, p: string, i: number) => decodeInteger(item, p, i)
            )
          : json["thresholds"],
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "METERED")
          : "METERED",
      warningThresholdPct:
        json["warning_threshold_pct"] != null
          ? decodeInteger(json["warning_threshold_pct"], path, "warning_threshold_pct")
          : json["warning_threshold_pct"],
    };
  },

  serialize(value: MeteredEntitlementValue): any {
    return {
      ...extraProperties(value, [
        "enabled",
        "gracePct",
        "groupBy",
        "limit",
        "overageBehavior",
        "resetPeriod",
        "thresholds",
        "type",
        "warningThresholdPct",
      ]),
      enabled: value.enabled,
      grace_pct: value.gracePct,
      group_by: value.groupBy,
      limit: value.limit,
      overage_behavior:
        value.overageBehavior != null
          ? EntitlementOverageBehaviorSerializer.serialize(value.overageBehavior)
          : value.overageBehavior,
      reset_period:
        value.resetPeriod != null
          ? ResetPeriodSerializer.serialize(value.resetPeriod)
          : undefined,
      thresholds: value.thresholds,
      type: value.type ?? "METERED",
      warning_threshold_pct: value.warningThresholdPct,
    };
  },
};
