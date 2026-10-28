// this file is @generated
import { extraProperties } from "../json.js";
import { decodeBoolean, decodeDateTime, decodeObject, decodeString } from "../decode.js";

export interface MeteredEntitlementUsage {
  consumed?: string | null | undefined;
  /**
   * Switched on, but refused: the `BLOCK` limit (plus its grace) is reached, so `enabled` is
   * false until the window resets. Never set for a limit grouped by a property.
   */
  limitReached?: boolean | null | undefined;
  remaining?: string | null | undefined;
  resetAt?: Date | null | undefined;
}

/** Converts `MeteredEntitlementUsage` values from (`parse`) and to (`serialize`) their JSON form. */
export const MeteredEntitlementUsageSerializer = {
  parse(json: any, path = "$"): MeteredEntitlementUsage {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["consumed", "limit_reached", "remaining", "reset_at"]),
      consumed:
        json["consumed"] != null
          ? decodeString(json["consumed"], path, "consumed")
          : json["consumed"],
      limitReached:
        json["limit_reached"] != null
          ? decodeBoolean(json["limit_reached"], path, "limit_reached")
          : json["limit_reached"],
      remaining:
        json["remaining"] != null
          ? decodeString(json["remaining"], path, "remaining")
          : json["remaining"],
      resetAt:
        json["reset_at"] != null
          ? decodeDateTime(json["reset_at"], path, "reset_at")
          : json["reset_at"],
    };
  },

  serialize(value: MeteredEntitlementUsage): any {
    return {
      ...extraProperties(value, ["consumed", "limitReached", "remaining", "resetAt"]),
      consumed: value.consumed,
      limit_reached: value.limitReached,
      remaining: value.remaining,
      reset_at: value.resetAt,
    };
  },
};
