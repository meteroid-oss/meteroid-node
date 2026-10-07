// this file is @generated
import { decodeString } from "../decode.js";

export const PlanTypeEnum = {
  Standard: "STANDARD",
  Free: "FREE",
  Custom: "CUSTOM",
} as const;
export type PlanTypeEnum =
  | (typeof PlanTypeEnum)[keyof typeof PlanTypeEnum]
  | (string & {});

/** Converts `PlanTypeEnum` values from (`parse`) and to (`serialize`) their JSON form. */
export const PlanTypeEnumSerializer = {
  parse(json: any, path = "$"): PlanTypeEnum {
    return decodeString(json, path);
  },

  serialize(value: PlanTypeEnum): any {
    return value;
  },
};
