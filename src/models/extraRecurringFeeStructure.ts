// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import {
  type ExtraRecurringBillingTypeEnum,
  ExtraRecurringBillingTypeEnumSerializer,
} from "./extraRecurringBillingTypeEnum.js";

export interface ExtraRecurringFeeStructure {
  billingType: ExtraRecurringBillingTypeEnum;
  type: "EXTRA_RECURRING";
}

/** Converts `ExtraRecurringFeeStructure` values from (`parse`) and to (`serialize`) their JSON form. */
export const ExtraRecurringFeeStructureSerializer = {
  parse(json: any, path = "$"): ExtraRecurringFeeStructure {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["billing_type", "type"]),
      billingType: ExtraRecurringBillingTypeEnumSerializer.parse(
        json["billing_type"],
        decodePath(path, "billing_type")
      ),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "EXTRA_RECURRING")
          : "EXTRA_RECURRING",
    };
  },

  serialize(value: ExtraRecurringFeeStructure): any {
    return {
      ...extraProperties(value, ["billingType", "type"]),
      billing_type: ExtraRecurringBillingTypeEnumSerializer.serialize(value.billingType),
      type: value.type ?? "EXTRA_RECURRING",
    };
  },
};
