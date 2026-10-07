// this file is @generated
import { decodeString } from "../decode.js";
/** What a customer portal token may do. */
export const CustomerPortalScope = {
  Read: "read",
  Manage: "manage",
} as const;
export type CustomerPortalScope =
  | (typeof CustomerPortalScope)[keyof typeof CustomerPortalScope]
  | (string & {});

/** Converts `CustomerPortalScope` values from (`parse`) and to (`serialize`) their JSON form. */
export const CustomerPortalScopeSerializer = {
  parse(json: any, path = "$"): CustomerPortalScope {
    return decodeString(json, path);
  },

  serialize(value: CustomerPortalScope): any {
    return value;
  },
};
