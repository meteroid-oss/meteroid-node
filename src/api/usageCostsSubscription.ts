// this file is @generated

import type { ListSubscriptionUsageCostsGranularity } from "../models/listSubscriptionUsageCostsGranularity.js";
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
export interface UsageCostsSubscriptionListCostsOptions {
  /** Billable metric, by ID or code. */
  metric: string;
  /** Event property to split the usage by. */
  groupBy?: string | undefined;
  granularity: ListSubscriptionUsageCostsGranularity;
  /** Start of the range, inclusive. */
  from: Date;
  /** End of the range, exclusive. At most 93 days after `from`. */
  to: Date;
}

/** The query and header parameters of `listEvents`. */
export interface UsageCostsSubscriptionListEventsOptions {
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

/** The usage costs subscription operations, reached through the client's `usageCosts.subscription`. */
export class UsageCostsSubscription {
  /** @internal */
  public constructor(private readonly requestCtx: MeteroidRequestContext) {}

  /**
   * List a subscription's usage costs over time
   *
   * The subscription's usage of one billable metric and what it costs, as for a customer but
   * counting only the events the subscription bills (see its usage filter) and only its own billing
   * periods. The range is at most 93 days.
   *
   * Beta: the request and response shapes of this endpoint may change before general availability.
   */
  public listCosts(
    subscriptionId: string,
    options: UsageCostsSubscriptionListCostsOptions,
    requestOptions?: RequestOptions
  ): APIPromise<UsageCostListResponse> {
    const request = new MeteroidRequest(
      "GET",
      "/api/v1/usage/subscription/{subscription_id}/costs"
    );

    request.setPathParam("subscription_id", subscriptionId);
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
   * List a subscription's usage events with their cost
   *
   * The events of one billable metric that the subscription bills, oldest first: with a usage
   * filter, only the customer's events matching it; without, those no other subscription's filter
   * claims. Costs are as for the customer's events. The range is at most 93 days.
   *
   * Beta: the request and response shapes of this endpoint may change before general availability.
   */
  public listEvents(
    subscriptionId: string,
    options: UsageCostsSubscriptionListEventsOptions,
    requestOptions?: RequestOptions
  ): APIPromise<UsageEventListResponse> {
    const request = new MeteroidRequest(
      "GET",
      "/api/v1/usage/subscription/{subscription_id}/events"
    );

    request.setPathParam("subscription_id", subscriptionId);
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
