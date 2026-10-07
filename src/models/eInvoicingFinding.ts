// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";
/** One rule the document did not satisfy, in the standard's own vocabulary. */
export interface EInvoicingFinding {
  hint?: string | null | undefined;
  message: string;
  /** The rule identifier — "BR-11", "PEPPOL-EN16931-R003". */
  rule: string;
  /** The business term path it is about — "BG-8/BT-55". */
  term: string;
}

/** Converts `EInvoicingFinding` values from (`parse`) and to (`serialize`) their JSON form. */
export const EInvoicingFindingSerializer = {
  parse(json: any, path = "$"): EInvoicingFinding {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["hint", "message", "rule", "term"]),
      hint:
        json["hint"] != null ? decodeString(json["hint"], path, "hint") : json["hint"],
      message: decodeString(json["message"], path, "message"),
      rule: decodeString(json["rule"], path, "rule"),
      term: decodeString(json["term"], path, "term"),
    };
  },

  serialize(value: EInvoicingFinding): any {
    return {
      ...extraProperties(value, ["hint", "message", "rule", "term"]),
      hint: value.hint,
      message: value.message,
      rule: value.rule,
      term: value.term,
    };
  },
};
