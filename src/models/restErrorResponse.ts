// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type ErrorCode, ErrorCodeSerializer } from "./errorCode.js";

export interface RestErrorResponse {
  code: ErrorCode;
  message: string;
}

/** Converts `RestErrorResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const RestErrorResponseSerializer = {
  parse(json: any, path = "$"): RestErrorResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["code", "message"]),
      code: ErrorCodeSerializer.parse(json["code"], decodePath(path, "code")),
      message: decodeString(json["message"], path, "message"),
    };
  },

  serialize(value: RestErrorResponse): any {
    return {
      ...extraProperties(value, ["code", "message"]),
      code: ErrorCodeSerializer.serialize(value.code),
      message: value.message,
    };
  },
};
