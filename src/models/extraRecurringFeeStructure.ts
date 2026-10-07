// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath } from "../decode.js";
import {
  type ExtraRecurringBillingTypeEnum,
  ExtraRecurringBillingTypeEnumSerializer,
} from "./extraRecurringBillingTypeEnum.js";

export interface ExtraRecurringFeeStructure {
  billingType: ExtraRecurringBillingTypeEnum;
}

/** Converts `ExtraRecurringFeeStructure` values from (`parse`) and to (`serialize`) their JSON form. */
export const ExtraRecurringFeeStructureSerializer = {
  parse(json: any, path = "$"): ExtraRecurringFeeStructure {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["billing_type"]),
      billingType: ExtraRecurringBillingTypeEnumSerializer.parse(
        json["billing_type"],
        decodePath(path, "billing_type")
      ),
    };
  },

  serialize(value: ExtraRecurringFeeStructure): any {
    return {
      ...extraProperties(value, ["billingType"]),
      billing_type: ExtraRecurringBillingTypeEnumSerializer.serialize(value.billingType),
    };
  },
};
