// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface SelectOption {
  label?: string | null | undefined;
  value: string;
}

/** Converts `SelectOption` values from (`parse`) and to (`serialize`) their JSON form. */
export const SelectOptionSerializer = {
  parse(json: any, path = "$"): SelectOption {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["label", "value"]),
      label:
        json["label"] != null
          ? decodeString(json["label"], path, "label")
          : json["label"],
      value: decodeString(json["value"], path, "value"),
    };
  },

  serialize(value: SelectOption): any {
    return {
      ...extraProperties(value, ["label", "value"]),
      label: value.label,
      value: value.value,
    };
  },
};
