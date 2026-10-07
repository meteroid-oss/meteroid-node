// this file is @generated
import { decodeString } from "../decode.js";

export const SlotUpgradePolicyEnum = {
  Prorated: "PRORATED",
} as const;
export type SlotUpgradePolicyEnum =
  | (typeof SlotUpgradePolicyEnum)[keyof typeof SlotUpgradePolicyEnum]
  | (string & {});

/** Converts `SlotUpgradePolicyEnum` values from (`parse`) and to (`serialize`) their JSON form. */
export const SlotUpgradePolicyEnumSerializer = {
  parse(json: any, path = "$"): SlotUpgradePolicyEnum {
    return decodeString(json, path);
  },

  serialize(value: SlotUpgradePolicyEnum): any {
    return value;
  },
};
