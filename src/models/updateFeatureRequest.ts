// this file is @generated
import { extraProperties } from "../json.js";
/** Partial update. Code, feature type and product are immutable. */
export interface UpdateFeatureRequest {
  /** Omit to leave unchanged; send `null` to clear. */
  description?: string | null | undefined;
  name?: string | null | undefined;
}

/** Converts `UpdateFeatureRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const UpdateFeatureRequestSerializer = {
  parse(json: any): UpdateFeatureRequest {
    return {
      ...extraProperties(json, ["description", "name"]),
      description: json["description"],
      name: json["name"],
    };
  },

  serialize(value: UpdateFeatureRequest): any {
    return {
      ...extraProperties(value, ["description", "name"]),
      description: value.description,
      name: value.name,
    };
  },
};
