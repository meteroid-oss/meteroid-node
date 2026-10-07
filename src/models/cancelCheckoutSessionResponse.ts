// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath } from "../decode.js";
import { type CheckoutSession, CheckoutSessionSerializer } from "./checkoutSession.js";

export interface CancelCheckoutSessionResponse {
  session: CheckoutSession;
}

/** Converts `CancelCheckoutSessionResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const CancelCheckoutSessionResponseSerializer = {
  parse(json: any, path = "$"): CancelCheckoutSessionResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["session"]),
      session: CheckoutSessionSerializer.parse(
        json["session"],
        decodePath(path, "session")
      ),
    };
  },

  serialize(value: CancelCheckoutSessionResponse): any {
    return {
      ...extraProperties(value, ["session"]),
      session: CheckoutSessionSerializer.serialize(value.session),
    };
  },
};
