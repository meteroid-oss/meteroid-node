// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeInteger,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type CreditPackExpiry, CreditPackExpirySerializer } from "./creditPackExpiry.js";
import {
  type CreditPackRollover,
  CreditPackRolloverSerializer,
} from "./creditPackRollover.js";
import { type CreditPackUnit, CreditPackUnitSerializer } from "./creditPackUnit.js";
/**
 * A credit pack: charged like a fixed fee, it grants `credit_amount` × `quantity` of credit once
 * paid, in the subscription currency or in `credit_unit`. A zero `unit_price` makes it credit
 * included with the plan (promotional). A currency pack priced below its credit grants the price
 * paid as paid credit and the difference as promotional bonus credit, which applies before tax.
 */
export interface CreditFee {
  /**
   * Credit granted per pack, in major units of the subscription currency, or a number of
   * credits of `credit_unit` when set.
   */
  creditAmount: string;
  creditUnit?: CreditPackUnit | null | undefined;
  expiry?: CreditPackExpiry | null | undefined;
  /**
   * When true, billed and granted once, on the subscription's first invoice, instead of every
   * period.
   */
  once?: boolean | undefined;
  /** Packs billed and granted each time. */
  quantity: number;
  rollover?: CreditPackRollover | null | undefined;
  type: "CREDIT";
  /** Price of one pack, in major units of the subscription currency. */
  unitPrice: string;
}

/** Converts `CreditFee` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditFeeSerializer = {
  parse(json: any, path = "$"): CreditFee {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "credit_amount",
        "credit_unit",
        "expiry",
        "once",
        "quantity",
        "rollover",
        "type",
        "unit_price",
      ]),
      creditAmount: decodeString(json["credit_amount"], path, "credit_amount"),
      creditUnit:
        json["credit_unit"] != null
          ? CreditPackUnitSerializer.parse(
              json["credit_unit"],
              decodePath(path, "credit_unit")
            )
          : json["credit_unit"],
      expiry:
        json["expiry"] != null
          ? CreditPackExpirySerializer.parse(json["expiry"], decodePath(path, "expiry"))
          : json["expiry"],
      once: json["once"] != null ? decodeBoolean(json["once"], path, "once") : undefined,
      quantity: decodeInteger(json["quantity"], path, "quantity"),
      rollover:
        json["rollover"] != null
          ? CreditPackRolloverSerializer.parse(
              json["rollover"],
              decodePath(path, "rollover")
            )
          : json["rollover"],
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "CREDIT")
          : "CREDIT",
      unitPrice: decodeString(json["unit_price"], path, "unit_price"),
    };
  },

  serialize(value: CreditFee): any {
    return {
      ...extraProperties(value, [
        "creditAmount",
        "creditUnit",
        "expiry",
        "once",
        "quantity",
        "rollover",
        "type",
        "unitPrice",
      ]),
      credit_amount: value.creditAmount,
      credit_unit:
        value.creditUnit != null
          ? CreditPackUnitSerializer.serialize(value.creditUnit)
          : value.creditUnit,
      expiry:
        value.expiry != null
          ? CreditPackExpirySerializer.serialize(value.expiry)
          : value.expiry,
      once: value.once,
      quantity: value.quantity,
      rollover:
        value.rollover != null
          ? CreditPackRolloverSerializer.serialize(value.rollover)
          : value.rollover,
      type: value.type ?? "CREDIT",
      unit_price: value.unitPrice,
    };
  },
};
