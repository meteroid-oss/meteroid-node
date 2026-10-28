// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";
/** A new credit unit. */
export interface CreditUnitCreateRequest {
  /**
   * Immutable once created: 4 to 16 characters, A-Z/0-9/_, starting with a letter. Never an
   * ISO currency code (those are always 3 letters).
   */
  code: string;
  /** Singular display name, 1 to 64 characters, e.g. "Credit". */
  name: string;
  /** Plural display name, 1 to 64 characters, e.g. "Credits". */
  pluralName: string;
  /** Immutable once created: 0 to 6. */
  precision: number;
  /** Short display symbol, at most 8 characters. */
  symbol?: string | null | undefined;
}

/** Converts `CreditUnitCreateRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditUnitCreateRequestSerializer = {
  parse(json: any, path = "$"): CreditUnitCreateRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["code", "name", "plural_name", "precision", "symbol"]),
      code: decodeString(json["code"], path, "code"),
      name: decodeString(json["name"], path, "name"),
      pluralName: decodeString(json["plural_name"], path, "plural_name"),
      precision: decodeInteger(json["precision"], path, "precision"),
      symbol:
        json["symbol"] != null
          ? decodeString(json["symbol"], path, "symbol")
          : json["symbol"],
    };
  },

  serialize(value: CreditUnitCreateRequest): any {
    return {
      ...extraProperties(value, ["code", "name", "pluralName", "precision", "symbol"]),
      code: value.code,
      name: value.name,
      plural_name: value.pluralName,
      precision: value.precision,
      symbol: value.symbol,
    };
  },
};
