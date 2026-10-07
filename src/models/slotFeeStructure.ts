// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import {
  type SlotDowngradePolicyEnum,
  SlotDowngradePolicyEnumSerializer,
} from "./slotDowngradePolicyEnum.js";
import {
  type SlotUpgradePolicyEnum,
  SlotUpgradePolicyEnumSerializer,
} from "./slotUpgradePolicyEnum.js";

export interface SlotFeeStructure {
  downgradePolicy: SlotDowngradePolicyEnum;
  slotUnitName: string;
  upgradePolicy: SlotUpgradePolicyEnum;
}

/** Converts `SlotFeeStructure` values from (`parse`) and to (`serialize`) their JSON form. */
export const SlotFeeStructureSerializer = {
  parse(json: any, path = "$"): SlotFeeStructure {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["downgrade_policy", "slot_unit_name", "upgrade_policy"]),
      downgradePolicy: SlotDowngradePolicyEnumSerializer.parse(
        json["downgrade_policy"],
        decodePath(path, "downgrade_policy")
      ),
      slotUnitName: decodeString(json["slot_unit_name"], path, "slot_unit_name"),
      upgradePolicy: SlotUpgradePolicyEnumSerializer.parse(
        json["upgrade_policy"],
        decodePath(path, "upgrade_policy")
      ),
    };
  },

  serialize(value: SlotFeeStructure): any {
    return {
      ...extraProperties(value, ["downgradePolicy", "slotUnitName", "upgradePolicy"]),
      downgrade_policy: SlotDowngradePolicyEnumSerializer.serialize(
        value.downgradePolicy
      ),
      slot_unit_name: value.slotUnitName,
      upgrade_policy: SlotUpgradePolicyEnumSerializer.serialize(value.upgradePolicy),
    };
  },
};
