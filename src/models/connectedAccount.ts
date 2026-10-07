// this file is @generated
import { extraProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath, decodeString } from "../decode.js";
import {
  type ConnectedAccountId,
  ConnectedAccountIdSerializer,
} from "./connectedAccountId.js";
import { type ConnectionStatus, ConnectionStatusSerializer } from "./connectionStatus.js";
import { type ConnectionType, ConnectionTypeSerializer } from "./connectionType.js";
import { type CountryCode, CountryCodeSerializer } from "./countryCode.js";
import { type CustomerId, CustomerIdSerializer } from "./customerId.js";
import { type OnboardingMode, OnboardingModeSerializer } from "./onboardingMode.js";
import { type OrganizationId, OrganizationIdSerializer } from "./organizationId.js";
import { type TenantId, TenantIdSerializer } from "./tenantId.js";
/** A connected account (relationship between platform and connected org) */
export interface ConnectedAccount {
  connectedOrganizationId?: OrganizationId | null | undefined;
  connectedTenantId?: TenantId | null | undefined;
  connectionType: ConnectionType;
  createdAt: Date;
  id: ConnectedAccountId;
  metadata?: unknown | undefined;
  onboardingCompletedAt?: Date | null | undefined;
  onboardingMode: OnboardingMode;
  pendingCountry?: CountryCode | null | undefined;
  /** Email of the user being invited (express flow only) */
  pendingEmail?: string | null | undefined;
  /** Name of the organization to be created (express flow only) */
  pendingOrganizationName?: string | null | undefined;
  platformCustomerId?: CustomerId | null | undefined;
  platformOrganizationId: OrganizationId;
  revokedAt?: Date | null | undefined;
  status: ConnectionStatus;
}

/** Converts `ConnectedAccount` values from (`parse`) and to (`serialize`) their JSON form. */
export const ConnectedAccountSerializer = {
  parse(json: any, path = "$"): ConnectedAccount {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "connected_organization_id",
        "connected_tenant_id",
        "connection_type",
        "created_at",
        "id",
        "metadata",
        "onboarding_completed_at",
        "onboarding_mode",
        "pending_country",
        "pending_email",
        "pending_organization_name",
        "platform_customer_id",
        "platform_organization_id",
        "revoked_at",
        "status",
      ]),
      connectedOrganizationId:
        json["connected_organization_id"] != null
          ? OrganizationIdSerializer.parse(
              json["connected_organization_id"],
              decodePath(path, "connected_organization_id")
            )
          : json["connected_organization_id"],
      connectedTenantId:
        json["connected_tenant_id"] != null
          ? TenantIdSerializer.parse(
              json["connected_tenant_id"],
              decodePath(path, "connected_tenant_id")
            )
          : json["connected_tenant_id"],
      connectionType: ConnectionTypeSerializer.parse(
        json["connection_type"],
        decodePath(path, "connection_type")
      ),
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      id: ConnectedAccountIdSerializer.parse(json["id"], decodePath(path, "id")),
      metadata: json["metadata"],
      onboardingCompletedAt:
        json["onboarding_completed_at"] != null
          ? decodeDateTime(
              json["onboarding_completed_at"],
              path,
              "onboarding_completed_at"
            )
          : json["onboarding_completed_at"],
      onboardingMode: OnboardingModeSerializer.parse(
        json["onboarding_mode"],
        decodePath(path, "onboarding_mode")
      ),
      pendingCountry:
        json["pending_country"] != null
          ? CountryCodeSerializer.parse(
              json["pending_country"],
              decodePath(path, "pending_country")
            )
          : json["pending_country"],
      pendingEmail:
        json["pending_email"] != null
          ? decodeString(json["pending_email"], path, "pending_email")
          : json["pending_email"],
      pendingOrganizationName:
        json["pending_organization_name"] != null
          ? decodeString(
              json["pending_organization_name"],
              path,
              "pending_organization_name"
            )
          : json["pending_organization_name"],
      platformCustomerId:
        json["platform_customer_id"] != null
          ? CustomerIdSerializer.parse(
              json["platform_customer_id"],
              decodePath(path, "platform_customer_id")
            )
          : json["platform_customer_id"],
      platformOrganizationId: OrganizationIdSerializer.parse(
        json["platform_organization_id"],
        decodePath(path, "platform_organization_id")
      ),
      revokedAt:
        json["revoked_at"] != null
          ? decodeDateTime(json["revoked_at"], path, "revoked_at")
          : json["revoked_at"],
      status: ConnectionStatusSerializer.parse(
        json["status"],
        decodePath(path, "status")
      ),
    };
  },

  serialize(value: ConnectedAccount): any {
    return {
      ...extraProperties(value, [
        "connectedOrganizationId",
        "connectedTenantId",
        "connectionType",
        "createdAt",
        "id",
        "metadata",
        "onboardingCompletedAt",
        "onboardingMode",
        "pendingCountry",
        "pendingEmail",
        "pendingOrganizationName",
        "platformCustomerId",
        "platformOrganizationId",
        "revokedAt",
        "status",
      ]),
      connected_organization_id:
        value.connectedOrganizationId != null
          ? OrganizationIdSerializer.serialize(value.connectedOrganizationId)
          : value.connectedOrganizationId,
      connected_tenant_id:
        value.connectedTenantId != null
          ? TenantIdSerializer.serialize(value.connectedTenantId)
          : value.connectedTenantId,
      connection_type: ConnectionTypeSerializer.serialize(value.connectionType),
      created_at: value.createdAt,
      id: ConnectedAccountIdSerializer.serialize(value.id),
      metadata: value.metadata,
      onboarding_completed_at: value.onboardingCompletedAt,
      onboarding_mode: OnboardingModeSerializer.serialize(value.onboardingMode),
      pending_country:
        value.pendingCountry != null
          ? CountryCodeSerializer.serialize(value.pendingCountry)
          : value.pendingCountry,
      pending_email: value.pendingEmail,
      pending_organization_name: value.pendingOrganizationName,
      platform_customer_id:
        value.platformCustomerId != null
          ? CustomerIdSerializer.serialize(value.platformCustomerId)
          : value.platformCustomerId,
      platform_organization_id: OrganizationIdSerializer.serialize(
        value.platformOrganizationId
      ),
      revoked_at: value.revokedAt,
      status: ConnectionStatusSerializer.serialize(value.status),
    };
  },
};
