// this file is @generated
import { decodeString } from "../decode.js";
/** Lifecycle status of a feature. */
export const FeatureStatus = {
  Active: "ACTIVE",
  Disabled: "DISABLED",
  Archived: "ARCHIVED",
} as const;
export type FeatureStatus =
  | (typeof FeatureStatus)[keyof typeof FeatureStatus]
  | (string & {});

/** Converts `FeatureStatus` values from (`parse`) and to (`serialize`) their JSON form. */
export const FeatureStatusSerializer = {
  parse(json: any, path = "$"): FeatureStatus {
    return decodeString(json, path);
  },

  serialize(value: FeatureStatus): any {
    return value;
  },
};
