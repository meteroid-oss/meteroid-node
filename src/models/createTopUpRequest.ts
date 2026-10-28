// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeDateTime,
  decodeInteger,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type Currency, CurrencySerializer } from "./currency.js";
import { type TopUpCollection, TopUpCollectionSerializer } from "./topUpCollection.js";
/** Credit sold to the customer, charged or invoiced. */
export interface CreateTopUpRequest {
  /**
   * Credit to buy, positive, applying to ALL charges. In minor units of `currency`, charged
   * one for one without tax: the usage it pays is taxed on the invoice that bills it. With
   * `credit_unit`, in minor units of that unit (e.g. 500000 is 5,000.00 credits of a unit with
   * precision 2), charged at the unit's price per credit in the customer's currency, plus tax
   * under the unit's product.
   */
  amount: number;
  /**
   * CHARGE (default) charges a saved payment method now; SEND_INVOICE issues an invoice and
   * grants the credit once it is paid.
   */
  collection?: TopUpCollection | undefined;
  /**
   * Buy credits of this credit unit (its code) instead of money; excludes `currency`. They are
   * charged in the customer's currency at the customer's agreed price for the unit (the
   * wallet's `unit_price`), else its list price, plus tax, under the unit's product.
   */
  creditUnit?: string | null | undefined;
  currency?: Currency | null | undefined;
  /** Absolute expiry of the purchased credit; unset never expires. */
  expiresAt?: Date | null | undefined;
  /** CHARGE only; defaults to the customer's default payment method. */
  paymentMethodId?: string | null | undefined;
  /**
   * With `credit_unit`: the negotiated price of one credit for this purchase, in major units of
   * the customer's currency, as a decimal string (e.g. "0.0008"). Defaults to the wallet's
   * `unit_price` when set, else the list price; the unit must still have a list price in that
   * currency.
   */
  unitPrice?: string | null | undefined;
}

/** Converts `CreateTopUpRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreateTopUpRequestSerializer = {
  parse(json: any, path = "$"): CreateTopUpRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "amount",
        "collection",
        "credit_unit",
        "currency",
        "expires_at",
        "payment_method_id",
        "unit_price",
      ]),
      amount: decodeInteger(json["amount"], path, "amount"),
      collection:
        json["collection"] != null
          ? TopUpCollectionSerializer.parse(
              json["collection"],
              decodePath(path, "collection")
            )
          : undefined,
      creditUnit:
        json["credit_unit"] != null
          ? decodeString(json["credit_unit"], path, "credit_unit")
          : json["credit_unit"],
      currency:
        json["currency"] != null
          ? CurrencySerializer.parse(json["currency"], decodePath(path, "currency"))
          : json["currency"],
      expiresAt:
        json["expires_at"] != null
          ? decodeDateTime(json["expires_at"], path, "expires_at")
          : json["expires_at"],
      paymentMethodId:
        json["payment_method_id"] != null
          ? decodeString(json["payment_method_id"], path, "payment_method_id")
          : json["payment_method_id"],
      unitPrice:
        json["unit_price"] != null
          ? decodeString(json["unit_price"], path, "unit_price")
          : json["unit_price"],
    };
  },

  serialize(value: CreateTopUpRequest): any {
    return {
      ...extraProperties(value, [
        "amount",
        "collection",
        "creditUnit",
        "currency",
        "expiresAt",
        "paymentMethodId",
        "unitPrice",
      ]),
      amount: value.amount,
      collection:
        value.collection != null
          ? TopUpCollectionSerializer.serialize(value.collection)
          : undefined,
      credit_unit: value.creditUnit,
      currency:
        value.currency != null
          ? CurrencySerializer.serialize(value.currency)
          : value.currency,
      expires_at: value.expiresAt,
      payment_method_id: value.paymentMethodId,
      unit_price: value.unitPrice,
    };
  },
};
