// this file is @generated

import {
  type MinimumCommitment,
  MinimumCommitmentSerializer,
} from "../models/minimumCommitment.js";
import {
  type PlanVersionListResponse,
  PlanVersionListResponseSerializer,
} from "../models/planVersionListResponse.js";
import type { PlanVersionSummary } from "../models/planVersionSummary.js";
import type { APIPromise } from "../apiPromise.js";
import { PagePromise } from "../pagination.js";
import {
  MeteroidRequest,
  type MeteroidRequestContext,
  type RequestOptions,
} from "../request.js";

/** The query and header parameters of `list`. */
export interface PlansVersionsListOptions {
  /** Page number (0-indexed) */
  page?: number | undefined;
  /** Number of items per page */
  perPage?: number | undefined;
}

/** The plans versions operations, reached through the client's `plans.versions`. */
export class PlansVersions {
  /** @internal */
  public constructor(private readonly requestCtx: MeteroidRequestContext) {}

  /** Set or replace the plan-level minimum commitment for a draft plan version. */
  public updateMinimum(
    planVersionId: string,
    minimumCommitment: MinimumCommitment,
    requestOptions?: RequestOptions
  ): APIPromise<MinimumCommitment> {
    const request = new MeteroidRequest(
      "PUT",
      "/api/v1/plans/versions/{plan_version_id}/minimum"
    );

    request.setPathParam("plan_version_id", planVersionId);
    request.setBody(MinimumCommitmentSerializer.serialize(minimumCommitment));
    return request.send(
      this.requestCtx,
      MinimumCommitmentSerializer.parse,
      requestOptions
    );
  }

  /** Remove the plan-level minimum commitment for a draft plan version. */
  public deleteMinimum(
    planVersionId: string,
    requestOptions?: RequestOptions
  ): APIPromise<void> {
    const request = new MeteroidRequest(
      "DELETE",
      "/api/v1/plans/versions/{plan_version_id}/minimum"
    );

    request.setPathParam("plan_version_id", planVersionId);
    return request.sendNoResponseBody(this.requestCtx, requestOptions);
  }

  /**
   * List plan versions
   *
   * Await it for the first page: the response body, its properties read on the page, with
   * `items`, `hasNextPage()`, `getNextPage()` and `iterPages()`. Or iterate it with `for await`
   * over every item of every page, fetched on demand.
   */
  public list(
    planId: string,
    options?: PlansVersionsListOptions,
    requestOptions?: RequestOptions
  ): PagePromise<PlanVersionListResponse, PlanVersionSummary> {
    return new PagePromise<PlanVersionListResponse, PlanVersionSummary>(
      {
        style: "page",
        items: (page) => page.data,
        totalPages: (page) => page.paginationMeta?.totalPages,
        firstPage: 0,
        fetch: (page) => this.#list(planId, { ...options, page: page }, requestOptions),
      },
      options?.page
    );
  }

  #list(
    planId: string,
    options?: PlansVersionsListOptions,
    requestOptions?: RequestOptions
  ): APIPromise<PlanVersionListResponse> {
    const request = new MeteroidRequest("GET", "/api/v1/plans/{plan_id}/versions");

    request.setPathParam("plan_id", planId);
    request.setQueryParam("page", options?.page);
    request.setQueryParam("per_page", options?.perPage);
    return request.send(
      this.requestCtx,
      PlanVersionListResponseSerializer.parse,
      requestOptions
    );
  }
}
