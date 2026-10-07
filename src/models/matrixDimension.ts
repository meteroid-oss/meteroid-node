// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface MatrixDimension {
  key: string;
  value: string;
}

/** Converts `MatrixDimension` values from (`parse`) and to (`serialize`) their JSON form. */
export const MatrixDimensionSerializer = {
  parse(json: any, path = "$"): MatrixDimension {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["key", "value"]),
      key: decodeString(json["key"], path, "key"),
      value: decodeString(json["value"], path, "value"),
    };
  },

  serialize(value: MatrixDimension): any {
    return {
      ...extraProperties(value, ["key", "value"]),
      key: value.key,
      value: value.value,
    };
  },
};
