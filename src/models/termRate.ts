// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import {
  type BillingPeriodEnum,
  BillingPeriodEnumSerializer,
} from "./billingPeriodEnum.js";

export interface TermRate {
  price: string;
  term: BillingPeriodEnum;
}

/** Converts `TermRate` values from (`parse`) and to (`serialize`) their JSON form. */
export const TermRateSerializer = {
  parse(json: any, path = "$"): TermRate {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["price", "term"]),
      price: decodeString(json["price"], path, "price"),
      term: BillingPeriodEnumSerializer.parse(json["term"], decodePath(path, "term")),
    };
  },

  serialize(value: TermRate): any {
    return {
      ...extraProperties(value, ["price", "term"]),
      price: value.price,
      term: BillingPeriodEnumSerializer.serialize(value.term),
    };
  },
};
