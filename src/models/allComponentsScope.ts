// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject } from "../decode.js";
/** Every revenue line counts toward the floor. */
export interface AllComponentsScope {}

/** Converts `AllComponentsScope` values from (`parse`) and to (`serialize`) their JSON form. */
export const AllComponentsScopeSerializer = {
  parse(json: any, path = "$"): AllComponentsScope {
    decodeObject(json, path);
    return {
      ...extraProperties(json, []),
    };
  },

  serialize(value: AllComponentsScope): any {
    return {
      ...extraProperties(value, []),
    };
  },
};
