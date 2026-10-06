// this file is @generated
/** Why a payment was involuntarily clawed back. */
export const ReversalKind = {
  Refund: "REFUND",
  Chargeback: "CHARGEBACK",
  DebtorRecall: "DEBTOR_RECALL",
  InsufficientFunds: "INSUFFICIENT_FUNDS",
  MandateInvalid: "MANDATE_INVALID",
  Returned: "RETURNED",
  Dispute: "DISPUTE",
  Other: "OTHER",
} as const;
export type ReversalKind =
  | (typeof ReversalKind)[keyof typeof ReversalKind]
  | (string & {});

/** Converts `ReversalKind` values from (`parse`) and to (`serialize`) their JSON form. */
export const ReversalKindSerializer = {
  parse(json: any): ReversalKind {
    return json;
  },

  serialize(value: ReversalKind): any {
    return value;
  },
};
