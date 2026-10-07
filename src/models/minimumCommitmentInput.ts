// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import {
  type MinimumCommitmentInputScope,
  MinimumCommitmentInputScopeSerializer,
} from "./minimumCommitmentInputScope.js";

export interface MinimumCommitmentInput {
  /** Decimal string in the plan currency. */
  amount: string;
  scope: MinimumCommitmentInputScope;
}

/** Converts `MinimumCommitmentInput` values from (`parse`) and to (`serialize`) their JSON form. */
export const MinimumCommitmentInputSerializer = {
  parse(json: any, path = "$"): MinimumCommitmentInput {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["amount", "scope"]),
      amount: decodeString(json["amount"], path, "amount"),
      scope: MinimumCommitmentInputScopeSerializer.parse(
        json["scope"],
        decodePath(path, "scope")
      ),
    };
  },

  serialize(value: MinimumCommitmentInput): any {
    return {
      ...extraProperties(value, ["amount", "scope"]),
      amount: value.amount,
      scope: MinimumCommitmentInputScopeSerializer.serialize(value.scope),
    };
  },
};
