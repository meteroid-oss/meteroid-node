// this file is @generated

import type { BillableMetricId } from "../models/billableMetricId.js";
import {
  type UnattributedUsageResponse,
  UnattributedUsageResponseSerializer,
} from "../models/unattributedUsageResponse.js";
import { type UsageResponse, UsageResponseSerializer } from "../models/usageResponse.js";
import type { APIPromise } from "../apiPromise.js";
import {
  MeteroidRequest,
  type MeteroidRequestContext,
  type RequestOptions,
} from "../request.js";

/** The query and header parameters of `retrieve`. */
export interface UsageCustomerRetrieveOptions {
  startDate: string;
  endDate: string;
  metricId?: BillableMetricId | undefined;
}

/** The query and header parameters of `retrieveUnattributed`. */
export interface UsageCustomerRetrieveUnattributedOptions {
  /** First day of the range. Defaults to the first day of the current month (UTC). */
  startDate?: string | undefined;
  /** Day after the range (exclusive). Defaults to the first day of the next month. */
  endDate?: string | undefined;
}

/** The usage customer operations, reached through the client's `usage.customer`. */
export class UsageCustomer {
  /** @internal */
  public constructor(private readonly requestCtx: MeteroidRequestContext) {}

  /**
   * Get customer usage
   *
   * Retrieve aggregated usage data for a customer over a specified period.
   */
  public retrieve(
    customerId: string,
    options: UsageCustomerRetrieveOptions,
    requestOptions?: RequestOptions
  ): APIPromise<UsageResponse> {
    const request = new MeteroidRequest("GET", "/api/v1/usage/customer/{customer_id}");

    request.setPathParam("customer_id", customerId);
    request.setQueryParam("start_date", options.startDate);
    request.setQueryParam("end_date", options.endDate);
    request.setQueryParam("metric_id", options?.metricId);
    return request.send(this.requestCtx, UsageResponseSerializer.parse, requestOptions);
  }

  /**
   * Get unattributed usage
   *
   * Retrieve a customer's usage that no subscription bills. When subscriptions of the customer
   * pricing a metric set a usage filter, events matching none of the filters are billed by a
   * subscription without one; when every such subscription has a filter, those events are kept
   * and reported here instead of being billed.
   */
  public retrieveUnattributed(
    customerId: string,
    options?: UsageCustomerRetrieveUnattributedOptions,
    requestOptions?: RequestOptions
  ): APIPromise<UnattributedUsageResponse> {
    const request = new MeteroidRequest(
      "GET",
      "/api/v1/usage/customer/{customer_id}/unattributed"
    );

    request.setPathParam("customer_id", customerId);
    request.setQueryParam("start_date", options?.startDate);
    request.setQueryParam("end_date", options?.endDate);
    return request.send(
      this.requestCtx,
      UnattributedUsageResponseSerializer.parse,
      requestOptions
    );
  }
}
