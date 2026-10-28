// this file is @generated
import { extraProperties } from "../json.js";
import { decodeBoolean, decodeObject, decodeString } from "../decode.js";
/**
 * Partial update: an absent field is left unchanged. `code` and `precision` have no field here,
 * they are immutable. `symbol` set to `null` clears it.
 */
export interface CreditUnitUpdateRequest {
  /** Blocks the unit from new prices, packs and grants; existing ones keep working. */
  archived?: boolean | null | undefined;
  /** Singular display name, 1 to 64 characters. */
  name?: string | null | undefined;
  /** Plural display name, 1 to 64 characters. */
  pluralName?: string | null | undefined;
  /**
   * The product sales of the unit are booked under; `null` clears it, which stops the unit
   * from being sold.
   */
  productId?: string | null | undefined;
  /**
   * Validated by the store (trimmed, at most 8 characters) rather than here: `validator` has
   * no built-in support for a double `Option`.
   */
  symbol?: string | null | undefined;
}

/** Converts `CreditUnitUpdateRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditUnitUpdateRequestSerializer = {
  parse(json: any, path = "$"): CreditUnitUpdateRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "archived",
        "name",
        "plural_name",
        "product_id",
        "symbol",
      ]),
      archived:
        json["archived"] != null
          ? decodeBoolean(json["archived"], path, "archived")
          : json["archived"],
      name:
        json["name"] != null ? decodeString(json["name"], path, "name") : json["name"],
      pluralName:
        json["plural_name"] != null
          ? decodeString(json["plural_name"], path, "plural_name")
          : json["plural_name"],
      productId:
        json["product_id"] != null
          ? decodeString(json["product_id"], path, "product_id")
          : json["product_id"],
      symbol:
        json["symbol"] != null
          ? decodeString(json["symbol"], path, "symbol")
          : json["symbol"],
    };
  },

  serialize(value: CreditUnitUpdateRequest): any {
    return {
      ...extraProperties(value, [
        "archived",
        "name",
        "pluralName",
        "productId",
        "symbol",
      ]),
      archived: value.archived,
      name: value.name,
      plural_name: value.pluralName,
      product_id: value.productId,
      symbol: value.symbol,
    };
  },
};
