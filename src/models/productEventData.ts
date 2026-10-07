// this file is @generated
import { extraProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath, decodeString } from "../decode.js";
import { type ProductFamilyId, ProductFamilyIdSerializer } from "./productFamilyId.js";
import {
  type ProductFeeTypeEnum,
  ProductFeeTypeEnumSerializer,
} from "./productFeeTypeEnum.js";
import { type ProductId, ProductIdSerializer } from "./productId.js";

export interface ProductEventData {
  createdAt: Date;
  description?: string | null | undefined;
  feeType: ProductFeeTypeEnum;
  name: string;
  productFamilyId: ProductFamilyId;
  productId: ProductId;
}

/** Converts `ProductEventData` values from (`parse`) and to (`serialize`) their JSON form. */
export const ProductEventDataSerializer = {
  parse(json: any, path = "$"): ProductEventData {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "created_at",
        "description",
        "fee_type",
        "name",
        "product_family_id",
        "product_id",
      ]),
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      description:
        json["description"] != null
          ? decodeString(json["description"], path, "description")
          : json["description"],
      feeType: ProductFeeTypeEnumSerializer.parse(
        json["fee_type"],
        decodePath(path, "fee_type")
      ),
      name: decodeString(json["name"], path, "name"),
      productFamilyId: ProductFamilyIdSerializer.parse(
        json["product_family_id"],
        decodePath(path, "product_family_id")
      ),
      productId: ProductIdSerializer.parse(
        json["product_id"],
        decodePath(path, "product_id")
      ),
    };
  },

  serialize(value: ProductEventData): any {
    return {
      ...extraProperties(value, [
        "createdAt",
        "description",
        "feeType",
        "name",
        "productFamilyId",
        "productId",
      ]),
      created_at: value.createdAt,
      description: value.description,
      fee_type: ProductFeeTypeEnumSerializer.serialize(value.feeType),
      name: value.name,
      product_family_id: ProductFamilyIdSerializer.serialize(value.productFamilyId),
      product_id: ProductIdSerializer.serialize(value.productId),
    };
  },
};
