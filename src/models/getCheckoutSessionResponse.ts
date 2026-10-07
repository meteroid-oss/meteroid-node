// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath } from "../decode.js";
import { type CheckoutSession, CheckoutSessionSerializer } from "./checkoutSession.js";

export interface GetCheckoutSessionResponse {
  session: CheckoutSession;
}

/** Converts `GetCheckoutSessionResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const GetCheckoutSessionResponseSerializer = {
  parse(json: any, path = "$"): GetCheckoutSessionResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["session"]),
      session: CheckoutSessionSerializer.parse(
        json["session"],
        decodePath(path, "session")
      ),
    };
  },

  serialize(value: GetCheckoutSessionResponse): any {
    return {
      ...extraProperties(value, ["session"]),
      session: CheckoutSessionSerializer.serialize(value.session),
    };
  },
};
