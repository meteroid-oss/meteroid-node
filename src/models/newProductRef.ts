// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import {
  type ProductFeeStructure,
  ProductFeeStructureSerializer,
} from "./productFeeStructure.js";
import {
  type ProductFeeTypeEnum,
  ProductFeeTypeEnumSerializer,
} from "./productFeeTypeEnum.js";

export interface NewProductRef {
  feeStructure: ProductFeeStructure;
  feeType: ProductFeeTypeEnum;
  name: string;
  type: "NEW";
}

/** Converts `NewProductRef` values from (`parse`) and to (`serialize`) their JSON form. */
export const NewProductRefSerializer = {
  parse(json: any, path = "$"): NewProductRef {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["fee_structure", "fee_type", "name", "type"]),
      feeStructure: ProductFeeStructureSerializer.parse(
        json["fee_structure"],
        decodePath(path, "fee_structure")
      ),
      feeType: ProductFeeTypeEnumSerializer.parse(
        json["fee_type"],
        decodePath(path, "fee_type")
      ),
      name: decodeString(json["name"], path, "name"),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "NEW")
          : "NEW",
    };
  },

  serialize(value: NewProductRef): any {
    return {
      ...extraProperties(value, ["feeStructure", "feeType", "name", "type"]),
      fee_structure: ProductFeeStructureSerializer.serialize(value.feeStructure),
      fee_type: ProductFeeTypeEnumSerializer.serialize(value.feeType),
      name: value.name,
      type: value.type ?? "NEW",
    };
  },
};
