// this file is @generated

import { type Budget, BudgetSerializer } from "../models/budget.js";
import {
  type BudgetListResponse,
  BudgetListResponseSerializer,
} from "../models/budgetListResponse.js";
import {
  type CreateBudgetRequest,
  CreateBudgetRequestSerializer,
} from "../models/createBudgetRequest.js";
import {
  type PatchBudgetRequest,
  PatchBudgetRequestSerializer,
} from "../models/patchBudgetRequest.js";
import type { APIPromise } from "../apiPromise.js";
import { PagePromise } from "../pagination.js";
import {
  MeteroidRequest,
  type MeteroidRequestContext,
  type RequestOptions,
} from "../request.js";

/** The query and header parameters of `list`. */
export interface BudgetsListOptions {
  /** Defaults to false. */
  includeArchived?: boolean | undefined;
  /** Page number (0-indexed) */
  page?: number | undefined;
  /** Number of items per page */
  perPage?: number | undefined;
}

/** The query and header parameters of `create`. */
export interface BudgetsCreateOptions {
  /** Sent as the `Idempotency-Key` header. */
  idempotencyKey: string;
}

/** The query and header parameters of `update`. */
export interface BudgetsUpdateOptions {
  /** Sent as the `Idempotency-Key` header. */
  idempotencyKey: string;
}

/** The query and header parameters of `archive`. */
export interface BudgetsArchiveOptions {
  /** Sent as the `Idempotency-Key` header. */
  idempotencyKey: string;
}

/** The budgets operations, reached through the client's `budgets`. */
export class Budgets {
  /** @internal */
  public constructor(private readonly requestCtx: MeteroidRequestContext) {}

  /**
   * List budgets
   *
   * A customer's budgets, oldest first, with their estimated spend in the current billing period.
   * Archived ones are left out unless requested.
   *
   * Beta: the request and response shapes of this endpoint may change before general availability.
   *
   * Await it for the first page: the response body, its properties read on the page, with
   * `items`, `hasNextPage()`, `getNextPage()` and `iterPages()`. Or iterate it with `for await`
   * over every item of every page, fetched on demand.
   */
  public list(
    idOrAlias: string,
    options?: BudgetsListOptions,
    requestOptions?: RequestOptions
  ): PagePromise<BudgetListResponse, Budget> {
    return new PagePromise<BudgetListResponse, Budget>(
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
    options?: BudgetsListOptions,
    requestOptions?: RequestOptions
  ): APIPromise<BudgetListResponse> {
    const request = new MeteroidRequest("GET", "/api/v1/customers/{id_or_alias}/budgets");

    request.setPathParam("id_or_alias", idOrAlias);
    request.setQueryParam("include_archived", options?.includeArchived);
    request.setQueryParam("page", options?.page);
    request.setQueryParam("per_page", options?.perPage);
    return request.send(
      this.requestCtx,
      BudgetListResponseSerializer.parse,
      requestOptions
    );
  }

  /**
   * Create a budget
   *
   * Sets a spending limit for one currency the customer is billed in, with alerts at percentages
   * of it, on the customer's whole spend or on one subscription's. A customer has one active
   * budget per currency, and per subscription.
   *
   * Beta: the request and response shapes of this endpoint may change before general availability.
   */
  public create(
    idOrAlias: string,
    createBudgetRequest: CreateBudgetRequest,
    options: BudgetsCreateOptions,
    requestOptions?: RequestOptions
  ): APIPromise<Budget> {
    const request = new MeteroidRequest(
      "POST",
      "/api/v1/customers/{id_or_alias}/budgets"
    );

    request.setPathParam("id_or_alias", idOrAlias);
    request.setHeaderParam("Idempotency-Key", options.idempotencyKey);
    request.setBody(CreateBudgetRequestSerializer.serialize(createBudgetRequest));
    return request.send(this.requestCtx, BudgetSerializer.parse, requestOptions);
  }

  /**
   * Update a budget
   *
   * Changes the amount, thresholds or behavior. Send the `version` you read as `expected_version`; a newer
   * stored version, for instance after the customer edited it, is refused with 409.
   *
   * Beta: the request and response shapes of this endpoint may change before general availability.
   */
  public update(
    idOrAlias: string,
    budgetId: string,
    patchBudgetRequest: PatchBudgetRequest,
    options: BudgetsUpdateOptions,
    requestOptions?: RequestOptions
  ): APIPromise<Budget> {
    const request = new MeteroidRequest(
      "PATCH",
      "/api/v1/customers/{id_or_alias}/budgets/{budget_id}"
    );

    request.setPathParam("id_or_alias", idOrAlias);
    request.setPathParam("budget_id", budgetId);
    request.setHeaderParam("Idempotency-Key", options.idempotencyKey);
    request.setBody(PatchBudgetRequestSerializer.serialize(patchBudgetRequest));
    return request.send(this.requestCtx, BudgetSerializer.parse, requestOptions);
  }

  /**
   * Archive a budget
   *
   * Stops the budget from sending alerts and, for a HARD budget, from refusing access. Archiving an
   * archived budget returns it unchanged.
   *
   * Beta: the request and response shapes of this endpoint may change before general availability.
   */
  public archive(
    idOrAlias: string,
    budgetId: string,
    options: BudgetsArchiveOptions,
    requestOptions?: RequestOptions
  ): APIPromise<Budget> {
    const request = new MeteroidRequest(
      "POST",
      "/api/v1/customers/{id_or_alias}/budgets/{budget_id}/archive"
    );

    request.setPathParam("id_or_alias", idOrAlias);
    request.setPathParam("budget_id", budgetId);
    request.setHeaderParam("Idempotency-Key", options.idempotencyKey);
    return request.send(this.requestCtx, BudgetSerializer.parse, requestOptions);
  }
}
