// this file is @generated
import { extraProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodeString } from "../decode.js";
/**
 * What one credit sells for in a currency. A price is never edited: setting a new one for the
 * same currency archives it.
 */
export interface CreditUnitPrice {
  /** When a newer price, or its removal, replaced it; absent while active. */
  archivedAt?: Date | null | undefined;
  /** When the price was set. */
  createdAt: Date;
  /** ISO 4217 code of the currency the unit sells in. */
  currency: string;
  /** The price's id (`cup_…`). */
  id: string;
  /** Major units of `currency` per credit, as a decimal string (e.g. "0.001"). */
  unitPrice: string;
}

/** Converts `CreditUnitPrice` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditUnitPriceSerializer = {
  parse(json: any, path = "$"): CreditUnitPrice {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "archived_at",
        "created_at",
        "currency",
        "id",
        "unit_price",
      ]),
      archivedAt:
        json["archived_at"] != null
          ? decodeDateTime(json["archived_at"], path, "archived_at")
          : json["archived_at"],
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      currency: decodeString(json["currency"], path, "currency"),
      id: decodeString(json["id"], path, "id"),
      unitPrice: decodeString(json["unit_price"], path, "unit_price"),
    };
  },

  serialize(value: CreditUnitPrice): any {
    return {
      ...extraProperties(value, [
        "archivedAt",
        "createdAt",
        "currency",
        "id",
        "unitPrice",
      ]),
      archived_at: value.archivedAt,
      created_at: value.createdAt,
      currency: value.currency,
      id: value.id,
      unit_price: value.unitPrice,
    };
  },
};
