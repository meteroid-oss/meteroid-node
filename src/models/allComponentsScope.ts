// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";
/** Every revenue line counts toward the floor. */
export interface AllComponentsScope {
  type: "all_components";
}

/** Converts `AllComponentsScope` values from (`parse`) and to (`serialize`) their JSON form. */
export const AllComponentsScopeSerializer = {
  parse(json: any, path = "$"): AllComponentsScope {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["type"]),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "all_components")
          : "all_components",
    };
  },

  serialize(value: AllComponentsScope): any {
    return {
      ...extraProperties(value, ["type"]),
      type: value.type ?? "all_components",
    };
  },
};
