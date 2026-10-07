// this file is @generated
import { decodeString } from "../decode.js";

export const UsageModelEnum = {
  PerUnit: "PER_UNIT",
  Tiered: "TIERED",
  Volume: "VOLUME",
  Package: "PACKAGE",
  Matrix: "MATRIX",
} as const;
export type UsageModelEnum =
  | (typeof UsageModelEnum)[keyof typeof UsageModelEnum]
  | (string & {});

/** Converts `UsageModelEnum` values from (`parse`) and to (`serialize`) their JSON form. */
export const UsageModelEnumSerializer = {
  parse(json: any, path = "$"): UsageModelEnum {
    return decodeString(json, path);
  },

  serialize(value: UsageModelEnum): any {
    return value;
  },
};
