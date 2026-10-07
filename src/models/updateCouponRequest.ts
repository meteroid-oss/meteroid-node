// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath, decodeString } from "../decode.js";
import { type CouponDiscount, CouponDiscountSerializer } from "./couponDiscount.js";
import { type PlanId, PlanIdSerializer } from "./planId.js";

export interface UpdateCouponRequest {
  description?: string | null | undefined;
  discount?: CouponDiscount | null | undefined;
  planIds?: PlanId[] | null | undefined;
}

/** Converts `UpdateCouponRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const UpdateCouponRequestSerializer = {
  parse(json: any, path = "$"): UpdateCouponRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["description", "discount", "plan_ids"]),
      description:
        json["description"] != null
          ? decodeString(json["description"], path, "description")
          : json["description"],
      discount:
        json["discount"] != null
          ? CouponDiscountSerializer.parse(json["discount"], decodePath(path, "discount"))
          : json["discount"],
      planIds:
        json["plan_ids"] != null
          ? decodeList(
              json["plan_ids"],
              path,
              "plan_ids",
              (item: any, p: string, i: number) =>
                PlanIdSerializer.parse(item, decodePath(p, i))
            )
          : json["plan_ids"],
    };
  },

  serialize(value: UpdateCouponRequest): any {
    return {
      ...extraProperties(value, ["description", "discount", "planIds"]),
      description: value.description,
      discount:
        value.discount != null
          ? CouponDiscountSerializer.serialize(value.discount)
          : value.discount,
      plan_ids:
        value.planIds != null
          ? value.planIds.map((item: any) => PlanIdSerializer.serialize(item))
          : value.planIds,
    };
  },
};
