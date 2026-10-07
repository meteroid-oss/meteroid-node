// this file is @generated
import { decodeString } from "../decode.js";

export type OrganizationId = string;

/** Converts `OrganizationId` values from (`parse`) and to (`serialize`) their JSON form. */
export const OrganizationIdSerializer = {
  parse(json: any, path = "$"): OrganizationId {
    return decodeString(json, path);
  },

  serialize(value: OrganizationId): any {
    return value;
  },
};
