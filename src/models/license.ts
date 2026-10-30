// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeDateTime,
  decodeInteger,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type CustomerId, CustomerIdSerializer } from "./customerId.js";
import { type LicenseId, LicenseIdSerializer } from "./licenseId.js";
import { type LicenseStatus, LicenseStatusSerializer } from "./licenseStatus.js";
import { type SubscriptionId, SubscriptionIdSerializer } from "./subscriptionId.js";

export interface License {
  /** Issued automatically for a subscription to a plan that issues licenses. */
  autoIssued: boolean;
  createdAt: Date;
  customerId: CustomerId;
  customerName: string;
  /** Whether the activation code can still be retrieved: only until activation or revocation. */
  hasActivationCode: boolean;
  id: LicenseId;
  /** The installation the license is bound to, once activated. */
  instanceId?: string | null | undefined;
  lastRefreshedAt?: Date | null | undefined;
  /** Issued as a signed offline license: never activated nor refreshed. */
  offline: boolean;
  planName?: string | null | undefined;
  revokedAt?: Date | null | undefined;
  /**
   * Revoked to stop at once: the installation drops its license on its next refresh instead
   * of keeping it until it expires.
   */
  revokedImmediately: boolean;
  status: LicenseStatus;
  subscriptionId?: SubscriptionId | null | undefined;
  /**
   * Lifetime of each license token the installation receives on refresh; for an offline
   * license, the lifetime it was issued with.
   */
  validityDays: number;
}

/** Converts `License` values from (`parse`) and to (`serialize`) their JSON form. */
export const LicenseSerializer = {
  parse(json: any, path = "$"): License {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "auto_issued",
        "created_at",
        "customer_id",
        "customer_name",
        "has_activation_code",
        "id",
        "instance_id",
        "last_refreshed_at",
        "offline",
        "plan_name",
        "revoked_at",
        "revoked_immediately",
        "status",
        "subscription_id",
        "validity_days",
      ]),
      autoIssued: decodeBoolean(json["auto_issued"], path, "auto_issued"),
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      customerId: CustomerIdSerializer.parse(
        json["customer_id"],
        decodePath(path, "customer_id")
      ),
      customerName: decodeString(json["customer_name"], path, "customer_name"),
      hasActivationCode: decodeBoolean(
        json["has_activation_code"],
        path,
        "has_activation_code"
      ),
      id: LicenseIdSerializer.parse(json["id"], decodePath(path, "id")),
      instanceId:
        json["instance_id"] != null
          ? decodeString(json["instance_id"], path, "instance_id")
          : json["instance_id"],
      lastRefreshedAt:
        json["last_refreshed_at"] != null
          ? decodeDateTime(json["last_refreshed_at"], path, "last_refreshed_at")
          : json["last_refreshed_at"],
      offline: decodeBoolean(json["offline"], path, "offline"),
      planName:
        json["plan_name"] != null
          ? decodeString(json["plan_name"], path, "plan_name")
          : json["plan_name"],
      revokedAt:
        json["revoked_at"] != null
          ? decodeDateTime(json["revoked_at"], path, "revoked_at")
          : json["revoked_at"],
      revokedImmediately: decodeBoolean(
        json["revoked_immediately"],
        path,
        "revoked_immediately"
      ),
      status: LicenseStatusSerializer.parse(json["status"], decodePath(path, "status")),
      subscriptionId:
        json["subscription_id"] != null
          ? SubscriptionIdSerializer.parse(
              json["subscription_id"],
              decodePath(path, "subscription_id")
            )
          : json["subscription_id"],
      validityDays: decodeInteger(json["validity_days"], path, "validity_days"),
    };
  },

  serialize(value: License): any {
    return {
      ...extraProperties(value, [
        "autoIssued",
        "createdAt",
        "customerId",
        "customerName",
        "hasActivationCode",
        "id",
        "instanceId",
        "lastRefreshedAt",
        "offline",
        "planName",
        "revokedAt",
        "revokedImmediately",
        "status",
        "subscriptionId",
        "validityDays",
      ]),
      auto_issued: value.autoIssued,
      created_at: value.createdAt,
      customer_id: CustomerIdSerializer.serialize(value.customerId),
      customer_name: value.customerName,
      has_activation_code: value.hasActivationCode,
      id: LicenseIdSerializer.serialize(value.id),
      instance_id: value.instanceId,
      last_refreshed_at: value.lastRefreshedAt,
      offline: value.offline,
      plan_name: value.planName,
      revoked_at: value.revokedAt,
      revoked_immediately: value.revokedImmediately,
      status: LicenseStatusSerializer.serialize(value.status),
      subscription_id:
        value.subscriptionId != null
          ? SubscriptionIdSerializer.serialize(value.subscriptionId)
          : value.subscriptionId,
      validity_days: value.validityDays,
    };
  },
};
