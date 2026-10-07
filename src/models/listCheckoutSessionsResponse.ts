// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import { type CheckoutSession, CheckoutSessionSerializer } from "./checkoutSession.js";

export interface ListCheckoutSessionsResponse {
  sessions: CheckoutSession[];
}

/** Converts `ListCheckoutSessionsResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const ListCheckoutSessionsResponseSerializer = {
  parse(json: any, path = "$"): ListCheckoutSessionsResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["sessions"]),
      sessions: decodeList(
        json["sessions"],
        path,
        "sessions",
        (item: any, p: string, i: number) =>
          CheckoutSessionSerializer.parse(item, decodePath(p, i))
      ),
    };
  },

  serialize(value: ListCheckoutSessionsResponse): any {
    return {
      ...extraProperties(value, ["sessions"]),
      sessions: value.sessions.map((item: any) =>
        CheckoutSessionSerializer.serialize(item)
      ),
    };
  },
};
