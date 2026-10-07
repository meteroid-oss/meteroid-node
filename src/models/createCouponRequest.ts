// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeDateTime,
  decodeInteger,
  decodeList,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type CouponDiscount, CouponDiscountSerializer } from "./couponDiscount.js";
import { type PlanId, PlanIdSerializer } from "./planId.js";

export interface CreateCouponRequest {
  code: string;
  description?: string | null | undefined;
  discount: CouponDiscount;
  expiresAt?: Date | null | undefined;
  planIds?: PlanId[] | undefined;
  recurringValue?: number | null | undefined;
  redemptionLimit?: number | null | undefined;
  reusable?: boolean | undefined;
}

/** Converts `CreateCouponRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreateCouponRequestSerializer = {
  parse(json: any, path = "$"): CreateCouponRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "code",
        "description",
        "discount",
        "expires_at",
        "plan_ids",
        "recurring_value",
        "redemption_limit",
        "reusable",
      ]),
      code: decodeString(json["code"], path, "code"),
      description:
        json["description"] != null
          ? decodeString(json["description"], path, "description")
          : json["description"],
      discount: CouponDiscountSerializer.parse(
        json["discount"],
        decodePath(path, "discount")
      ),
      expiresAt:
        json["expires_at"] != null
          ? decodeDateTime(json["expires_at"], path, "expires_at")
          : json["expires_at"],
      planIds:
        json["plan_ids"] != null
          ? decodeList(
              json["plan_ids"],
              path,
              "plan_ids",
              (item: any, p: string, i: number) =>
                PlanIdSerializer.parse(item, decodePath(p, i))
            )
          : undefined,
      recurringValue:
        json["recurring_value"] != null
          ? decodeInteger(json["recurring_value"], path, "recurring_value")
          : json["recurring_value"],
      redemptionLimit:
        json["redemption_limit"] != null
          ? decodeInteger(json["redemption_limit"], path, "redemption_limit")
          : json["redemption_limit"],
      reusable:
        json["reusable"] != null
          ? decodeBoolean(json["reusable"], path, "reusable")
          : undefined,
    };
  },

  serialize(value: CreateCouponRequest): any {
    return {
      ...extraProperties(value, [
        "code",
        "description",
        "discount",
        "expiresAt",
        "planIds",
        "recurringValue",
        "redemptionLimit",
        "reusable",
      ]),
      code: value.code,
      description: value.description,
      discount: CouponDiscountSerializer.serialize(value.discount),
      expires_at: value.expiresAt,
      plan_ids:
        value.planIds != null
          ? value.planIds.map((item: any) => PlanIdSerializer.serialize(item))
          : undefined,
      recurring_value: value.recurringValue,
      redemption_limit: value.redemptionLimit,
      reusable: value.reusable,
    };
  },
};
