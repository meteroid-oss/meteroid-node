// this file is @generated
import { extraProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath, decodeString } from "../decode.js";
import { type BillableMetricId, BillableMetricIdSerializer } from "./billableMetricId.js";
import {
  type BillingMetricAggregateEnum,
  BillingMetricAggregateEnumSerializer,
} from "./billingMetricAggregateEnum.js";

export interface MetricSummary {
  aggregationKey?: string | null | undefined;
  aggregationType: BillingMetricAggregateEnum;
  archivedAt?: Date | null | undefined;
  code: string;
  createdAt: Date;
  description?: string | null | undefined;
  id: BillableMetricId;
  name: string;
}

/** Converts `MetricSummary` values from (`parse`) and to (`serialize`) their JSON form. */
export const MetricSummarySerializer = {
  parse(json: any, path = "$"): MetricSummary {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "aggregation_key",
        "aggregation_type",
        "archived_at",
        "code",
        "created_at",
        "description",
        "id",
        "name",
      ]),
      aggregationKey:
        json["aggregation_key"] != null
          ? decodeString(json["aggregation_key"], path, "aggregation_key")
          : json["aggregation_key"],
      aggregationType: BillingMetricAggregateEnumSerializer.parse(
        json["aggregation_type"],
        decodePath(path, "aggregation_type")
      ),
      archivedAt:
        json["archived_at"] != null
          ? decodeDateTime(json["archived_at"], path, "archived_at")
          : json["archived_at"],
      code: decodeString(json["code"], path, "code"),
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      description:
        json["description"] != null
          ? decodeString(json["description"], path, "description")
          : json["description"],
      id: BillableMetricIdSerializer.parse(json["id"], decodePath(path, "id")),
      name: decodeString(json["name"], path, "name"),
    };
  },

  serialize(value: MetricSummary): any {
    return {
      ...extraProperties(value, [
        "aggregationKey",
        "aggregationType",
        "archivedAt",
        "code",
        "createdAt",
        "description",
        "id",
        "name",
      ]),
      aggregation_key: value.aggregationKey,
      aggregation_type: BillingMetricAggregateEnumSerializer.serialize(
        value.aggregationType
      ),
      archived_at: value.archivedAt,
      code: value.code,
      created_at: value.createdAt,
      description: value.description,
      id: BillableMetricIdSerializer.serialize(value.id),
      name: value.name,
    };
  },
};
