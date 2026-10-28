// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeMap,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import {
  type EntitlementCheckLimitBehavior,
  EntitlementCheckLimitBehaviorSerializer,
} from "./entitlementCheckLimitBehavior.js";
import { type UsageLimitId, UsageLimitIdSerializer } from "./usageLimitId.js";
/** Deprecated: customer usage limits were replaced by entitlement overrides; never returned. */
export interface EntitlementCheckLimit {
  behavior: EntitlementCheckLimitBehavior;
  /** The group the limit was evaluated for, when the limit is grouped. */
  group?: { [key: string]: string } | null | undefined;
  hasAccess: boolean;
  limit: string;
  remaining: string;
  usageLimitId: UsageLimitId;
  used: string;
}

/** Converts `EntitlementCheckLimit` values from (`parse`) and to (`serialize`) their JSON form. */
export const EntitlementCheckLimitSerializer = {
  parse(json: any, path = "$"): EntitlementCheckLimit {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "behavior",
        "group",
        "has_access",
        "limit",
        "remaining",
        "usage_limit_id",
        "used",
      ]),
      behavior: EntitlementCheckLimitBehaviorSerializer.parse(
        json["behavior"],
        decodePath(path, "behavior")
      ),
      group:
        json["group"] != null
          ? decodeMap(
              json["group"],
              path,
              "group",
              (entry: any, p: string, key: string) => decodeString(entry, p, key)
            )
          : json["group"],
      hasAccess: decodeBoolean(json["has_access"], path, "has_access"),
      limit: decodeString(json["limit"], path, "limit"),
      remaining: decodeString(json["remaining"], path, "remaining"),
      usageLimitId: UsageLimitIdSerializer.parse(
        json["usage_limit_id"],
        decodePath(path, "usage_limit_id")
      ),
      used: decodeString(json["used"], path, "used"),
    };
  },

  serialize(value: EntitlementCheckLimit): any {
    return {
      ...extraProperties(value, [
        "behavior",
        "group",
        "hasAccess",
        "limit",
        "remaining",
        "usageLimitId",
        "used",
      ]),
      behavior: EntitlementCheckLimitBehaviorSerializer.serialize(value.behavior),
      group: value.group,
      has_access: value.hasAccess,
      limit: value.limit,
      remaining: value.remaining,
      usage_limit_id: UsageLimitIdSerializer.serialize(value.usageLimitId),
      used: value.used,
    };
  },
};
