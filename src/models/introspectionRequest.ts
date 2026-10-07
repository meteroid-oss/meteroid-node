// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";
/** Token introspection request */
export interface IntrospectionRequest {
  /** The token to introspect */
  token: string;
}

/** Converts `IntrospectionRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const IntrospectionRequestSerializer = {
  parse(json: any, path = "$"): IntrospectionRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["token"]),
      token: decodeString(json["token"], path, "token"),
    };
  },

  serialize(value: IntrospectionRequest): any {
    return {
      ...extraProperties(value, ["token"]),
      token: value.token,
    };
  },
};
