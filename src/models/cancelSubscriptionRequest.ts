// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface CancelSubscriptionRequest {
  /** If not provided, the cancellation will be effective at the end of the current billing or committed period. */
  effectiveDate?: string | null | undefined;
  reason?: string | null | undefined;
}

/** Converts `CancelSubscriptionRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const CancelSubscriptionRequestSerializer = {
  parse(json: any, path = "$"): CancelSubscriptionRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["effective_date", "reason"]),
      effectiveDate:
        json["effective_date"] != null
          ? decodeString(json["effective_date"], path, "effective_date")
          : json["effective_date"],
      reason:
        json["reason"] != null
          ? decodeString(json["reason"], path, "reason")
          : json["reason"],
    };
  },

  serialize(value: CancelSubscriptionRequest): any {
    return {
      ...extraProperties(value, ["effectiveDate", "reason"]),
      effective_date: value.effectiveDate,
      reason: value.reason,
    };
  },
};
