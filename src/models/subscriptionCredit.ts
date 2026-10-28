// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";
/** Credit on account that only one subscription can use. */
export interface SubscriptionCredit {
  /** In minor units of the wallet. */
  creditOnAccount: number;
  subscriptionId: string;
}

/** Converts `SubscriptionCredit` values from (`parse`) and to (`serialize`) their JSON form. */
export const SubscriptionCreditSerializer = {
  parse(json: any, path = "$"): SubscriptionCredit {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["credit_on_account", "subscription_id"]),
      creditOnAccount: decodeInteger(
        json["credit_on_account"],
        path,
        "credit_on_account"
      ),
      subscriptionId: decodeString(json["subscription_id"], path, "subscription_id"),
    };
  },

  serialize(value: SubscriptionCredit): any {
    return {
      ...extraProperties(value, ["creditOnAccount", "subscriptionId"]),
      credit_on_account: value.creditOnAccount,
      subscription_id: value.subscriptionId,
    };
  },
};
