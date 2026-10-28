// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type CreditPackExpiry, CreditPackExpirySerializer } from "./creditPackExpiry.js";
/**
 * Unspent included credit carried once into a new grant when it expires, spent before the next
 * period's credit.
 */
export interface CreditPackRollover {
  /** Term of the rolled credit from the original expiry: DAY or MONTH. */
  expiry: CreditPackExpiry;
  /** Cap per pack, in the pack's credit; absent carries all that is left. */
  maxAmount?: string | null | undefined;
}

/** Converts `CreditPackRollover` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditPackRolloverSerializer = {
  parse(json: any, path = "$"): CreditPackRollover {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["expiry", "max_amount"]),
      expiry: CreditPackExpirySerializer.parse(
        json["expiry"],
        decodePath(path, "expiry")
      ),
      maxAmount:
        json["max_amount"] != null
          ? decodeString(json["max_amount"], path, "max_amount")
          : json["max_amount"],
    };
  },

  serialize(value: CreditPackRollover): any {
    return {
      ...extraProperties(value, ["expiry", "maxAmount"]),
      expiry: CreditPackExpirySerializer.serialize(value.expiry),
      max_amount: value.maxAmount,
    };
  },
};
