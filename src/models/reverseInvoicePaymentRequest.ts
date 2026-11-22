// this file is @generated
import { extraProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath, decodeString } from "../decode.js";
import { type ReversalKind, ReversalKindSerializer } from "./reversalKind.js";

export interface ReverseInvoicePaymentRequest {
  /**
   * `CHARGEBACK`, `DEBTOR_RECALL` and `DISPUTE` leave the invoice paid and mark the payment
   * disputed. Any other kind makes the amount due again.
   */
  kind: ReversalKind;
  /** Additional details about the reversal. */
  reason?: string | null | undefined;
  /** When the reversal occurred, at most a day ahead. Defaults to the current time. */
  reversedAt?: Date | null | undefined;
}

/** Converts `ReverseInvoicePaymentRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const ReverseInvoicePaymentRequestSerializer = {
  parse(json: any, path = "$"): ReverseInvoicePaymentRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["kind", "reason", "reversed_at"]),
      kind: ReversalKindSerializer.parse(json["kind"], decodePath(path, "kind")),
      reason:
        json["reason"] != null
          ? decodeString(json["reason"], path, "reason")
          : json["reason"],
      reversedAt:
        json["reversed_at"] != null
          ? decodeDateTime(json["reversed_at"], path, "reversed_at")
          : json["reversed_at"],
    };
  },

  serialize(value: ReverseInvoicePaymentRequest): any {
    return {
      ...extraProperties(value, ["kind", "reason", "reversedAt"]),
      kind: ReversalKindSerializer.serialize(value.kind),
      reason: value.reason,
      reversed_at: value.reversedAt,
    };
  },
};
