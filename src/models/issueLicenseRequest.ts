// this file is @generated
import { extraProperties } from "../json.js";
import { decodeBoolean, decodeInteger, decodeObject, decodeString } from "../decode.js";

export interface IssueLicenseRequest {
  /** Customer ID or alias */
  customerId: string;
  /**
   * Offline only. The installation's id as it reports it, up to 255 characters without
   * spaces: the license names it (`aud`) and stays bound to it. Without one, the license is
   * not tied to an installation.
   */
  instanceId?: string | null | undefined;
  /**
   * Delivers the license at once as a signed offline license, for an installation that
   * can't reach the license server: no activation code, no refresh. Default: false.
   */
  offline?: boolean | undefined;
  /**
   * Ties the license to this subscription of the customer: it is renewed while the
   * subscription is paid, and carries its plan's entitlements.
   */
  subscriptionId?: string | null | undefined;
  /**
   * Online: lifetime of each license token the installation refreshes, 1 to 31 days.
   * Default: 7. Offline: lifetime of the signed license, 1 to 400 days. Default: 365.
   */
  validityDays?: number | null | undefined;
}

/** Converts `IssueLicenseRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const IssueLicenseRequestSerializer = {
  parse(json: any, path = "$"): IssueLicenseRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "customer_id",
        "instance_id",
        "offline",
        "subscription_id",
        "validity_days",
      ]),
      customerId: decodeString(json["customer_id"], path, "customer_id"),
      instanceId:
        json["instance_id"] != null
          ? decodeString(json["instance_id"], path, "instance_id")
          : json["instance_id"],
      offline:
        json["offline"] != null
          ? decodeBoolean(json["offline"], path, "offline")
          : undefined,
      subscriptionId:
        json["subscription_id"] != null
          ? decodeString(json["subscription_id"], path, "subscription_id")
          : json["subscription_id"],
      validityDays:
        json["validity_days"] != null
          ? decodeInteger(json["validity_days"], path, "validity_days")
          : json["validity_days"],
    };
  },

  serialize(value: IssueLicenseRequest): any {
    return {
      ...extraProperties(value, [
        "customerId",
        "instanceId",
        "offline",
        "subscriptionId",
        "validityDays",
      ]),
      customer_id: value.customerId,
      instance_id: value.instanceId,
      offline: value.offline,
      subscription_id: value.subscriptionId,
      validity_days: value.validityDays,
    };
  },
};
