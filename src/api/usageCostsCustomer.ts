// this file is @generated

import type { ListCustomerUsageCostsGranularity } from "../models/listCustomerUsageCostsGranularity.js";
import {
  type UsageCostListResponse,
  UsageCostListResponseSerializer,
} from "../models/usageCostListResponse.js";
import {
  type UsageEventListResponse,
  UsageEventListResponseSerializer,
} from "../models/usageEventListResponse.js";
import type { APIPromise } from "../apiPromise.js";
import {
  MeteroidRequest,
  type MeteroidRequestContext,
  type RequestOptions,
} from "../request.js";

/** The query and header parameters of `listCosts`. */
export interface UsageCostsCustomerListCostsOptions {
  /** Billable metric, by ID or code. */
  metric: string;
  /** Event property to split the usage by. */
  groupBy?: string | undefined;
  granularity: ListCustomerUsageCostsGranularity;
  /** Start of the range, inclusive. */
  from: Date;
  /** End of the range, exclusive. At most 93 days after `from`. */
  to: Date;
}

/** The query and header parameters of `listEvents`. */
export interface UsageCostsCustomerListEventsOptions {
  /** Billable metric, by ID or code. */
  metric: string;
  /** Start of the range, inclusive. */
  from: Date;
  /** End of the range, exclusive. At most 93 days after `from`. */
  to: Date;
  /** The `next_cursor` of the previous page. */
  cursor?: string | undefined;
  /** Page size, 100 by default and 500 at most. */
  limit?: number | undefined;
}

/** The usage costs customer operations, reached through the client's `usageCosts.customer`. */
export class UsageCostsCustomer {
  /** @internal */
  public constructor(private readonly requestCtx: MeteroidRequestContext) {}

  /**
   * List a customer's usage costs over time
   *
   * A customer's usage of one billable metric and what it costs, per hour, day or month, optionally
   * split by an event property, summed across the subscriptions that bill it. Buckets are cut at UTC
   * boundaries and only cover the customer's billing periods. Per-unit and matrix pricing give exact
   * costs. For pricing that depends on the whole period's usage (tiered, volume, package, capacity),
   * a bucket's cost is what it adds to the period's price so far and `exact` is false. The range is
   * at most 93 days.
   *
   * Beta: the request and response shapes of this endpoint may change before general availability.
   */
  public listCosts(
    customerId: string,
    options: UsageCostsCustomerListCostsOptions,
    requestOptions?: RequestOptions
  ): APIPromise<UsageCostListResponse> {
    const request = new MeteroidRequest(
      "GET",
      "/api/v1/usage/customer/{customer_id}/costs"
    );

    request.setPathParam("customer_id", customerId);
    request.setQueryParam("metric", options.metric);
    request.setQueryParam("group_by", options?.groupBy);
    request.setQueryParam("granularity", options.granularity);
    request.setQueryParam("from", options.from);
    request.setQueryParam("to", options.to);
    return request.send(
      this.requestCtx,
      UsageCostListResponseSerializer.parse,
      requestOptions
    );
  }

  /**
   * List a customer's usage events with their cost
   *
   * A customer's events for one billable metric, oldest first, each with the units it adds and what
   * they cost at the price in force. The cost is exact for per-unit and matrix pricing and absent
   * for pricing that depends on the whole period's usage (tiered, volume, package, capacity) and for
   * aggregations that cannot be split per event. The range is at most 93 days.
   *
   * Beta: the request and response shapes of this endpoint may change before general availability.
   */
  public listEvents(
    customerId: string,
    options: UsageCostsCustomerListEventsOptions,
    requestOptions?: RequestOptions
  ): APIPromise<UsageEventListResponse> {
    const request = new MeteroidRequest(
      "GET",
      "/api/v1/usage/customer/{customer_id}/events"
    );

    request.setPathParam("customer_id", customerId);
    request.setQueryParam("metric", options.metric);
    request.setQueryParam("from", options.from);
    request.setQueryParam("to", options.to);
    request.setQueryParam("cursor", options?.cursor);
    request.setQueryParam("limit", options?.limit);
    return request.send(
      this.requestCtx,
      UsageEventListResponseSerializer.parse,
      requestOptions
    );
  }
}
