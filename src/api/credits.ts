// this file is @generated

import {
  type CreateTopUpRequest,
  CreateTopUpRequestSerializer,
} from "../models/createTopUpRequest.js";
import type { Currency } from "../models/currency.js";
import type { LedgerEntry } from "../models/ledgerEntry.js";
import {
  type LedgerListResponse,
  LedgerListResponseSerializer,
} from "../models/ledgerListResponse.js";
import { type TopUpResponse, TopUpResponseSerializer } from "../models/topUpResponse.js";
import { CreditsGrants } from "./creditsGrants.js";
import { CreditsWallets } from "./creditsWallets.js";
import type { APIPromise } from "../apiPromise.js";
import { PagePromise } from "../pagination.js";
import {
  MeteroidRequest,
  type MeteroidRequestContext,
  type RequestOptions,
} from "../request.js";

/** The query and header parameters of `listCustomerCreditLedger`. */
export interface CreditsListCustomerCreditLedgerOptions {
  /** Defaults to the customer's currency. */
  currency?: Currency | undefined;
  /** The ledger of this credit unit (its code) instead of a currency; excludes `currency`. */
  creditUnit?: string | undefined;
  /** Page number (0-indexed) */
  page?: number | undefined;
  /** Number of items per page */
  perPage?: number | undefined;
}

/** The query and header parameters of `createCustomerTopUp`. */
export interface CreditsCreateCustomerTopUpOptions {
  /** Sent as the `Idempotency-Key` header. */
  idempotencyKey: string;
}

/** The credits operations, reached through the client's `credits`. */
export class Credits {
  private _grants?: CreditsGrants;
  private _wallets?: CreditsWallets;
  /** @internal */
  public constructor(private readonly requestCtx: MeteroidRequestContext) {}

  /** The grants operations. */
  public get grants(): CreditsGrants {
    this._grants ??= new CreditsGrants(this.requestCtx);
    return this._grants;
  }

  /** The wallets operations. */
  public get wallets(): CreditsWallets {
    this._wallets ??= new CreditsWallets(this.requestCtx);
    return this._wallets;
  }

  /**
   * List credit ledger entries
   *
   * Every movement of a customer's credit in one currency or credit unit, newest first, with the
   * credit on account after it: credit granted, applied to invoices, given back, expired or
   * rolled over.
   *
   * Await it for the first page: the response body, its properties read on the page, with
   * `items`, `hasNextPage()`, `getNextPage()` and `iterPages()`. Or iterate it with `for await`
   * over every item of every page, fetched on demand.
   */
  public listCustomerCreditLedger(
    idOrAlias: string,
    options?: CreditsListCustomerCreditLedgerOptions,
    requestOptions?: RequestOptions
  ): PagePromise<LedgerListResponse, LedgerEntry> {
    return new PagePromise<LedgerListResponse, LedgerEntry>(
      {
        style: "page",
        items: (page) => page.data,
        totalPages: (page) => page.paginationMeta?.totalPages,
        firstPage: 0,
        fetch: (page) =>
          this.#listCustomerCreditLedger(
            idOrAlias,
            { ...options, page: page },
            requestOptions
          ),
      },
      options?.page
    );
  }

  #listCustomerCreditLedger(
    idOrAlias: string,
    options?: CreditsListCustomerCreditLedgerOptions,
    requestOptions?: RequestOptions
  ): APIPromise<LedgerListResponse> {
    const request = new MeteroidRequest(
      "GET",
      "/api/v1/customers/{id_or_alias}/credit-ledger"
    );

    request.setPathParam("id_or_alias", idOrAlias);
    request.setQueryParam("currency", options?.currency);
    request.setQueryParam("credit_unit", options?.creditUnit);
    request.setQueryParam("page", options?.page);
    request.setQueryParam("per_page", options?.perPage);
    return request.send(
      this.requestCtx,
      LedgerListResponseSerializer.parse,
      requestOptions
    );
  }

  /**
   * Create a top-up
   *
   * Sells credit: CHARGE bills a saved payment method now, SEND_INVOICE grants it once paid. The
   * credit is PAID and applies to ALL charges. Currency credit is sold one for one, untaxed, as
   * its usage is taxed when invoiced. With `credit_unit`, sells credits of that unit at its
   * selling price in the customer's currency, taxed at purchase under the unit's product; refused
   * when the unit has no price in that currency or no product. Without a saved payment method,
   * CHARGE returns a hosted `checkout_url` where the customer pays.
   */
  public createCustomerTopUp(
    idOrAlias: string,
    createTopUpRequest: CreateTopUpRequest,
    options: CreditsCreateCustomerTopUpOptions,
    requestOptions?: RequestOptions
  ): APIPromise<TopUpResponse> {
    const request = new MeteroidRequest(
      "POST",
      "/api/v1/customers/{id_or_alias}/top-ups"
    );

    request.setPathParam("id_or_alias", idOrAlias);
    request.setHeaderParam("Idempotency-Key", options.idempotencyKey);
    request.setBody(CreateTopUpRequestSerializer.serialize(createTopUpRequest));
    return request.send(this.requestCtx, TopUpResponseSerializer.parse, requestOptions);
  }
}
