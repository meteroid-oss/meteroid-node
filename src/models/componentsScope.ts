// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodeString } from "../decode.js";
/** Component names — matched against `ReplacePlanRequest::components[].name`. */
export interface ComponentsScope {
  componentNames: string[];
  type: "components";
}

/** Converts `ComponentsScope` values from (`parse`) and to (`serialize`) their JSON form. */
export const ComponentsScopeSerializer = {
  parse(json: any, path = "$"): ComponentsScope {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["component_names", "type"]),
      componentNames: decodeList(
        json["component_names"],
        path,
        "component_names",
        (item: any, p: string, i: number) => decodeString(item, p, i)
      ),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "components")
          : "components",
    };
  },

  serialize(value: ComponentsScope): any {
    return {
      ...extraProperties(value, ["componentNames", "type"]),
      component_names: value.componentNames,
      type: value.type ?? "components",
    };
  },
};
