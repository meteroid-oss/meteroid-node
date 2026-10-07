// this file is @generated
import { decodeString } from "../decode.js";
/** Company vs. individual (B2C). Defaults to `COMPANY`. */
export const CustomerType = {
  Company: "COMPANY",
  Individual: "INDIVIDUAL",
} as const;
export type CustomerType =
  | (typeof CustomerType)[keyof typeof CustomerType]
  | (string & {});

/** Converts `CustomerType` values from (`parse`) and to (`serialize`) their JSON form. */
export const CustomerTypeSerializer = {
  parse(json: any, path = "$"): CustomerType {
    return decodeString(json, path);
  },

  serialize(value: CustomerType): any {
    return value;
  },
};
