// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
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
import {
  type MinimumCommitmentInput,
  MinimumCommitmentInputSerializer,
} from "./minimumCommitmentInput.js";
import { type PlanAddOnInput, PlanAddOnInputSerializer } from "./planAddOnInput.js";
import { type PlanStatusEnum, PlanStatusEnumSerializer } from "./planStatusEnum.js";
import {
  type PriceComponentInput,
  PriceComponentInputSerializer,
} from "./priceComponentInput.js";
import { type TrialConfig, TrialConfigSerializer } from "./trialConfig.js";

export interface ReplacePlanRequest {
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
  minimumCommitment?: MinimumCommitmentInput | null | undefined;
  name: string;
  status?: PlanStatusEnum | null | undefined;
  /**
   * The plan's amounts are quoted tax-included ("9.99 incl. VAT"): tax is carved out of
   * them at invoice time instead of being added on top, so the customer pays the quoted
   * price whatever rate applies. A customer who bears no tax (reverse charge, exempt,
   * export) still pays it in full. Defaults to `false`.
   */
  taxInclusive?: boolean | undefined;
  trial?: TrialConfig | null | undefined;
}

/** Converts `ReplacePlanRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const ReplacePlanRequestSerializer = {
  parse(json: any, path = "$"): ReplacePlanRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "add_ons",
        "billing",
        "components",
        "currency",
        "description",
        "entitlements",
        "minimum_commitment",
        "name",
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
      minimumCommitment:
        json["minimum_commitment"] != null
          ? MinimumCommitmentInputSerializer.parse(
              json["minimum_commitment"],
              decodePath(path, "minimum_commitment")
            )
          : json["minimum_commitment"],
      name: decodeString(json["name"], path, "name"),
      status:
        json["status"] != null
          ? PlanStatusEnumSerializer.parse(json["status"], decodePath(path, "status"))
          : json["status"],
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

  serialize(value: ReplacePlanRequest): any {
    return {
      ...extraProperties(value, [
        "addOns",
        "billing",
        "components",
        "currency",
        "description",
        "entitlements",
        "minimumCommitment",
        "name",
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
      minimum_commitment:
        value.minimumCommitment != null
          ? MinimumCommitmentInputSerializer.serialize(value.minimumCommitment)
          : value.minimumCommitment,
      name: value.name,
      status:
        value.status != null
          ? PlanStatusEnumSerializer.serialize(value.status)
          : value.status,
      tax_inclusive: value.taxInclusive,
      trial:
        value.trial != null ? TrialConfigSerializer.serialize(value.trial) : value.trial,
    };
  },
};
