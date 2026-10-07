// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import {
  type MinimumCommitmentScope,
  MinimumCommitmentScopeSerializer,
} from "./minimumCommitmentScope.js";

export interface MinimumCommitment {
  /** Decimal string in the plan currency, e.g. "100.00". */
  amount: string;
  scope: MinimumCommitmentScope;
}

/** Converts `MinimumCommitment` values from (`parse`) and to (`serialize`) their JSON form. */
export const MinimumCommitmentSerializer = {
  parse(json: any, path = "$"): MinimumCommitment {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["amount", "scope"]),
      amount: decodeString(json["amount"], path, "amount"),
      scope: MinimumCommitmentScopeSerializer.parse(
        json["scope"],
        decodePath(path, "scope")
      ),
    };
  },

  serialize(value: MinimumCommitment): any {
    return {
      ...extraProperties(value, ["amount", "scope"]),
      amount: value.amount,
      scope: MinimumCommitmentScopeSerializer.serialize(value.scope),
    };
  },
};
