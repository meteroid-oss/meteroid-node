// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeDateTime,
  decodeList,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type BillableMetricId, BillableMetricIdSerializer } from "./billableMetricId.js";
import {
  type BillingMetricAggregateEnum,
  BillingMetricAggregateEnumSerializer,
} from "./billingMetricAggregateEnum.js";
import { type MetricFilter, MetricFilterSerializer } from "./metricFilter.js";
import {
  type MetricSegmentationMatrix,
  MetricSegmentationMatrixSerializer,
} from "./metricSegmentationMatrix.js";
import { type ProductFamilyId, ProductFamilyIdSerializer } from "./productFamilyId.js";
import { type ProductId, ProductIdSerializer } from "./productId.js";
import { type UnitConversion, UnitConversionSerializer } from "./unitConversion.js";

export interface Metric {
  aggregationKey?: string | null | undefined;
  aggregationType: BillingMetricAggregateEnum;
  archivedAt?: Date | null | undefined;
  code: string;
  createdAt: Date;
  description?: string | null | undefined;
  filters?: MetricFilter[] | undefined;
  id: BillableMetricId;
  name: string;
  productFamilyId: ProductFamilyId;
  productId?: ProductId | null | undefined;
  segmentationMatrix?: MetricSegmentationMatrix | null | undefined;
  unitConversion?: UnitConversion | null | undefined;
  usageGroupKey?: string | null | undefined;
}

/** Converts `Metric` values from (`parse`) and to (`serialize`) their JSON form. */
export const MetricSerializer = {
  parse(json: any, path = "$"): Metric {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "aggregation_key",
        "aggregation_type",
        "archived_at",
        "code",
        "created_at",
        "description",
        "filters",
        "id",
        "name",
        "product_family_id",
        "product_id",
        "segmentation_matrix",
        "unit_conversion",
        "usage_group_key",
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
      filters:
        json["filters"] != null
          ? decodeList(
              json["filters"],
              path,
              "filters",
              (item: any, p: string, i: number) =>
                MetricFilterSerializer.parse(item, decodePath(p, i))
            )
          : undefined,
      id: BillableMetricIdSerializer.parse(json["id"], decodePath(path, "id")),
      name: decodeString(json["name"], path, "name"),
      productFamilyId: ProductFamilyIdSerializer.parse(
        json["product_family_id"],
        decodePath(path, "product_family_id")
      ),
      productId:
        json["product_id"] != null
          ? ProductIdSerializer.parse(json["product_id"], decodePath(path, "product_id"))
          : json["product_id"],
      segmentationMatrix:
        json["segmentation_matrix"] != null
          ? MetricSegmentationMatrixSerializer.parse(
              json["segmentation_matrix"],
              decodePath(path, "segmentation_matrix")
            )
          : json["segmentation_matrix"],
      unitConversion:
        json["unit_conversion"] != null
          ? UnitConversionSerializer.parse(
              json["unit_conversion"],
              decodePath(path, "unit_conversion")
            )
          : json["unit_conversion"],
      usageGroupKey:
        json["usage_group_key"] != null
          ? decodeString(json["usage_group_key"], path, "usage_group_key")
          : json["usage_group_key"],
    };
  },

  serialize(value: Metric): any {
    return {
      ...extraProperties(value, [
        "aggregationKey",
        "aggregationType",
        "archivedAt",
        "code",
        "createdAt",
        "description",
        "filters",
        "id",
        "name",
        "productFamilyId",
        "productId",
        "segmentationMatrix",
        "unitConversion",
        "usageGroupKey",
      ]),
      aggregation_key: value.aggregationKey,
      aggregation_type: BillingMetricAggregateEnumSerializer.serialize(
        value.aggregationType
      ),
      archived_at: value.archivedAt,
      code: value.code,
      created_at: value.createdAt,
      description: value.description,
      filters:
        value.filters != null
          ? value.filters.map((item: any) => MetricFilterSerializer.serialize(item))
          : undefined,
      id: BillableMetricIdSerializer.serialize(value.id),
      name: value.name,
      product_family_id: ProductFamilyIdSerializer.serialize(value.productFamilyId),
      product_id:
        value.productId != null
          ? ProductIdSerializer.serialize(value.productId)
          : value.productId,
      segmentation_matrix:
        value.segmentationMatrix != null
          ? MetricSegmentationMatrixSerializer.serialize(value.segmentationMatrix)
          : value.segmentationMatrix,
      unit_conversion:
        value.unitConversion != null
          ? UnitConversionSerializer.serialize(value.unitConversion)
          : value.unitConversion,
      usage_group_key: value.usageGroupKey,
    };
  },
};
