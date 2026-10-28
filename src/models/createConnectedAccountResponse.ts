// this file is @generated
import { extraProperties, pickProperties } from "../json.js";
import { decodeObject, decodePath } from "../decode.js";
import { type ConnectedAccount, ConnectedAccountSerializer } from "./connectedAccount.js";
import {
  type OnboardingLinkResponse,
  OnboardingLinkResponseSerializer,
} from "./onboardingLinkResponse.js";
/** The created account (same fields as `ConnectedAccount`) plus its onboarding link. */
export interface CreateConnectedAccountResponse extends ConnectedAccount {
  onboardingLink: OnboardingLinkResponse;
}

/** Converts `CreateConnectedAccountResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreateConnectedAccountResponseSerializer = {
  parse(json: any, path = "$"): CreateConnectedAccountResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "onboarding_link",
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
      ...pickProperties(ConnectedAccountSerializer.parse(json, path), [
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
      onboardingLink: OnboardingLinkResponseSerializer.parse(
        json["onboarding_link"],
        decodePath(path, "onboarding_link")
      ),
    };
  },

  serialize(value: CreateConnectedAccountResponse): any {
    return {
      ...extraProperties(value, [
        "onboardingLink",
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
      ...pickProperties(ConnectedAccountSerializer.serialize(value), [
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
      onboarding_link: OnboardingLinkResponseSerializer.serialize(value.onboardingLink),
    };
  },
};
