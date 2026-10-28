// this file is @generated

import {
  type EntitlementCheck,
  EntitlementCheckSerializer,
} from "../models/entitlementCheck.js";
import type { APIPromise } from "../apiPromise.js";
import {
  MeteroidRequest,
  type MeteroidRequestContext,
  type RequestOptions,
} from "../request.js";

/** The query and header parameters of `checkEntitlement`. */
export interface ChecksCheckEntitlementOptions {
  /** Units the customer is about to consume. Defaults to 1. */
  requested?: string | undefined;
  /**
   * The subscription (`sub_…`) the usage belongs to: only its own budgets and the customer-wide
   * ones apply. Without it, a budget on one subscription refuses only once every subscription
   * charging the feature's metric is refused by its own budget.
   */
  subscriptionId?: string | undefined;
  /** The group to check, as `group[<property>]=<value>`: required when the entitlement is grouped */
  group?: { [key: string]: string } | undefined;
}

/** The checks operations, reached through the client's `checks`. */
export class Checks {
  /** @internal */
  public constructor(private readonly requestCtx: MeteroidRequestContext) {}

  /**
   * Check customer entitlement
   *
   * Whether the customer may consume `requested` more of a feature right now, given their
   * entitlement, the hard budgets that count the feature's usage, and their prepaid credit.
   * Boolean features answer from their enabled state; config features grant access and return
   * their `value`. An `ALLOW` limit never refuses: `in_overage` tells when the requested units go
   * beyond it. Sliding windows send no threshold webhooks. Pass the group as
   * `group[<property>]=<value>`: it is required when the entitlement is grouped. Pass
   * `subscription_id` when the usage belongs to one subscription, so that a hard budget on another
   * subscription does not refuse it.
   *
   * The answer reflects usage up to `as_of`: typically less than a minute old, and less than 10
   * seconds old once `near_limit` is true. A hard limit can therefore be exceeded by the usage of
   * those few seconds. While `near_limit` is true, check before every request with its actual
   * `requested` and do not cache the answer; `retry_after_ms` says when to check again. Use the
   * check to gate access, not to bill.
   *
   * Beta: the request and response shapes of this endpoint may change before general availability.
   */
  public checkEntitlement(
    idOrAlias: string,
    featureIdOrCode: string,
    options?: ChecksCheckEntitlementOptions,
    requestOptions?: RequestOptions
  ): APIPromise<EntitlementCheck> {
    const request = new MeteroidRequest(
      "GET",
      "/api/v1/customers/{id_or_alias}/entitlements/{feature_id_or_code}/check"
    );

    request.setPathParam("id_or_alias", idOrAlias);
    request.setPathParam("feature_id_or_code", featureIdOrCode);
    request.setQueryParam("requested", options?.requested);
    request.setQueryParam("subscription_id", options?.subscriptionId);
    request.setStructuredQueryParam("group", options?.group, true, true);
    return request.send(
      this.requestCtx,
      EntitlementCheckSerializer.parse,
      requestOptions
    );
  }
}
