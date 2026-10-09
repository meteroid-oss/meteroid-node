// this file is @generated
import { extraProperties } from "../json.js";
import { decodeBoolean, decodeObject, decodeString } from "../decode.js";
/**
 * A custom header sent with every delivery. A sensitive header never returns its
 * value; `set` says whether it has one.
 */
export interface WebhookHeader {
  name: string;
  sensitive: boolean;
  set: boolean;
  value?: string | null | undefined;
}

/** Converts `WebhookHeader` values from (`parse`) and to (`serialize`) their JSON form. */
export const WebhookHeaderSerializer = {
  parse(json: any, path = "$"): WebhookHeader {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["name", "sensitive", "set", "value"]),
      name: decodeString(json["name"], path, "name"),
      sensitive: decodeBoolean(json["sensitive"], path, "sensitive"),
      set: decodeBoolean(json["set"], path, "set"),
      value:
        json["value"] != null
          ? decodeString(json["value"], path, "value")
          : json["value"],
    };
  },

  serialize(value: WebhookHeader): any {
    return {
      ...extraProperties(value, ["name", "sensitive", "set", "value"]),
      name: value.name,
      sensitive: value.sensitive,
      set: value.set,
      value: value.value,
    };
  },
};
