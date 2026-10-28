// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";
/** The credit unit a plan's usage price is expressed in, with its value in the plan currency. */
export interface PlanFeeCreditUnit {
  /** An active credit unit of the tenant (`GET /api/v1/credit-units`). */
  creditUnitId: string;
  /**
   * Plan-currency major units per credit (e.g. "0.01"), positive: the money billed for each
   * credit the customer's balance in the unit does not cover, before tax.
   */
  rate: string;
}

/** Converts `PlanFeeCreditUnit` values from (`parse`) and to (`serialize`) their JSON form. */
export const PlanFeeCreditUnitSerializer = {
  parse(json: any, path = "$"): PlanFeeCreditUnit {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["credit_unit_id", "rate"]),
      creditUnitId: decodeString(json["credit_unit_id"], path, "credit_unit_id"),
      rate: decodeString(json["rate"], path, "rate"),
    };
  },

  serialize(value: PlanFeeCreditUnit): any {
    return {
      ...extraProperties(value, ["creditUnitId", "rate"]),
      credit_unit_id: value.creditUnitId,
      rate: value.rate,
    };
  },
};
