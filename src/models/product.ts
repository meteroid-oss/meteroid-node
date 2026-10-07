// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeDateTime,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type ProductFamilyId, ProductFamilyIdSerializer } from "./productFamilyId.js";
import {
  type ProductFeeStructure,
  ProductFeeStructureSerializer,
} from "./productFeeStructure.js";
import {
  type ProductFeeTypeEnum,
  ProductFeeTypeEnumSerializer,
} from "./productFeeTypeEnum.js";
import { type ProductId, ProductIdSerializer } from "./productId.js";

export interface Product {
  archivedAt?: Date | null | undefined;
  catalog: boolean;
  createdAt: Date;
  description?: string | null | undefined;
  feeStructure: ProductFeeStructure;
  feeType: ProductFeeTypeEnum;
  id: ProductId;
  name: string;
  productFamilyId: ProductFamilyId;
}

/** Converts `Product` values from (`parse`) and to (`serialize`) their JSON form. */
export const ProductSerializer = {
  parse(json: any, path = "$"): Product {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "archived_at",
        "catalog",
        "created_at",
        "description",
        "fee_structure",
        "fee_type",
        "id",
        "name",
        "product_family_id",
      ]),
      archivedAt:
        json["archived_at"] != null
          ? decodeDateTime(json["archived_at"], path, "archived_at")
          : json["archived_at"],
      catalog: decodeBoolean(json["catalog"], path, "catalog"),
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      description:
        json["description"] != null
          ? decodeString(json["description"], path, "description")
          : json["description"],
      feeStructure: ProductFeeStructureSerializer.parse(
        json["fee_structure"],
        decodePath(path, "fee_structure")
      ),
      feeType: ProductFeeTypeEnumSerializer.parse(
        json["fee_type"],
        decodePath(path, "fee_type")
      ),
      id: ProductIdSerializer.parse(json["id"], decodePath(path, "id")),
      name: decodeString(json["name"], path, "name"),
      productFamilyId: ProductFamilyIdSerializer.parse(
        json["product_family_id"],
        decodePath(path, "product_family_id")
      ),
    };
  },

  serialize(value: Product): any {
    return {
      ...extraProperties(value, [
        "archivedAt",
        "catalog",
        "createdAt",
        "description",
        "feeStructure",
        "feeType",
        "id",
        "name",
        "productFamilyId",
      ]),
      archived_at: value.archivedAt,
      catalog: value.catalog,
      created_at: value.createdAt,
      description: value.description,
      fee_structure: ProductFeeStructureSerializer.serialize(value.feeStructure),
      fee_type: ProductFeeTypeEnumSerializer.serialize(value.feeType),
      id: ProductIdSerializer.serialize(value.id),
      name: value.name,
      product_family_id: ProductFamilyIdSerializer.serialize(value.productFamilyId),
    };
  },
};
