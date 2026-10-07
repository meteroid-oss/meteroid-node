// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";

export interface PatchPlanRequest {
  description?: string | null | undefined;
  name?: string | null | undefined;
  selfServiceRank?: number | null | undefined;
}

/** Converts `PatchPlanRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const PatchPlanRequestSerializer = {
  parse(json: any, path = "$"): PatchPlanRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["description", "name", "self_service_rank"]),
      description:
        json["description"] != null
          ? decodeString(json["description"], path, "description")
          : json["description"],
      name:
        json["name"] != null ? decodeString(json["name"], path, "name") : json["name"],
      selfServiceRank:
        json["self_service_rank"] != null
          ? decodeInteger(json["self_service_rank"], path, "self_service_rank")
          : json["self_service_rank"],
    };
  },

  serialize(value: PatchPlanRequest): any {
    return {
      ...extraProperties(value, ["description", "name", "selfServiceRank"]),
      description: value.description,
      name: value.name,
      self_service_rank: value.selfServiceRank,
    };
  },
};
