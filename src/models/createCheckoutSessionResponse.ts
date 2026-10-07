// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath } from "../decode.js";
import { type CheckoutSession, CheckoutSessionSerializer } from "./checkoutSession.js";

export interface CreateCheckoutSessionResponse {
  session: CheckoutSession;
}

/** Converts `CreateCheckoutSessionResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreateCheckoutSessionResponseSerializer = {
  parse(json: any, path = "$"): CreateCheckoutSessionResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["session"]),
      session: CheckoutSessionSerializer.parse(
        json["session"],
        decodePath(path, "session")
      ),
    };
  },

  serialize(value: CreateCheckoutSessionResponse): any {
    return {
      ...extraProperties(value, ["session"]),
      session: CheckoutSessionSerializer.serialize(value.session),
    };
  },
};
