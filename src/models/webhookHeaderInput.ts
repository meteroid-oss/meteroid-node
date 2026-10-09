// this file is @generated
import { extraProperties } from "../json.js";
import { decodeBoolean, decodeObject, decodeString } from "../decode.js";
/**
 * A custom header to send with every delivery. A sensitive header is write-only:
 * it is never returned, and on update sending it without a value keeps its value.
 */
export interface WebhookHeaderInput {
  name: string;
  sensitive?: boolean | undefined;
  value?: string | null | undefined;
}

/** Converts `WebhookHeaderInput` values from (`parse`) and to (`serialize`) their JSON form. */
export const WebhookHeaderInputSerializer = {
  parse(json: any, path = "$"): WebhookHeaderInput {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["name", "sensitive", "value"]),
      name: decodeString(json["name"], path, "name"),
      sensitive:
        json["sensitive"] != null
          ? decodeBoolean(json["sensitive"], path, "sensitive")
          : undefined,
      value:
        json["value"] != null
          ? decodeString(json["value"], path, "value")
          : json["value"],
    };
  },

  serialize(value: WebhookHeaderInput): any {
    return {
      ...extraProperties(value, ["name", "sensitive", "value"]),
      name: value.name,
      sensitive: value.sensitive,
      value: value.value,
    };
  },
};
