// this file is @generated
import { decodeString } from "../decode.js";
/** Why the payment provider declined a charge. */
export const DeclineKind = {
  InsufficientFunds: "INSUFFICIENT_FUNDS",
  DoNotHonor: "DO_NOT_HONOR",
  CardExpired: "CARD_EXPIRED",
  AuthenticationRequired: "AUTHENTICATION_REQUIRED",
  MandateInactive: "MANDATE_INACTIVE",
  Fraud: "FRAUD",
  ProcessingError: "PROCESSING_ERROR",
  Other: "OTHER",
} as const;
export type DeclineKind = (typeof DeclineKind)[keyof typeof DeclineKind] | (string & {});

/** Converts `DeclineKind` values from (`parse`) and to (`serialize`) their JSON form. */
export const DeclineKindSerializer = {
  parse(json: any, path = "$"): DeclineKind {
    return decodeString(json, path);
  },

  serialize(value: DeclineKind): any {
    return value;
  },
};
