// this file is @generated
import { extraProperties } from "../json.js";
import { decodeBoolean, decodeObject, decodePath, decodeString } from "../decode.js";
import { type ProductFamilyId, ProductFamilyIdSerializer } from "./productFamilyId.js";
import {
  type ProductFeeStructure,
  ProductFeeStructureSerializer,
} from "./productFeeStructure.js";

export interface CreateProductRequest {
  catalog?: boolean | undefined;
  description?: string | null | undefined;
  feeStructure: ProductFeeStructure;
  name: string;
  productFamilyId: ProductFamilyId;
}

/** Converts `CreateProductRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreateProductRequestSerializer = {
  parse(json: any, path = "$"): CreateProductRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "catalog",
        "description",
        "fee_structure",
        "name",
        "product_family_id",
      ]),
      catalog:
        json["catalog"] != null
          ? decodeBoolean(json["catalog"], path, "catalog")
          : undefined,
      description:
        json["description"] != null
          ? decodeString(json["description"], path, "description")
          : json["description"],
      feeStructure: ProductFeeStructureSerializer.parse(
        json["fee_structure"],
        decodePath(path, "fee_structure")
      ),
      name: decodeString(json["name"], path, "name"),
      productFamilyId: ProductFamilyIdSerializer.parse(
        json["product_family_id"],
        decodePath(path, "product_family_id")
      ),
    };
  },

  serialize(value: CreateProductRequest): any {
    return {
      ...extraProperties(value, [
        "catalog",
        "description",
        "feeStructure",
        "name",
        "productFamilyId",
      ]),
      catalog: value.catalog,
      description: value.description,
      fee_structure: ProductFeeStructureSerializer.serialize(value.feeStructure),
      name: value.name,
      product_family_id: ProductFamilyIdSerializer.serialize(value.productFamilyId),
    };
  },
};
