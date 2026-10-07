// this file is @generated
import { decodeString } from "../decode.js";

export type TenantId = string;

/** Converts `TenantId` values from (`parse`) and to (`serialize`) their JSON form. */
export const TenantIdSerializer = {
  parse(json: any, path = "$"): TenantId {
    return decodeString(json, path);
  },

  serialize(value: TenantId): any {
    return value;
  },
};
