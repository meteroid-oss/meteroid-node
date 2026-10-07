// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject } from "../decode.js";
/**
 * Merge update of an invoice's custom property values (send a key with `null` to remove it).
 * Allowed at any status — custom properties stay editable after the invoice is finalized.
 */
export interface InvoiceCustomPropertiesRequest {
  customProperties: unknown;
}

/** Converts `InvoiceCustomPropertiesRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const InvoiceCustomPropertiesRequestSerializer = {
  parse(json: any, path = "$"): InvoiceCustomPropertiesRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["custom_properties"]),
      customProperties: json["custom_properties"],
    };
  },

  serialize(value: InvoiceCustomPropertiesRequest): any {
    return {
      ...extraProperties(value, ["customProperties"]),
      custom_properties: value.customProperties,
    };
  },
};
