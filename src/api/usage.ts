// this file is @generated

import type { BillableMetricId } from "../models/billableMetricId.js";
import { type UsageResponse, UsageResponseSerializer } from "../models/usageResponse.js";
import { UsageCustomer } from "./usageCustomer.js";
import type { APIPromise } from "../apiPromise.js";
import {
  MeteroidRequest,
  type MeteroidRequestContext,
  type RequestOptions,
} from "../request.js";

/** The query and header parameters of `retrieveSubscription`. */
export interface UsageRetrieveSubscriptionOptions {
  startDate?: string | undefined;
  endDate?: string | undefined;
  metricId?: BillableMetricId | undefined;
}

/** The query and header parameters of `retrieveSummary`. */
export interface UsageRetrieveSummaryOptions {
  startDate: string;
  endDate: string;
  metricId?: BillableMetricId | undefined;
}

/** The usage operations, reached through the client's `usage`. */
export class Usage {
  private _customer?: UsageCustomer;
  /** @internal */
  public constructor(private readonly requestCtx: MeteroidRequestContext) {}

  /** The customer operations. */
  public get customer(): UsageCustomer {
    this._customer ??= new UsageCustomer(this.requestCtx);
    return this._customer;
  }

  /**
   * Get subscription usage
   *
   * Retrieve aggregated usage data for a subscription's usage-based components.
   * If start_date/end_date are omitted, defaults to the current billing period, and the response
   * then carries the running total (beta): what each metric's usage adds so far to the next invoice,
   * and what they add up to, before discounts and credits. That reading is shared for up to 30
   * seconds (see `computed_at`). Counts towards the usage cost reads' rate limit.
   */
  public retrieveSubscription(
    subscriptionId: string,
    options?: UsageRetrieveSubscriptionOptions,
    requestOptions?: RequestOptions
  ): APIPromise<UsageResponse> {
    const request = new MeteroidRequest(
      "GET",
      "/api/v1/usage/subscription/{subscription_id}"
    );

    request.setPathParam("subscription_id", subscriptionId);
    request.setQueryParam("start_date", options?.startDate);
    request.setQueryParam("end_date", options?.endDate);
    request.setQueryParam("metric_id", options?.metricId);
    return request.send(this.requestCtx, UsageResponseSerializer.parse, requestOptions);
  }

  /**
   * Get usage summary
   *
   * Retrieve aggregated usage data across all customers for the tenant.
   */
  public retrieveSummary(
    options: UsageRetrieveSummaryOptions,
    requestOptions?: RequestOptions
  ): APIPromise<UsageResponse> {
    const request = new MeteroidRequest("GET", "/api/v1/usage/summary");

    request.setQueryParam("start_date", options.startDate);
    request.setQueryParam("end_date", options.endDate);
    request.setQueryParam("metric_id", options?.metricId);
    return request.send(this.requestCtx, UsageResponseSerializer.parse, requestOptions);
  }
}
