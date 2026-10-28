// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeDateTime,
  decodeInteger,
  decodeList,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type ConfigValue, ConfigValueSerializer } from "./configValue.js";
import {
  type EntitlementCheckFeature,
  EntitlementCheckFeatureSerializer,
} from "./entitlementCheckFeature.js";
import {
  type EntitlementCheckLimit,
  EntitlementCheckLimitSerializer,
} from "./entitlementCheckLimit.js";
import {
  type EntitlementCheckPeriod,
  EntitlementCheckPeriodSerializer,
} from "./entitlementCheckPeriod.js";
import {
  type EntitlementCheckReason,
  EntitlementCheckReasonSerializer,
} from "./entitlementCheckReason.js";
/** Whether a customer may consume more of a feature now. */
export interface EntitlementCheck {
  /** When the usage behind the answer was measured. */
  asOf: Date;
  /** Always false: the answer reflects usage up to `as_of`. */
  exact: boolean;
  feature: EntitlementCheckFeature;
  hasAccess: boolean;
  /**
   * The entitlement allows overage (`ALLOW`) and the requested units go beyond its limit:
   * access is granted, and the overage is billed.
   */
  inOverage: boolean;
  /** Age of that usage, in milliseconds. */
  lagMs: number;
  limit?: string | null | undefined;
  /**
   * Deprecated: always empty. Customer-specific limits are entitlement overrides, reported in
   * `used`, `limit` and `remaining`.
   */
  limits: EntitlementCheckLimit[];
  /**
   * True when a hard limit is within 5% of being reached, reached, or refuses the request.
   * While true, check before every request with its actual `requested`, and do not cache an
   * answer that grants access.
   */
  nearLimit: boolean;
  period?: EntitlementCheckPeriod | null | undefined;
  reason: EntitlementCheckReason;
  /**
   * Units left before the limit, grace excluded: 0 while `has_access` is true when usage is
   * within the grace allowance.
   */
  remaining?: string | null | undefined;
  /**
   * When to check again, in milliseconds. After a refusal by a limit whose period ends within
   * 24 hours: the time until it ends (a smaller `requested` may still be allowed sooner);
   * absent after a refusal by a sliding window, whose usage leaves it gradually. While
   * `near_limit` is true and access is granted: 1000.
   */
  retryAfterMs?: number | null | undefined;
  /**
   * `used`, `limit`, `remaining` and `period` report the entitlement's limit. Absent when the
   * entitlement has no limit.
   */
  used?: string | null | undefined;
  value?: ConfigValue | null | undefined;
}

/** Converts `EntitlementCheck` values from (`parse`) and to (`serialize`) their JSON form. */
export const EntitlementCheckSerializer = {
  parse(json: any, path = "$"): EntitlementCheck {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "as_of",
        "exact",
        "feature",
        "has_access",
        "in_overage",
        "lag_ms",
        "limit",
        "limits",
        "near_limit",
        "period",
        "reason",
        "remaining",
        "retry_after_ms",
        "used",
        "value",
      ]),
      asOf: decodeDateTime(json["as_of"], path, "as_of"),
      exact: decodeBoolean(json["exact"], path, "exact"),
      feature: EntitlementCheckFeatureSerializer.parse(
        json["feature"],
        decodePath(path, "feature")
      ),
      hasAccess: decodeBoolean(json["has_access"], path, "has_access"),
      inOverage: decodeBoolean(json["in_overage"], path, "in_overage"),
      lagMs: decodeInteger(json["lag_ms"], path, "lag_ms"),
      limit:
        json["limit"] != null
          ? decodeString(json["limit"], path, "limit")
          : json["limit"],
      limits: decodeList(
        json["limits"],
        path,
        "limits",
        (item: any, p: string, i: number) =>
          EntitlementCheckLimitSerializer.parse(item, decodePath(p, i))
      ),
      nearLimit: decodeBoolean(json["near_limit"], path, "near_limit"),
      period:
        json["period"] != null
          ? EntitlementCheckPeriodSerializer.parse(
              json["period"],
              decodePath(path, "period")
            )
          : json["period"],
      reason: EntitlementCheckReasonSerializer.parse(
        json["reason"],
        decodePath(path, "reason")
      ),
      remaining:
        json["remaining"] != null
          ? decodeString(json["remaining"], path, "remaining")
          : json["remaining"],
      retryAfterMs:
        json["retry_after_ms"] != null
          ? decodeInteger(json["retry_after_ms"], path, "retry_after_ms")
          : json["retry_after_ms"],
      used:
        json["used"] != null ? decodeString(json["used"], path, "used") : json["used"],
      value:
        json["value"] != null
          ? ConfigValueSerializer.parse(json["value"], decodePath(path, "value"))
          : json["value"],
    };
  },

  serialize(value: EntitlementCheck): any {
    return {
      ...extraProperties(value, [
        "asOf",
        "exact",
        "feature",
        "hasAccess",
        "inOverage",
        "lagMs",
        "limit",
        "limits",
        "nearLimit",
        "period",
        "reason",
        "remaining",
        "retryAfterMs",
        "used",
        "value",
      ]),
      as_of: value.asOf,
      exact: value.exact,
      feature: EntitlementCheckFeatureSerializer.serialize(value.feature),
      has_access: value.hasAccess,
      in_overage: value.inOverage,
      lag_ms: value.lagMs,
      limit: value.limit,
      limits: value.limits.map((item: any) =>
        EntitlementCheckLimitSerializer.serialize(item)
      ),
      near_limit: value.nearLimit,
      period:
        value.period != null
          ? EntitlementCheckPeriodSerializer.serialize(value.period)
          : value.period,
      reason: EntitlementCheckReasonSerializer.serialize(value.reason),
      remaining: value.remaining,
      retry_after_ms: value.retryAfterMs,
      used: value.used,
      value:
        value.value != null ? ConfigValueSerializer.serialize(value.value) : value.value,
    };
  },
};
