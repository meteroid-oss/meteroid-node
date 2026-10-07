// this file is @generated
import { extraProperties } from "../json.js";
import { decodeBoolean, decodeInteger, decodeObject, decodePath } from "../decode.js";
import { type PlanId, PlanIdSerializer } from "./planId.js";

export interface TrialConfig {
  durationDays: number;
  isFree: boolean;
  trialingPlanId?: PlanId | null | undefined;
}

/** Converts `TrialConfig` values from (`parse`) and to (`serialize`) their JSON form. */
export const TrialConfigSerializer = {
  parse(json: any, path = "$"): TrialConfig {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["duration_days", "is_free", "trialing_plan_id"]),
      durationDays: decodeInteger(json["duration_days"], path, "duration_days"),
      isFree: decodeBoolean(json["is_free"], path, "is_free"),
      trialingPlanId:
        json["trialing_plan_id"] != null
          ? PlanIdSerializer.parse(
              json["trialing_plan_id"],
              decodePath(path, "trialing_plan_id")
            )
          : json["trialing_plan_id"],
    };
  },

  serialize(value: TrialConfig): any {
    return {
      ...extraProperties(value, ["durationDays", "isFree", "trialingPlanId"]),
      duration_days: value.durationDays,
      is_free: value.isFree,
      trialing_plan_id:
        value.trialingPlanId != null
          ? PlanIdSerializer.serialize(value.trialingPlanId)
          : value.trialingPlanId,
    };
  },
};
