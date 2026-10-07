// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeDateTime,
  decodeInteger,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type PlanVersionId, PlanVersionIdSerializer } from "./planVersionId.js";

export interface PlanVersionSummary {
  createdAt: Date;
  currency: string;
  id: PlanVersionId;
  isDraft: boolean;
  version: number;
}

/** Converts `PlanVersionSummary` values from (`parse`) and to (`serialize`) their JSON form. */
export const PlanVersionSummarySerializer = {
  parse(json: any, path = "$"): PlanVersionSummary {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["created_at", "currency", "id", "is_draft", "version"]),
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      currency: decodeString(json["currency"], path, "currency"),
      id: PlanVersionIdSerializer.parse(json["id"], decodePath(path, "id")),
      isDraft: decodeBoolean(json["is_draft"], path, "is_draft"),
      version: decodeInteger(json["version"], path, "version"),
    };
  },

  serialize(value: PlanVersionSummary): any {
    return {
      ...extraProperties(value, ["createdAt", "currency", "id", "isDraft", "version"]),
      created_at: value.createdAt,
      currency: value.currency,
      id: PlanVersionIdSerializer.serialize(value.id),
      is_draft: value.isDraft,
      version: value.version,
    };
  },
};
