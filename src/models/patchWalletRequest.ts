// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeInteger,
  decodeList,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import {
  type AutoTopUpWriteRequest,
  AutoTopUpWriteRequestSerializer,
} from "./autoTopUpWriteRequest.js";
import { type UsageAtZero, UsageAtZeroSerializer } from "./usageAtZero.js";
/** Partial update of a wallet's configuration: omit a field to leave it unchanged. */
export interface PatchWalletRequest {
  autoTopUp?: AutoTopUpWriteRequest | null | undefined;
  /**
   * Ascending, distinct, at most 5, non-negative. Omit to leave unchanged; an empty list
   * clears every threshold.
   */
  lowBalanceThresholds?: number[] | null | undefined;
  /**
   * Credit unit wallets: the price this customer agreed for one credit, in major units of the
   * customer's currency, as a decimal string (positive, at most 12 decimal places). Purchases
   * and automatic top-ups default to it instead of the list price. Omit to leave it unchanged;
   * `null` returns the customer to the list price. A change applies to purchases quoted after
   * it. An automatic top-up keeps running at the new price when it is at or below the price
   * its terms were authorized at, and stops until they are confirmed again when it is above.
   */
  unitPrice?: string | null | undefined;
  usageAtZero?: UsageAtZero | null | undefined;
}

/** Converts `PatchWalletRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const PatchWalletRequestSerializer = {
  parse(json: any, path = "$"): PatchWalletRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "auto_top_up",
        "low_balance_thresholds",
        "unit_price",
        "usage_at_zero",
      ]),
      autoTopUp:
        json["auto_top_up"] != null
          ? AutoTopUpWriteRequestSerializer.parse(
              json["auto_top_up"],
              decodePath(path, "auto_top_up")
            )
          : json["auto_top_up"],
      lowBalanceThresholds:
        json["low_balance_thresholds"] != null
          ? decodeList(
              json["low_balance_thresholds"],
              path,
              "low_balance_thresholds",
              (item: any, p: string, i: number) => decodeInteger(item, p, i)
            )
          : json["low_balance_thresholds"],
      unitPrice:
        json["unit_price"] != null
          ? decodeString(json["unit_price"], path, "unit_price")
          : json["unit_price"],
      usageAtZero:
        json["usage_at_zero"] != null
          ? UsageAtZeroSerializer.parse(
              json["usage_at_zero"],
              decodePath(path, "usage_at_zero")
            )
          : json["usage_at_zero"],
    };
  },

  serialize(value: PatchWalletRequest): any {
    return {
      ...extraProperties(value, [
        "autoTopUp",
        "lowBalanceThresholds",
        "unitPrice",
        "usageAtZero",
      ]),
      auto_top_up:
        value.autoTopUp != null
          ? AutoTopUpWriteRequestSerializer.serialize(value.autoTopUp)
          : value.autoTopUp,
      low_balance_thresholds: value.lowBalanceThresholds,
      unit_price: value.unitPrice,
      usage_at_zero:
        value.usageAtZero != null
          ? UsageAtZeroSerializer.serialize(value.usageAtZero)
          : value.usageAtZero,
    };
  },
};
