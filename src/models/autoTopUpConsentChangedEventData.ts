// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeDateTime,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type Actor, ActorSerializer } from "./actor.js";
import { type CustomerId, CustomerIdSerializer } from "./customerId.js";
/** The authorization of a wallet's automatic top-up was given, changed or withdrawn. */
export interface AutoTopUpConsentChangedEventData {
  /** Who gave, changed or withdrew the authorization. */
  actor: Actor;
  /** When the authorization changed. */
  changedAt: Date;
  /**
   * Identifies the terms authorized now, without disclosing payment details; absent when
   * withdrawn.
   */
  configurationRevision?: string | null | undefined;
  /** When that attestation was made. */
  consentAttestedAt?: Date | null | undefined;
  consentAttestedBy?: Actor | null | undefined;
  /** The wallet's currency (ISO 4217) or credit unit code. */
  currency: string;
  customerId: CustomerId;
  /** Whether automatic top-up is authorized after this change. */
  enabled: boolean;
  /** Identifies the terms authorized before the change; absent when none were. */
  previousConfigurationRevision?: string | null | undefined;
}

/** Converts `AutoTopUpConsentChangedEventData` values from (`parse`) and to (`serialize`) their JSON form. */
export const AutoTopUpConsentChangedEventDataSerializer = {
  parse(json: any, path = "$"): AutoTopUpConsentChangedEventData {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "actor",
        "changed_at",
        "configuration_revision",
        "consent_attested_at",
        "consent_attested_by",
        "currency",
        "customer_id",
        "enabled",
        "previous_configuration_revision",
      ]),
      actor: ActorSerializer.parse(json["actor"], decodePath(path, "actor")),
      changedAt: decodeDateTime(json["changed_at"], path, "changed_at"),
      configurationRevision:
        json["configuration_revision"] != null
          ? decodeString(json["configuration_revision"], path, "configuration_revision")
          : json["configuration_revision"],
      consentAttestedAt:
        json["consent_attested_at"] != null
          ? decodeDateTime(json["consent_attested_at"], path, "consent_attested_at")
          : json["consent_attested_at"],
      consentAttestedBy:
        json["consent_attested_by"] != null
          ? ActorSerializer.parse(
              json["consent_attested_by"],
              decodePath(path, "consent_attested_by")
            )
          : json["consent_attested_by"],
      currency: decodeString(json["currency"], path, "currency"),
      customerId: CustomerIdSerializer.parse(
        json["customer_id"],
        decodePath(path, "customer_id")
      ),
      enabled: decodeBoolean(json["enabled"], path, "enabled"),
      previousConfigurationRevision:
        json["previous_configuration_revision"] != null
          ? decodeString(
              json["previous_configuration_revision"],
              path,
              "previous_configuration_revision"
            )
          : json["previous_configuration_revision"],
    };
  },

  serialize(value: AutoTopUpConsentChangedEventData): any {
    return {
      ...extraProperties(value, [
        "actor",
        "changedAt",
        "configurationRevision",
        "consentAttestedAt",
        "consentAttestedBy",
        "currency",
        "customerId",
        "enabled",
        "previousConfigurationRevision",
      ]),
      actor: ActorSerializer.serialize(value.actor),
      changed_at: value.changedAt,
      configuration_revision: value.configurationRevision,
      consent_attested_at: value.consentAttestedAt,
      consent_attested_by:
        value.consentAttestedBy != null
          ? ActorSerializer.serialize(value.consentAttestedBy)
          : value.consentAttestedBy,
      currency: value.currency,
      customer_id: CustomerIdSerializer.serialize(value.customerId),
      enabled: value.enabled,
      previous_configuration_revision: value.previousConfigurationRevision,
    };
  },
};
