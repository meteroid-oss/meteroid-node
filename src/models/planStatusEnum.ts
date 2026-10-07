// this file is @generated
import { decodeString } from "../decode.js";

export const PlanStatusEnum = {
  Draft: "DRAFT",
  Active: "ACTIVE",
  Inactive: "INACTIVE",
  Archived: "ARCHIVED",
} as const;
export type PlanStatusEnum =
  | (typeof PlanStatusEnum)[keyof typeof PlanStatusEnum]
  | (string & {});

/** Converts `PlanStatusEnum` values from (`parse`) and to (`serialize`) their JSON form. */
export const PlanStatusEnumSerializer = {
  parse(json: any, path = "$"): PlanStatusEnum {
    return decodeString(json, path);
  },

  serialize(value: PlanStatusEnum): any {
    return value;
  },
};
