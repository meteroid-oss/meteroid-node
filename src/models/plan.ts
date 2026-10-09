// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeDateTime,
  decodeInteger,
  decodeList,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import {
  type AvailableParameters,
  AvailableParametersSerializer,
} from "./availableParameters.js";
import { type Currency, CurrencySerializer } from "./currency.js";
import { type Entitlement, EntitlementSerializer } from "./entitlement.js";
import {
  type MinimumCommitment,
  MinimumCommitmentSerializer,
} from "./minimumCommitment.js";
import { type PlanId, PlanIdSerializer } from "./planId.js";
import { type PlanStatusEnum, PlanStatusEnumSerializer } from "./planStatusEnum.js";
import { type PlanTypeEnum, PlanTypeEnumSerializer } from "./planTypeEnum.js";
import { type PlanVersionId, PlanVersionIdSerializer } from "./planVersionId.js";
import { type PriceComponent, PriceComponentSerializer } from "./priceComponent.js";
import { type ProductFamily, ProductFamilySerializer } from "./productFamily.js";
import { type TrialConfig, TrialConfigSerializer } from "./trialConfig.js";

export interface Plan {
  availableParameters: AvailableParameters;
  billingCycles?: number | null | undefined;
  createdAt: Date;
  currency: Currency;
  description?: string | null | undefined;
  entitlements?: Entitlement[] | undefined;
  id: PlanId;
  minimumCommitment?: MinimumCommitment | null | undefined;
  name: string;
  netTerms: number;
  periodStartDay?: number | null | undefined;
  planType: PlanTypeEnum;
  priceComponents: PriceComponent[];
  productFamily: ProductFamily;
  selfServiceRank?: number | null | undefined;
  status: PlanStatusEnum;
  /**
   * The plan's amounts are quoted tax-included ("9.99 incl. VAT"): tax is carved out of
   * them at invoice time instead of being added on top, so the customer pays the quoted
   * price whatever rate applies. A customer who bears no tax (reverse charge, exempt,
   * export) still pays it in full. Defaults to `false`.
   */
  taxInclusive: boolean;
  trial?: TrialConfig | null | undefined;
  version: number;
  versionId: PlanVersionId;
}

/** Converts `Plan` values from (`parse`) and to (`serialize`) their JSON form. */
export const PlanSerializer = {
  parse(json: any, path = "$"): Plan {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "available_parameters",
        "billing_cycles",
        "created_at",
        "currency",
        "description",
        "entitlements",
        "id",
        "minimum_commitment",
        "name",
        "net_terms",
        "period_start_day",
        "plan_type",
        "price_components",
        "product_family",
        "self_service_rank",
        "status",
        "tax_inclusive",
        "trial",
        "version",
        "version_id",
      ]),
      availableParameters: AvailableParametersSerializer.parse(
        json["available_parameters"],
        decodePath(path, "available_parameters")
      ),
      billingCycles:
        json["billing_cycles"] != null
          ? decodeInteger(json["billing_cycles"], path, "billing_cycles")
          : json["billing_cycles"],
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      currency: CurrencySerializer.parse(json["currency"], decodePath(path, "currency")),
      description:
        json["description"] != null
          ? decodeString(json["description"], path, "description")
          : json["description"],
      entitlements:
        json["entitlements"] != null
          ? decodeList(
              json["entitlements"],
              path,
              "entitlements",
              (item: any, p: string, i: number) =>
                EntitlementSerializer.parse(item, decodePath(p, i))
            )
          : undefined,
      id: PlanIdSerializer.parse(json["id"], decodePath(path, "id")),
      minimumCommitment:
        json["minimum_commitment"] != null
          ? MinimumCommitmentSerializer.parse(
              json["minimum_commitment"],
              decodePath(path, "minimum_commitment")
            )
          : json["minimum_commitment"],
      name: decodeString(json["name"], path, "name"),
      netTerms: decodeInteger(json["net_terms"], path, "net_terms"),
      periodStartDay:
        json["period_start_day"] != null
          ? decodeInteger(json["period_start_day"], path, "period_start_day")
          : json["period_start_day"],
      planType: PlanTypeEnumSerializer.parse(
        json["plan_type"],
        decodePath(path, "plan_type")
      ),
      priceComponents: decodeList(
        json["price_components"],
        path,
        "price_components",
        (item: any, p: string, i: number) =>
          PriceComponentSerializer.parse(item, decodePath(p, i))
      ),
      productFamily: ProductFamilySerializer.parse(
        json["product_family"],
        decodePath(path, "product_family")
      ),
      selfServiceRank:
        json["self_service_rank"] != null
          ? decodeInteger(json["self_service_rank"], path, "self_service_rank")
          : json["self_service_rank"],
      status: PlanStatusEnumSerializer.parse(json["status"], decodePath(path, "status")),
      taxInclusive: decodeBoolean(json["tax_inclusive"], path, "tax_inclusive"),
      trial:
        json["trial"] != null
          ? TrialConfigSerializer.parse(json["trial"], decodePath(path, "trial"))
          : json["trial"],
      version: decodeInteger(json["version"], path, "version"),
      versionId: PlanVersionIdSerializer.parse(
        json["version_id"],
        decodePath(path, "version_id")
      ),
    };
  },

  serialize(value: Plan): any {
    return {
      ...extraProperties(value, [
        "availableParameters",
        "billingCycles",
        "createdAt",
        "currency",
        "description",
        "entitlements",
        "id",
        "minimumCommitment",
        "name",
        "netTerms",
        "periodStartDay",
        "planType",
        "priceComponents",
        "productFamily",
        "selfServiceRank",
        "status",
        "taxInclusive",
        "trial",
        "version",
        "versionId",
      ]),
      available_parameters: AvailableParametersSerializer.serialize(
        value.availableParameters
      ),
      billing_cycles: value.billingCycles,
      created_at: value.createdAt,
      currency: CurrencySerializer.serialize(value.currency),
      description: value.description,
      entitlements:
        value.entitlements != null
          ? value.entitlements.map((item: any) => EntitlementSerializer.serialize(item))
          : undefined,
      id: PlanIdSerializer.serialize(value.id),
      minimum_commitment:
        value.minimumCommitment != null
          ? MinimumCommitmentSerializer.serialize(value.minimumCommitment)
          : value.minimumCommitment,
      name: value.name,
      net_terms: value.netTerms,
      period_start_day: value.periodStartDay,
      plan_type: PlanTypeEnumSerializer.serialize(value.planType),
      price_components: value.priceComponents.map((item: any) =>
        PriceComponentSerializer.serialize(item)
      ),
      product_family: ProductFamilySerializer.serialize(value.productFamily),
      self_service_rank: value.selfServiceRank,
      status: PlanStatusEnumSerializer.serialize(value.status),
      tax_inclusive: value.taxInclusive,
      trial:
        value.trial != null ? TrialConfigSerializer.serialize(value.trial) : value.trial,
      version: value.version,
      version_id: PlanVersionIdSerializer.serialize(value.versionId),
    };
  },
};
