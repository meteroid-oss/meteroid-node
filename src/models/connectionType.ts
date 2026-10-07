// this file is @generated
import { decodeString } from "../decode.js";
/** Type of connection between platform and connected account */
export const ConnectionType = {
  Standard: "standard",
  Express: "express",
} as const;
export type ConnectionType =
  | (typeof ConnectionType)[keyof typeof ConnectionType]
  | (string & {});

/** Converts `ConnectionType` values from (`parse`) and to (`serialize`) their JSON form. */
export const ConnectionTypeSerializer = {
  parse(json: any, path = "$"): ConnectionType {
    return decodeString(json, path);
  },

  serialize(value: ConnectionType): any {
    return value;
  },
};
