// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeDateTime,
  decodeList,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type OAuthAppId, OAuthAppIdSerializer } from "./oAuthAppId.js";
import { type OrganizationId, OrganizationIdSerializer } from "./organizationId.js";
/** An OAuth application registered by a platform */
export interface OAuthApp {
  clientId: string;
  clientSecretHint: string;
  createdAt: Date;
  id: OAuthAppId;
  isActive: boolean;
  name: string;
  organizationId: OrganizationId;
  redirectUris: string[];
  scopes: string[];
  updatedAt?: Date | null | undefined;
}

/** Converts `OAuthApp` values from (`parse`) and to (`serialize`) their JSON form. */
export const OAuthAppSerializer = {
  parse(json: any, path = "$"): OAuthApp {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "client_id",
        "client_secret_hint",
        "created_at",
        "id",
        "is_active",
        "name",
        "organization_id",
        "redirect_uris",
        "scopes",
        "updated_at",
      ]),
      clientId: decodeString(json["client_id"], path, "client_id"),
      clientSecretHint: decodeString(
        json["client_secret_hint"],
        path,
        "client_secret_hint"
      ),
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      id: OAuthAppIdSerializer.parse(json["id"], decodePath(path, "id")),
      isActive: decodeBoolean(json["is_active"], path, "is_active"),
      name: decodeString(json["name"], path, "name"),
      organizationId: OrganizationIdSerializer.parse(
        json["organization_id"],
        decodePath(path, "organization_id")
      ),
      redirectUris: decodeList(
        json["redirect_uris"],
        path,
        "redirect_uris",
        (item: any, p: string, i: number) => decodeString(item, p, i)
      ),
      scopes: decodeList(
        json["scopes"],
        path,
        "scopes",
        (item: any, p: string, i: number) => decodeString(item, p, i)
      ),
      updatedAt:
        json["updated_at"] != null
          ? decodeDateTime(json["updated_at"], path, "updated_at")
          : json["updated_at"],
    };
  },

  serialize(value: OAuthApp): any {
    return {
      ...extraProperties(value, [
        "clientId",
        "clientSecretHint",
        "createdAt",
        "id",
        "isActive",
        "name",
        "organizationId",
        "redirectUris",
        "scopes",
        "updatedAt",
      ]),
      client_id: value.clientId,
      client_secret_hint: value.clientSecretHint,
      created_at: value.createdAt,
      id: OAuthAppIdSerializer.serialize(value.id),
      is_active: value.isActive,
      name: value.name,
      organization_id: OrganizationIdSerializer.serialize(value.organizationId),
      redirect_uris: value.redirectUris,
      scopes: value.scopes,
      updated_at: value.updatedAt,
    };
  },
};
