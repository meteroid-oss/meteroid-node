// this file is @generated
import { extraProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodeString } from "../decode.js";

export interface MeteredEntitlementUsage {
  consumed?: string | null | undefined;
  remaining?: string | null | undefined;
  resetAt?: Date | null | undefined;
}

/** Converts `MeteredEntitlementUsage` values from (`parse`) and to (`serialize`) their JSON form. */
export const MeteredEntitlementUsageSerializer = {
  parse(json: any, path = "$"): MeteredEntitlementUsage {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["consumed", "remaining", "reset_at"]),
      consumed:
        json["consumed"] != null
          ? decodeString(json["consumed"], path, "consumed")
          : json["consumed"],
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
      ...extraProperties(value, ["consumed", "remaining", "resetAt"]),
      consumed: value.consumed,
      remaining: value.remaining,
      reset_at: value.resetAt,
    };
  },
};
