// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeDateTime,
  decodeInteger,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type PlanId, PlanIdSerializer } from "./planId.js";
import { type PlanStatusEnum, PlanStatusEnumSerializer } from "./planStatusEnum.js";
import { type PlanTypeEnum, PlanTypeEnumSerializer } from "./planTypeEnum.js";

export interface PlanEventData {
  createdAt: Date;
  currency: string;
  description?: string | null | undefined;
  name: string;
  planId: PlanId;
  planType: PlanTypeEnum;
  status: PlanStatusEnum;
  version: number;
}

/** Converts `PlanEventData` values from (`parse`) and to (`serialize`) their JSON form. */
export const PlanEventDataSerializer = {
  parse(json: any, path = "$"): PlanEventData {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "created_at",
        "currency",
        "description",
        "name",
        "plan_id",
        "plan_type",
        "status",
        "version",
      ]),
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      currency: decodeString(json["currency"], path, "currency"),
      description:
        json["description"] != null
          ? decodeString(json["description"], path, "description")
          : json["description"],
      name: decodeString(json["name"], path, "name"),
      planId: PlanIdSerializer.parse(json["plan_id"], decodePath(path, "plan_id")),
      planType: PlanTypeEnumSerializer.parse(
        json["plan_type"],
        decodePath(path, "plan_type")
      ),
      status: PlanStatusEnumSerializer.parse(json["status"], decodePath(path, "status")),
      version: decodeInteger(json["version"], path, "version"),
    };
  },

  serialize(value: PlanEventData): any {
    return {
      ...extraProperties(value, [
        "createdAt",
        "currency",
        "description",
        "name",
        "planId",
        "planType",
        "status",
        "version",
      ]),
      created_at: value.createdAt,
      currency: value.currency,
      description: value.description,
      name: value.name,
      plan_id: PlanIdSerializer.serialize(value.planId),
      plan_type: PlanTypeEnumSerializer.serialize(value.planType),
      status: PlanStatusEnumSerializer.serialize(value.status),
      version: value.version,
    };
  },
};
