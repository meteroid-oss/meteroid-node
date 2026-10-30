// this file is @generated
import { extraProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath, decodeString } from "../decode.js";
import {
  type LicenseSigningKeyStatus,
  LicenseSigningKeyStatusSerializer,
} from "./licenseSigningKeyStatus.js";

export interface LicenseSigningKey {
  createdAt: Date;
  /** The key id, the `kid` header of the licenses it signs. */
  kid: string;
  /** Ed25519 public key, PEM-encoded. */
  publicKeyPem: string;
  retiredAt?: Date | null | undefined;
  status: LicenseSigningKeyStatus;
}

/** Converts `LicenseSigningKey` values from (`parse`) and to (`serialize`) their JSON form. */
export const LicenseSigningKeySerializer = {
  parse(json: any, path = "$"): LicenseSigningKey {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "created_at",
        "kid",
        "public_key_pem",
        "retired_at",
        "status",
      ]),
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      kid: decodeString(json["kid"], path, "kid"),
      publicKeyPem: decodeString(json["public_key_pem"], path, "public_key_pem"),
      retiredAt:
        json["retired_at"] != null
          ? decodeDateTime(json["retired_at"], path, "retired_at")
          : json["retired_at"],
      status: LicenseSigningKeyStatusSerializer.parse(
        json["status"],
        decodePath(path, "status")
      ),
    };
  },

  serialize(value: LicenseSigningKey): any {
    return {
      ...extraProperties(value, [
        "createdAt",
        "kid",
        "publicKeyPem",
        "retiredAt",
        "status",
      ]),
      created_at: value.createdAt,
      kid: value.kid,
      public_key_pem: value.publicKeyPem,
      retired_at: value.retiredAt,
      status: LicenseSigningKeyStatusSerializer.serialize(value.status),
    };
  },
};
