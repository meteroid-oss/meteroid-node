// this file is @generated
import { decodeString } from "../decode.js";

export const SlotDowngradePolicyEnum = {
  RemoveAtEndOfPeriod: "REMOVE_AT_END_OF_PERIOD",
} as const;
export type SlotDowngradePolicyEnum =
  | (typeof SlotDowngradePolicyEnum)[keyof typeof SlotDowngradePolicyEnum]
  | (string & {});

/** Converts `SlotDowngradePolicyEnum` values from (`parse`) and to (`serialize`) their JSON form. */
export const SlotDowngradePolicyEnumSerializer = {
  parse(json: any, path = "$"): SlotDowngradePolicyEnum {
    return decodeString(json, path);
  },

  serialize(value: SlotDowngradePolicyEnum): any {
    return value;
  },
};
