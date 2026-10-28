// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeInteger,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import {
  type BillingPeriodEnum,
  BillingPeriodEnumSerializer,
} from "./billingPeriodEnum.js";
import { type CreditPackExpiry, CreditPackExpirySerializer } from "./creditPackExpiry.js";
import {
  type CreditPackRollover,
  CreditPackRolloverSerializer,
} from "./creditPackRollover.js";
/**
 * Credit pack: charged `unit_price` × `quantity` in advance each billing period, it grants
 * `credit_amount` × `quantity` of credit, in the plan currency or in `credit_unit_id`, once paid.
 * A zero `unit_price` makes it credit included with the plan (promotional). A currency pack
 * priced below its credit (e.g. 500.00 buys 550.00) grants the price paid as paid credit and the
 * difference as promotional bonus credit, which applies before tax.
 */
export interface CreditPlanFee {
  cadence: BillingPeriodEnum;
  creditAmount: string;
  /**
   * The credit unit `credit_amount` is granted in; absent grants the plan currency. The pack is
   * paid in the plan currency, and taxed when sold if it grants a credit unit.
   */
  creditUnitId?: string | null | undefined;
  expiry?: CreditPackExpiry | null | undefined;
  /**
   * When true, the pack is billed and its credit granted once, on the subscription's first
   * invoice, instead of every period (e.g. a welcome credit). A plan change grants it on the
   * next invoice only if the subscription never received a one-time credit of the same
   * product; credit packs billed every period don't count. Cannot be combined with `rollover`.
   */
  once?: boolean | undefined;
  quantity: number;
  rollover?: CreditPackRollover | null | undefined;
  type: "CREDIT";
  unitPrice: string;
}

/** Converts `CreditPlanFee` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditPlanFeeSerializer = {
  parse(json: any, path = "$"): CreditPlanFee {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "cadence",
        "credit_amount",
        "credit_unit_id",
        "expiry",
        "once",
        "quantity",
        "rollover",
        "type",
        "unit_price",
      ]),
      cadence: BillingPeriodEnumSerializer.parse(
        json["cadence"],
        decodePath(path, "cadence")
      ),
      creditAmount: decodeString(json["credit_amount"], path, "credit_amount"),
      creditUnitId:
        json["credit_unit_id"] != null
          ? decodeString(json["credit_unit_id"], path, "credit_unit_id")
          : json["credit_unit_id"],
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

  serialize(value: CreditPlanFee): any {
    return {
      ...extraProperties(value, [
        "cadence",
        "creditAmount",
        "creditUnitId",
        "expiry",
        "once",
        "quantity",
        "rollover",
        "type",
        "unitPrice",
      ]),
      cadence: BillingPeriodEnumSerializer.serialize(value.cadence),
      credit_amount: value.creditAmount,
      credit_unit_id: value.creditUnitId,
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
