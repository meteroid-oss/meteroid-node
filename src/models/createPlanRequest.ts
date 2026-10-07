// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeInteger,
  decodeList,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type BillingConfig, BillingConfigSerializer } from "./billingConfig.js";
import {
  type EntitlementSpecRequest,
  EntitlementSpecRequestSerializer,
} from "./entitlementSpecRequest.js";
import { type PlanAddOnInput, PlanAddOnInputSerializer } from "./planAddOnInput.js";
import { type PlanStatusEnum, PlanStatusEnumSerializer } from "./planStatusEnum.js";
import { type PlanTypeEnum, PlanTypeEnumSerializer } from "./planTypeEnum.js";
import {
  type PriceComponentInput,
  PriceComponentInputSerializer,
} from "./priceComponentInput.js";
import { type ProductFamilyId, ProductFamilyIdSerializer } from "./productFamilyId.js";
import { type TrialConfig, TrialConfigSerializer } from "./trialConfig.js";

export interface CreatePlanRequest {
  addOns?: PlanAddOnInput[] | undefined;
  billing?: BillingConfig | null | undefined;
  components: PriceComponentInput[];
  currency: string;
  description?: string | null | undefined;
  /**
   * Entitlements to attach to this plan's version. Replacing a published plan creates a
   * new version, and entitlements belong to a version, so passing them here keeps them
   * attached to whichever version the call produces.
   */
  entitlements?: EntitlementSpecRequest[] | undefined;
  name: string;
  planType: PlanTypeEnum;
  productFamilyId: ProductFamilyId;
  selfServiceRank?: number | null | undefined;
  status: PlanStatusEnum;
  /**
   * The plan's amounts are quoted tax-included ("9.99 incl. VAT"): tax is carved out of
   * them at invoice time instead of being added on top, so the customer pays the quoted
   * price whatever rate applies. A customer who bears no tax (reverse charge, exempt,
   * export) still pays it in full. Defaults to `false`.
   */
  taxInclusive?: boolean | undefined;
  trial?: TrialConfig | null | undefined;
}

/** Converts `CreatePlanRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreatePlanRequestSerializer = {
  parse(json: any, path = "$"): CreatePlanRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "add_ons",
        "billing",
        "components",
        "currency",
        "description",
        "entitlements",
        "name",
        "plan_type",
        "product_family_id",
        "self_service_rank",
        "status",
        "tax_inclusive",
        "trial",
      ]),
      addOns:
        json["add_ons"] != null
          ? decodeList(
              json["add_ons"],
              path,
              "add_ons",
              (item: any, p: string, i: number) =>
                PlanAddOnInputSerializer.parse(item, decodePath(p, i))
            )
          : undefined,
      billing:
        json["billing"] != null
          ? BillingConfigSerializer.parse(json["billing"], decodePath(path, "billing"))
          : json["billing"],
      components: decodeList(
        json["components"],
        path,
        "components",
        (item: any, p: string, i: number) =>
          PriceComponentInputSerializer.parse(item, decodePath(p, i))
      ),
      currency: decodeString(json["currency"], path, "currency"),
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
                EntitlementSpecRequestSerializer.parse(item, decodePath(p, i))
            )
          : undefined,
      name: decodeString(json["name"], path, "name"),
      planType: PlanTypeEnumSerializer.parse(
        json["plan_type"],
        decodePath(path, "plan_type")
      ),
      productFamilyId: ProductFamilyIdSerializer.parse(
        json["product_family_id"],
        decodePath(path, "product_family_id")
      ),
      selfServiceRank:
        json["self_service_rank"] != null
          ? decodeInteger(json["self_service_rank"], path, "self_service_rank")
          : json["self_service_rank"],
      status: PlanStatusEnumSerializer.parse(json["status"], decodePath(path, "status")),
      taxInclusive:
        json["tax_inclusive"] != null
          ? decodeBoolean(json["tax_inclusive"], path, "tax_inclusive")
          : undefined,
      trial:
        json["trial"] != null
          ? TrialConfigSerializer.parse(json["trial"], decodePath(path, "trial"))
          : json["trial"],
    };
  },

  serialize(value: CreatePlanRequest): any {
    return {
      ...extraProperties(value, [
        "addOns",
        "billing",
        "components",
        "currency",
        "description",
        "entitlements",
        "name",
        "planType",
        "productFamilyId",
        "selfServiceRank",
        "status",
        "taxInclusive",
        "trial",
      ]),
      add_ons:
        value.addOns != null
          ? value.addOns.map((item: any) => PlanAddOnInputSerializer.serialize(item))
          : undefined,
      billing:
        value.billing != null
          ? BillingConfigSerializer.serialize(value.billing)
          : value.billing,
      components: value.components.map((item: any) =>
        PriceComponentInputSerializer.serialize(item)
      ),
      currency: value.currency,
      description: value.description,
      entitlements:
        value.entitlements != null
          ? value.entitlements.map((item: any) =>
              EntitlementSpecRequestSerializer.serialize(item)
            )
          : undefined,
      name: value.name,
      plan_type: PlanTypeEnumSerializer.serialize(value.planType),
      product_family_id: ProductFamilyIdSerializer.serialize(value.productFamilyId),
      self_service_rank: value.selfServiceRank,
      status: PlanStatusEnumSerializer.serialize(value.status),
      tax_inclusive: value.taxInclusive,
      trial:
        value.trial != null ? TrialConfigSerializer.serialize(value.trial) : value.trial,
    };
  },
};
