// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface VoidEventRequest {
  /** External customer alias of the event. Set this or `customer_id`. */
  customerAlias?: string | null | undefined;
  /** Meteroid customer ID of the event. Set this or `customer_alias`. */
  customerId?: string | null | undefined;
}

/** Converts `VoidEventRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const VoidEventRequestSerializer = {
  parse(json: any, path = "$"): VoidEventRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["customer_alias", "customer_id"]),
      customerAlias:
        json["customer_alias"] != null
          ? decodeString(json["customer_alias"], path, "customer_alias")
          : json["customer_alias"],
      customerId:
        json["customer_id"] != null
          ? decodeString(json["customer_id"], path, "customer_id")
          : json["customer_id"],
    };
  },

  serialize(value: VoidEventRequest): any {
    return {
      ...extraProperties(value, ["customerAlias", "customerId"]),
      customer_alias: value.customerAlias,
      customer_id: value.customerId,
    };
  },
};
