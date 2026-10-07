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
import { type CouponId, CouponIdSerializer } from "./couponId.js";
import { type PlanId, PlanIdSerializer } from "./planId.js";

export interface Coupon {
  archivedAt?: Date | null | undefined;
  code: string;
  createdAt: Date;
  description?: string | null | undefined;
  disabled: boolean;
  discount: CouponDiscount;
  expiresAt?: Date | null | undefined;
  id: CouponId;
  planIds: PlanId[];
  recurringValue?: number | null | undefined;
  redemptionCount: number;
  redemptionLimit?: number | null | undefined;
  reusable: boolean;
}

/** Converts `Coupon` values from (`parse`) and to (`serialize`) their JSON form. */
export const CouponSerializer = {
  parse(json: any, path = "$"): Coupon {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "archived_at",
        "code",
        "created_at",
        "description",
        "disabled",
        "discount",
        "expires_at",
        "id",
        "plan_ids",
        "recurring_value",
        "redemption_count",
        "redemption_limit",
        "reusable",
      ]),
      archivedAt:
        json["archived_at"] != null
          ? decodeDateTime(json["archived_at"], path, "archived_at")
          : json["archived_at"],
      code: decodeString(json["code"], path, "code"),
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      description:
        json["description"] != null
          ? decodeString(json["description"], path, "description")
          : json["description"],
      disabled: decodeBoolean(json["disabled"], path, "disabled"),
      discount: CouponDiscountSerializer.parse(
        json["discount"],
        decodePath(path, "discount")
      ),
      expiresAt:
        json["expires_at"] != null
          ? decodeDateTime(json["expires_at"], path, "expires_at")
          : json["expires_at"],
      id: CouponIdSerializer.parse(json["id"], decodePath(path, "id")),
      planIds: decodeList(
        json["plan_ids"],
        path,
        "plan_ids",
        (item: any, p: string, i: number) =>
          PlanIdSerializer.parse(item, decodePath(p, i))
      ),
      recurringValue:
        json["recurring_value"] != null
          ? decodeInteger(json["recurring_value"], path, "recurring_value")
          : json["recurring_value"],
      redemptionCount: decodeInteger(json["redemption_count"], path, "redemption_count"),
      redemptionLimit:
        json["redemption_limit"] != null
          ? decodeInteger(json["redemption_limit"], path, "redemption_limit")
          : json["redemption_limit"],
      reusable: decodeBoolean(json["reusable"], path, "reusable"),
    };
  },

  serialize(value: Coupon): any {
    return {
      ...extraProperties(value, [
        "archivedAt",
        "code",
        "createdAt",
        "description",
        "disabled",
        "discount",
        "expiresAt",
        "id",
        "planIds",
        "recurringValue",
        "redemptionCount",
        "redemptionLimit",
        "reusable",
      ]),
      archived_at: value.archivedAt,
      code: value.code,
      created_at: value.createdAt,
      description: value.description,
      disabled: value.disabled,
      discount: CouponDiscountSerializer.serialize(value.discount),
      expires_at: value.expiresAt,
      id: CouponIdSerializer.serialize(value.id),
      plan_ids: value.planIds.map((item: any) => PlanIdSerializer.serialize(item)),
      recurring_value: value.recurringValue,
      redemption_count: value.redemptionCount,
      redemption_limit: value.redemptionLimit,
      reusable: value.reusable,
    };
  },
};
