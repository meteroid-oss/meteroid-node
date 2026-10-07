// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodePath, decodeString } from "../decode.js";
import {
  type BillingPeriodEnum,
  BillingPeriodEnumSerializer,
} from "./billingPeriodEnum.js";
import { type BillingType, BillingTypeSerializer } from "./billingType.js";
/** Extra recurring fee */
export interface ExtraRecurringPlanFee {
  billingType: BillingType;
  cadence: BillingPeriodEnum;
  quantity: number;
  unitPrice: string;
}

/** Converts `ExtraRecurringPlanFee` values from (`parse`) and to (`serialize`) their JSON form. */
export const ExtraRecurringPlanFeeSerializer = {
  parse(json: any, path = "$"): ExtraRecurringPlanFee {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["billing_type", "cadence", "quantity", "unit_price"]),
      billingType: BillingTypeSerializer.parse(
        json["billing_type"],
        decodePath(path, "billing_type")
      ),
      cadence: BillingPeriodEnumSerializer.parse(
        json["cadence"],
        decodePath(path, "cadence")
      ),
      quantity: decodeInteger(json["quantity"], path, "quantity"),
      unitPrice: decodeString(json["unit_price"], path, "unit_price"),
    };
  },

  serialize(value: ExtraRecurringPlanFee): any {
    return {
      ...extraProperties(value, ["billingType", "cadence", "quantity", "unitPrice"]),
      billing_type: BillingTypeSerializer.serialize(value.billingType),
      cadence: BillingPeriodEnumSerializer.serialize(value.cadence),
      quantity: value.quantity,
      unit_price: value.unitPrice,
    };
  },
};
