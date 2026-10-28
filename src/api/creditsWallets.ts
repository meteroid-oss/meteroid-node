// this file is @generated

import type { Currency } from "../models/currency.js";
import {
  type PatchWalletRequest,
  PatchWalletRequestSerializer,
} from "../models/patchWalletRequest.js";
import type { ProductId } from "../models/productId.js";
import type { SubscriptionId } from "../models/subscriptionId.js";
import { type Wallet, WalletSerializer } from "../models/wallet.js";
import { type WalletCheck, WalletCheckSerializer } from "../models/walletCheck.js";
import {
  type WalletListResponse,
  WalletListResponseSerializer,
} from "../models/walletListResponse.js";
import type { APIPromise } from "../apiPromise.js";
import {
  MeteroidRequest,
  type MeteroidRequestContext,
  type RequestOptions,
} from "../request.js";

/** The query and header parameters of `list`. */
export interface CreditsWalletsListOptions {
  /**
   * Only the credit this subscription (`sub_…`) can use: the credit that belongs to it and
   * the customer's credit that belongs to no subscription. Every wallet is still listed.
   */
  subscriptionId?: SubscriptionId | undefined;
}

/** The query and header parameters of `check`. */
export interface CreditsWalletsCheckOptions {
  /** Defaults to the customer's currency. */
  currency?: Currency | undefined;
  /** Checks the wallet of this credit unit (its code) instead of a currency. */
  creditUnit?: string | undefined;
  /**
   * Checks only the credit that can pay for this product: credit not restricted to products,
   * and credit restricted to it. Absent checks all credit.
   */
  productId?: ProductId | undefined;
  /**
   * Checks only the credit this subscription (`sub_…`) can spend, net of its own usage no
   * credit pays: the credit that belongs to it and the customer's credit that belongs to no
   * subscription, once every subscription's unbilled usage is paid. `has_access` is then the
   * decision the access gate makes for that subscription's usage. Absent checks the
   * customer's credit as a whole.
   */
  subscriptionId?: SubscriptionId | undefined;
}

/** The query and header parameters of `update`. */
export interface CreditsWalletsUpdateOptions {
  /** Sent as the `Idempotency-Key` header. */
  idempotencyKey: string;
}

/** The credits wallets operations, reached through the client's `credits.wallets`. */
export class CreditsWallets {
  /** @internal */
  public constructor(private readonly requestCtx: MeteroidRequestContext) {}

  /**
   * List wallets
   *
   * A customer's credit per currency and credit unit: the credit on account, the usage not
   * invoiced yet and the balance left after it, with the wallet's alerts and automatic top-up. The
   * customer's own currency comes first, even when empty. With `subscription_id`, each wallet
   * counts only the credit that subscription can use.
   */
  public list(
    idOrAlias: string,
    options?: CreditsWalletsListOptions,
    requestOptions?: RequestOptions
  ): APIPromise<WalletListResponse> {
    const request = new MeteroidRequest("GET", "/api/v1/customers/{id_or_alias}/wallets");

    request.setPathParam("id_or_alias", idOrAlias);
    request.setQueryParam("subscription_id", options?.subscriptionId);
    return request.send(
      this.requestCtx,
      WalletListResponseSerializer.parse,
      requestOptions
    );
  }

  /**
   * Check wallet access
   *
   * Whether the customer's prepaid credit in a currency or credit unit still covers them, net of
   * usage not invoiced yet. Denies only when the wallet blocks usage once its credit is used up;
   * otherwise access stays allowed and `exhausted` signals the empty balance on its own. With
   * `subscription_id`, only the credit that subscription can use counts: pass it when the
   * customer has several subscriptions, since one subscription's credit cannot pay another's
   * usage. The balance follows usage within a few seconds near zero or a threshold, within a
   * minute otherwise, and the answer is cached for one second: use it to gate consumption, not
   * to bill.
   */
  public check(
    idOrAlias: string,
    options?: CreditsWalletsCheckOptions,
    requestOptions?: RequestOptions
  ): APIPromise<WalletCheck> {
    const request = new MeteroidRequest(
      "GET",
      "/api/v1/customers/{id_or_alias}/wallets/check"
    );

    request.setPathParam("id_or_alias", idOrAlias);
    request.setQueryParam("currency", options?.currency);
    request.setQueryParam("credit_unit", options?.creditUnit);
    request.setQueryParam("product_id", options?.productId);
    request.setQueryParam("subscription_id", options?.subscriptionId);
    return request.send(this.requestCtx, WalletCheckSerializer.parse, requestOptions);
  }

  /**
   * Configure a wallet
   *
   * Settings of a customer's wallet in one currency or credit unit: whether usage is refused
   * once its credit is used up, the balances that fire `wallet.balance_low`, and its automatic
   * top-up. Opens the wallet if it does not exist yet. Partial update: omit a field to leave it
   * unchanged.
   */
  public update(
    idOrAlias: string,
    currency: string,
    patchWalletRequest: PatchWalletRequest,
    options: CreditsWalletsUpdateOptions,
    requestOptions?: RequestOptions
  ): APIPromise<Wallet> {
    const request = new MeteroidRequest(
      "PATCH",
      "/api/v1/customers/{id_or_alias}/wallets/{currency}"
    );

    request.setPathParam("id_or_alias", idOrAlias);
    request.setPathParam("currency", currency);
    request.setHeaderParam("Idempotency-Key", options.idempotencyKey);
    request.setBody(PatchWalletRequestSerializer.serialize(patchWalletRequest));
    return request.send(this.requestCtx, WalletSerializer.parse, requestOptions);
  }
}
