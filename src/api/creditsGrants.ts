// this file is @generated

import {
  type CreateCreditGrantRequest,
  CreateCreditGrantRequestSerializer,
} from "../models/createCreditGrantRequest.js";
import { type CreditGrant, CreditGrantSerializer } from "../models/creditGrant.js";
import {
  type CreditGrantListResponse,
  CreditGrantListResponseSerializer,
} from "../models/creditGrantListResponse.js";
import type { CreditGrantStatus } from "../models/creditGrantStatus.js";
import type { Currency } from "../models/currency.js";
import type { APIPromise } from "../apiPromise.js";
import { PagePromise } from "../pagination.js";
import {
  MeteroidRequest,
  type MeteroidRequestContext,
  type RequestOptions,
} from "../request.js";

/** The query and header parameters of `list`. */
export interface CreditsGrantsListOptions {
  /** Only grants in this currency. */
  currency?: Currency | undefined;
  /** Only grants in this credit unit (its code); excludes `currency`. */
  creditUnit?: string | undefined;
  status?: CreditGrantStatus | undefined;
  /**
   * Only the grants that belong to this subscription (`sub_…`); excludes
   * `usable_by_subscription_id`.
   */
  subscriptionId?: string | undefined;
  /**
   * Only the credit this subscription (`sub_…`) can use: its own grants and the customer's
   * grants that belong to no subscription. Excludes `subscription_id`.
   */
  usableBySubscriptionId?: string | undefined;
  /** Page number (0-indexed) */
  page?: number | undefined;
  /** Number of items per page */
  perPage?: number | undefined;
}

/** The query and header parameters of `create`. */
export interface CreditsGrantsCreateOptions {
  /** Sent as the `Idempotency-Key` header. */
  idempotencyKey: string;
}

/** The credits grants operations, reached through the client's `credits.grants`. */
export class CreditsGrants {
  /** @internal */
  public constructor(private readonly requestCtx: MeteroidRequestContext) {}

  /**
   * List credit grants
   *
   * A customer's credit grants, newest first, in every currency and credit unit unless filtered.
   *
   * Await it for the first page: the response body, its properties read on the page, with
   * `items`, `hasNextPage()`, `getNextPage()` and `iterPages()`. Or iterate it with `for await`
   * over every item of every page, fetched on demand.
   */
  public list(
    idOrAlias: string,
    options?: CreditsGrantsListOptions,
    requestOptions?: RequestOptions
  ): PagePromise<CreditGrantListResponse, CreditGrant> {
    return new PagePromise<CreditGrantListResponse, CreditGrant>(
      {
        style: "page",
        items: (page) => page.data,
        totalPages: (page) => page.paginationMeta?.totalPages,
        firstPage: 0,
        fetch: (page) =>
          this.#list(idOrAlias, { ...options, page: page }, requestOptions),
      },
      options?.page
    );
  }

  #list(
    idOrAlias: string,
    options?: CreditsGrantsListOptions,
    requestOptions?: RequestOptions
  ): APIPromise<CreditGrantListResponse> {
    const request = new MeteroidRequest(
      "GET",
      "/api/v1/customers/{id_or_alias}/credit-grants"
    );

    request.setPathParam("id_or_alias", idOrAlias);
    request.setQueryParam("currency", options?.currency);
    request.setQueryParam("credit_unit", options?.creditUnit);
    request.setQueryParam("status", options?.status);
    request.setQueryParam("subscription_id", options?.subscriptionId);
    request.setQueryParam("usable_by_subscription_id", options?.usableBySubscriptionId);
    request.setQueryParam("page", options?.page);
    request.setQueryParam("per_page", options?.perPage);
    return request.send(
      this.requestCtx,
      CreditGrantListResponseSerializer.parse,
      requestOptions
    );
  }

  /**
   * Create a credit grant
   *
   * Grants credit without charging or invoicing: PROMOTIONAL credit for free, or PAID credit the
   * customer paid for outside Meteroid ("Paid outside Meteroid"). A PAID currency grant whose
   * `cost` is below its `amount` is split into a PAID grant for the cost and a PROMOTIONAL bonus
   * grant for the rest, returned as `bonus_grant_id`; a `cost` above the `amount` is refused.
   * For a customer of a French invoicing entity, PAID credit that cost more than zero needs a
   * `reference` to the invoice or receipt of its payment. Sell credit through Meteroid with a
   * top-up.
   */
  public create(
    idOrAlias: string,
    createCreditGrantRequest: CreateCreditGrantRequest,
    options: CreditsGrantsCreateOptions,
    requestOptions?: RequestOptions
  ): APIPromise<CreditGrant> {
    const request = new MeteroidRequest(
      "POST",
      "/api/v1/customers/{id_or_alias}/credit-grants"
    );

    request.setPathParam("id_or_alias", idOrAlias);
    request.setHeaderParam("Idempotency-Key", options.idempotencyKey);
    request.setBody(
      CreateCreditGrantRequestSerializer.serialize(createCreditGrantRequest)
    );
    return request.send(this.requestCtx, CreditGrantSerializer.parse, requestOptions);
  }
}
