// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodePath, decodeString } from "../decode.js";
import { type Currency, CurrencySerializer } from "./currency.js";
import { type TopUpStatus, TopUpStatusSerializer } from "./topUpStatus.js";
/** Where a top-up stands. Its credit is granted once it is paid; `wallet.funded` reports it. */
export interface TopUpResponse {
  /** Credit bought, in minor units of `currency`, or of `credit_unit` when set. */
  amount: number;
  /**
   * Charged to the payment method, tax included, in minor units of `currency`; absent until a
   * charge is made.
   */
  chargedAmount?: number | null | undefined;
  /** Hosted page where the customer completes the payment; present while it awaits them. */
  checkoutUrl?: string | null | undefined;
  /** Set when credits of this credit unit were bought: `amount` is in its minor units. */
  creditUnit?: string | null | undefined;
  /** The money the top-up is charged in. */
  currency: Currency;
  /** The invoice documenting the purchase. */
  invoiceId?: string | null | undefined;
  /** The charge made on the payment method; absent until a charge is made. */
  paymentTransactionId?: string | null | undefined;
  /** SUCCEEDED once paid; otherwise what the payment is waiting for. */
  status: TopUpStatus;
}

/** Converts `TopUpResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const TopUpResponseSerializer = {
  parse(json: any, path = "$"): TopUpResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "amount",
        "charged_amount",
        "checkout_url",
        "credit_unit",
        "currency",
        "invoice_id",
        "payment_transaction_id",
        "status",
      ]),
      amount: decodeInteger(json["amount"], path, "amount"),
      chargedAmount:
        json["charged_amount"] != null
          ? decodeInteger(json["charged_amount"], path, "charged_amount")
          : json["charged_amount"],
      checkoutUrl:
        json["checkout_url"] != null
          ? decodeString(json["checkout_url"], path, "checkout_url")
          : json["checkout_url"],
      creditUnit:
        json["credit_unit"] != null
          ? decodeString(json["credit_unit"], path, "credit_unit")
          : json["credit_unit"],
      currency: CurrencySerializer.parse(json["currency"], decodePath(path, "currency")),
      invoiceId:
        json["invoice_id"] != null
          ? decodeString(json["invoice_id"], path, "invoice_id")
          : json["invoice_id"],
      paymentTransactionId:
        json["payment_transaction_id"] != null
          ? decodeString(json["payment_transaction_id"], path, "payment_transaction_id")
          : json["payment_transaction_id"],
      status: TopUpStatusSerializer.parse(json["status"], decodePath(path, "status")),
    };
  },

  serialize(value: TopUpResponse): any {
    return {
      ...extraProperties(value, [
        "amount",
        "chargedAmount",
        "checkoutUrl",
        "creditUnit",
        "currency",
        "invoiceId",
        "paymentTransactionId",
        "status",
      ]),
      amount: value.amount,
      charged_amount: value.chargedAmount,
      checkout_url: value.checkoutUrl,
      credit_unit: value.creditUnit,
      currency: CurrencySerializer.serialize(value.currency),
      invoice_id: value.invoiceId,
      payment_transaction_id: value.paymentTransactionId,
      status: TopUpStatusSerializer.serialize(value.status),
    };
  },
};
