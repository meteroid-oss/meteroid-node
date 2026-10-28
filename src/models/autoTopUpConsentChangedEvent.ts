// this file is @generated
import { extraProperties, pickProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath } from "../decode.js";
import {
  type AutoTopUpConsentChangedEventData,
  AutoTopUpConsentChangedEventDataSerializer,
} from "./autoTopUpConsentChangedEventData.js";
import { type EventId, EventIdSerializer } from "./eventId.js";
import { type EventType, EventTypeSerializer } from "./eventType.js";

export interface AutoTopUpConsentChangedEvent extends AutoTopUpConsentChangedEventData {
  id: EventId;
  timestamp: Date;
  type: EventType;
}

/** Converts `AutoTopUpConsentChangedEvent` values from (`parse`) and to (`serialize`) their JSON form. */
export const AutoTopUpConsentChangedEventSerializer = {
  parse(json: any, path = "$"): AutoTopUpConsentChangedEvent {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "id",
        "timestamp",
        "type",
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
      ...pickProperties(AutoTopUpConsentChangedEventDataSerializer.parse(json, path), [
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
      id: EventIdSerializer.parse(json["id"], decodePath(path, "id")),
      timestamp: decodeDateTime(json["timestamp"], path, "timestamp"),
      type: EventTypeSerializer.parse(json["type"], decodePath(path, "type")),
    };
  },

  serialize(value: AutoTopUpConsentChangedEvent): any {
    return {
      ...extraProperties(value, [
        "id",
        "timestamp",
        "type",
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
      ...pickProperties(AutoTopUpConsentChangedEventDataSerializer.serialize(value), [
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
      id: EventIdSerializer.serialize(value.id),
      timestamp: value.timestamp,
      type: EventTypeSerializer.serialize(value.type),
    };
  },
};
