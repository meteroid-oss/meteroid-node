// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeInteger,
  decodeList,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type CreditUnitPrice, CreditUnitPriceSerializer } from "./creditUnitPrice.js";
/**
 * A tenant-defined denomination usage can be priced or credit granted in, instead of money.
 * `code` and `precision` are immutable once created.
 */
export interface CreditUnit {
  /** Archived units take no new prices, packs or grants; existing ones keep working. */
  archived: boolean;
  /** Upper-case code naming the unit in wallets, grants and webhooks, e.g. `CREDITS`. */
  code: string;
  /** The unit's id (`cun_…`). */
  id: string;
  /** Singular display name, e.g. "Credit". */
  name: string;
  /** Plural display name, e.g. "Credits". */
  pluralName: string;
  /** Minor-unit exponent: amounts of this unit are integers of 10^-precision credit. */
  precision: number;
  /** The active selling prices, one per currency. */
  prices: CreditUnitPrice[];
  /**
   * The product sales of this unit are booked under: their tax category and accounting code.
   * The unit can be sold (top-ups) only once it is set.
   */
  productId?: string | null | undefined;
  /** Short display symbol, e.g. "cr". */
  symbol?: string | null | undefined;
}

/** Converts `CreditUnit` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditUnitSerializer = {
  parse(json: any, path = "$"): CreditUnit {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "archived",
        "code",
        "id",
        "name",
        "plural_name",
        "precision",
        "prices",
        "product_id",
        "symbol",
      ]),
      archived: decodeBoolean(json["archived"], path, "archived"),
      code: decodeString(json["code"], path, "code"),
      id: decodeString(json["id"], path, "id"),
      name: decodeString(json["name"], path, "name"),
      pluralName: decodeString(json["plural_name"], path, "plural_name"),
      precision: decodeInteger(json["precision"], path, "precision"),
      prices: decodeList(
        json["prices"],
        path,
        "prices",
        (item: any, p: string, i: number) =>
          CreditUnitPriceSerializer.parse(item, decodePath(p, i))
      ),
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

  serialize(value: CreditUnit): any {
    return {
      ...extraProperties(value, [
        "archived",
        "code",
        "id",
        "name",
        "pluralName",
        "precision",
        "prices",
        "productId",
        "symbol",
      ]),
      archived: value.archived,
      code: value.code,
      id: value.id,
      name: value.name,
      plural_name: value.pluralName,
      precision: value.precision,
      prices: value.prices.map((item: any) => CreditUnitPriceSerializer.serialize(item)),
      product_id: value.productId,
      symbol: value.symbol,
    };
  },
};
