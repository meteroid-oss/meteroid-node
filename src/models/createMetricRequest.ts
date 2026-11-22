// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath, decodeString } from "../decode.js";
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

export interface CreateMetricRequest {
  aggregationKey?: string | null | undefined;
  aggregationType: BillingMetricAggregateEnum;
  code: string;
  description?: string | null | undefined;
  /** Pre-aggregation property filters. Optional and backward-compatible; omit for none. */
  filters?: MetricFilter[] | null | undefined;
  name: string;
  productFamilyId: ProductFamilyId;
  productId?: ProductId | null | undefined;
  segmentationMatrix?: MetricSegmentationMatrix | null | undefined;
  unitConversion?: UnitConversion | null | undefined;
  /**
   * What several units of the metric are called, e.g. `tokens`. Set together with
   * `unit_singular`. Trimmed; at most 32 characters.
   */
  unitPlural?: string | null | undefined;
  /**
   * What one unit of the metric is called, e.g. `token`, used to label quantities and
   * prices ("$12.00 per 1M tokens"). Set both `unit_singular` and `unit_plural`, or neither.
   * Trimmed; at most 32 characters.
   */
  unitSingular?: string | null | undefined;
  /**
   * Event property, e.g. `project_id`, that breaks each invoice line down by value. The line is
   * still priced on its total usage, and each value shows its quantity and share of the amount.
   */
  usageBreakdownKey?: string | null | undefined;
  /**
   * Event property, e.g. `cluster_id`, whose values are billed as separate invoice lines, each
   * priced on its own usage.
   */
  usageGroupKey?: string | null | undefined;
}

/** Converts `CreateMetricRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreateMetricRequestSerializer = {
  parse(json: any, path = "$"): CreateMetricRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "aggregation_key",
        "aggregation_type",
        "code",
        "description",
        "filters",
        "name",
        "product_family_id",
        "product_id",
        "segmentation_matrix",
        "unit_conversion",
        "unit_plural",
        "unit_singular",
        "usage_breakdown_key",
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
      code: decodeString(json["code"], path, "code"),
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
          : json["filters"],
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
      unitPlural:
        json["unit_plural"] != null
          ? decodeString(json["unit_plural"], path, "unit_plural")
          : json["unit_plural"],
      unitSingular:
        json["unit_singular"] != null
          ? decodeString(json["unit_singular"], path, "unit_singular")
          : json["unit_singular"],
      usageBreakdownKey:
        json["usage_breakdown_key"] != null
          ? decodeString(json["usage_breakdown_key"], path, "usage_breakdown_key")
          : json["usage_breakdown_key"],
      usageGroupKey:
        json["usage_group_key"] != null
          ? decodeString(json["usage_group_key"], path, "usage_group_key")
          : json["usage_group_key"],
    };
  },

  serialize(value: CreateMetricRequest): any {
    return {
      ...extraProperties(value, [
        "aggregationKey",
        "aggregationType",
        "code",
        "description",
        "filters",
        "name",
        "productFamilyId",
        "productId",
        "segmentationMatrix",
        "unitConversion",
        "unitPlural",
        "unitSingular",
        "usageBreakdownKey",
        "usageGroupKey",
      ]),
      aggregation_key: value.aggregationKey,
      aggregation_type: BillingMetricAggregateEnumSerializer.serialize(
        value.aggregationType
      ),
      code: value.code,
      description: value.description,
      filters:
        value.filters != null
          ? value.filters.map((item: any) => MetricFilterSerializer.serialize(item))
          : value.filters,
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
      unit_plural: value.unitPlural,
      unit_singular: value.unitSingular,
      usage_breakdown_key: value.usageBreakdownKey,
      usage_group_key: value.usageGroupKey,
    };
  },
};
