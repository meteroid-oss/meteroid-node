// this file is @generated
import { decodeObject } from "../decode.js";
import { type CapacityPlanFee, CapacityPlanFeeSerializer } from "./capacityPlanFee.js";
import {
  type ExtraRecurringPlanFee,
  ExtraRecurringPlanFeeSerializer,
} from "./extraRecurringPlanFee.js";
import { type OneTimePlanFee, OneTimePlanFeeSerializer } from "./oneTimePlanFee.js";
import { type RatePlanFee, RatePlanFeeSerializer } from "./ratePlanFee.js";
import { type SlotPlanFee, SlotPlanFeeSerializer } from "./slotPlanFee.js";
import { type UsagePlanFee, UsagePlanFeeSerializer } from "./usagePlanFee.js";

export interface FeeRate extends RatePlanFee {
  type: "RATE";
}
export interface FeeSlot extends SlotPlanFee {
  type: "SLOT";
}
export interface FeeCapacity extends CapacityPlanFee {
  type: "CAPACITY";
}
export interface FeeUsage extends UsagePlanFee {
  type: "USAGE";
}
export interface FeeExtraRecurring extends ExtraRecurringPlanFee {
  type: "EXTRA_RECURRING";
}
export interface FeeOneTime extends OneTimePlanFee {
  type: "ONE_TIME";
}

export type Fee =
  | FeeRate
  | FeeSlot
  | FeeCapacity
  | FeeUsage
  | FeeExtraRecurring
  | FeeOneTime;

/** Converts `Fee` values from (`parse`) and to (`serialize`) their JSON form. */
export const FeeSerializer = {
  parse(json: any, path = "$"): Fee {
    decodeObject(json, path);
    switch (json["type"]) {
      case "RATE":
        return {
          ...RatePlanFeeSerializer.parse(json, path),
          type: "RATE",
        };
      case "SLOT":
        return {
          ...SlotPlanFeeSerializer.parse(json, path),
          type: "SLOT",
        };
      case "CAPACITY":
        return {
          ...CapacityPlanFeeSerializer.parse(json, path),
          type: "CAPACITY",
        };
      case "USAGE":
        return {
          ...UsagePlanFeeSerializer.parse(json, path),
          type: "USAGE",
        };
      case "EXTRA_RECURRING":
        return {
          ...ExtraRecurringPlanFeeSerializer.parse(json, path),
          type: "EXTRA_RECURRING",
        };
      case "ONE_TIME":
        return {
          ...OneTimePlanFeeSerializer.parse(json, path),
          type: "ONE_TIME",
        };
      default:
        // A variant added to the API after this SDK was generated, kept as received.
        return json;
    }
  },

  serialize(value: Fee): any {
    switch (value.type) {
      case "RATE":
        return {
          ...RatePlanFeeSerializer.serialize(value),
          type: "RATE",
        };
      case "SLOT":
        return {
          ...SlotPlanFeeSerializer.serialize(value),
          type: "SLOT",
        };
      case "CAPACITY":
        return {
          ...CapacityPlanFeeSerializer.serialize(value),
          type: "CAPACITY",
        };
      case "USAGE":
        return {
          ...UsagePlanFeeSerializer.serialize(value),
          type: "USAGE",
        };
      case "EXTRA_RECURRING":
        return {
          ...ExtraRecurringPlanFeeSerializer.serialize(value),
          type: "EXTRA_RECURRING",
        };
      case "ONE_TIME":
        return {
          ...OneTimePlanFeeSerializer.serialize(value),
          type: "ONE_TIME",
        };
      default:
        return value;
    }
  },
};
