// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodePath, decodeString } from "../decode.js";
import { type BillingTypeEnum, BillingTypeEnumSerializer } from "./billingTypeEnum.js";

export interface RecurringFee {
  billingType: BillingTypeEnum;
  quantity: number;
  rate: string;
  type: "RECURRING";
}

/** Converts `RecurringFee` values from (`parse`) and to (`serialize`) their JSON form. */
export const RecurringFeeSerializer = {
  parse(json: any, path = "$"): RecurringFee {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["billing_type", "quantity", "rate", "type"]),
      billingType: BillingTypeEnumSerializer.parse(
        json["billing_type"],
        decodePath(path, "billing_type")
      ),
      quantity: decodeInteger(json["quantity"], path, "quantity"),
      rate: decodeString(json["rate"], path, "rate"),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "RECURRING")
          : "RECURRING",
    };
  },

  serialize(value: RecurringFee): any {
    return {
      ...extraProperties(value, ["billingType", "quantity", "rate", "type"]),
      billing_type: BillingTypeEnumSerializer.serialize(value.billingType),
      quantity: value.quantity,
      rate: value.rate,
      type: value.type ?? "RECURRING",
    };
  },
};
