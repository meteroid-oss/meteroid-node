// this file is @generated
import { decodeString } from "../decode.js";

export const ErrorCode = {
  BadRequest: "BAD_REQUEST",
  NotFound: "NOT_FOUND",
  Conflict: "CONFLICT",
  Forbidden: "FORBIDDEN",
  Unauthorized: "UNAUTHORIZED",
  TokenExpired: "TOKEN_EXPIRED",
  TooManyRequests: "TOO_MANY_REQUESTS",
  InternalServerError: "INTERNAL_SERVER_ERROR",
} as const;
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode] | (string & {});

/** Converts `ErrorCode` values from (`parse`) and to (`serialize`) their JSON form. */
export const ErrorCodeSerializer = {
  parse(json: any, path = "$"): ErrorCode {
    return decodeString(json, path);
  },

  serialize(value: ErrorCode): any {
    return value;
  },
};
