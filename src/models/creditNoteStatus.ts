// this file is @generated
import { decodeString } from "../decode.js";

export const CreditNoteStatus = {
  Draft: "DRAFT",
  Finalized: "FINALIZED",
  Voided: "VOIDED",
} as const;
export type CreditNoteStatus =
  | (typeof CreditNoteStatus)[keyof typeof CreditNoteStatus]
  | (string & {});

/** Converts `CreditNoteStatus` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditNoteStatusSerializer = {
  parse(json: any, path = "$"): CreditNoteStatus {
    return decodeString(json, path);
  },

  serialize(value: CreditNoteStatus): any {
    return value;
  },
};
