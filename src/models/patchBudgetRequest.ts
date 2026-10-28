// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeList, decodeObject, decodePath } from "../decode.js";
import { type BudgetBehavior, BudgetBehaviorSerializer } from "./budgetBehavior.js";
/** The currency or credit unit, and the subscription, are fixed at creation. */
export interface PatchBudgetRequest {
  amount?: number | null | undefined;
  behavior?: BudgetBehavior | null | undefined;
  /** The `version` you read; a newer stored version is refused with 409. */
  expectedVersion: number;
  thresholds?: number[] | null | undefined;
}

/** Converts `PatchBudgetRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const PatchBudgetRequestSerializer = {
  parse(json: any, path = "$"): PatchBudgetRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["amount", "behavior", "expected_version", "thresholds"]),
      amount:
        json["amount"] != null
          ? decodeInteger(json["amount"], path, "amount")
          : json["amount"],
      behavior:
        json["behavior"] != null
          ? BudgetBehaviorSerializer.parse(json["behavior"], decodePath(path, "behavior"))
          : json["behavior"],
      expectedVersion: decodeInteger(json["expected_version"], path, "expected_version"),
      thresholds:
        json["thresholds"] != null
          ? decodeList(
              json["thresholds"],
              path,
              "thresholds",
              (item: any, p: string, i: number) => decodeInteger(item, p, i)
            )
          : json["thresholds"],
    };
  },

  serialize(value: PatchBudgetRequest): any {
    return {
      ...extraProperties(value, ["amount", "behavior", "expectedVersion", "thresholds"]),
      amount: value.amount,
      behavior:
        value.behavior != null
          ? BudgetBehaviorSerializer.serialize(value.behavior)
          : value.behavior,
      expected_version: value.expectedVersion,
      thresholds: value.thresholds,
    };
  },
};
