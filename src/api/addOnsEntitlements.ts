// this file is @generated

import {
  type CreateEntitlementsRequest,
  CreateEntitlementsRequestSerializer,
} from "../models/createEntitlementsRequest.js";
import {
  type EntitlementListResponse,
  EntitlementListResponseSerializer,
} from "../models/entitlementListResponse.js";
import {
  type ResolvedEntitlementListResponse,
  ResolvedEntitlementListResponseSerializer,
} from "../models/resolvedEntitlementListResponse.js";
import type { APIPromise } from "../apiPromise.js";
import {
  MeteroidRequest,
  type MeteroidRequestContext,
  type RequestOptions,
} from "../request.js";

/** The add ons entitlements operations, reached through the client's `addOns.entitlements`. */
export class AddOnsEntitlements {
  /** @internal */
  public constructor(private readonly requestCtx: MeteroidRequestContext) {}

  /** List add-on entitlements */
  public list(
    addonId: string,
    requestOptions?: RequestOptions
  ): APIPromise<ResolvedEntitlementListResponse> {
    const request = new MeteroidRequest("GET", "/api/v1/addons/{addon_id}/entitlements");

    request.setPathParam("addon_id", addonId);
    return request.send(
      this.requestCtx,
      ResolvedEntitlementListResponseSerializer.parse,
      requestOptions
    );
  }

  /**
   * Create add-on entitlements
   *
   * Entitlements already present on this add-on are skipped.
   */
  public create(
    addonId: string,
    createEntitlementsRequest: CreateEntitlementsRequest,
    requestOptions?: RequestOptions
  ): APIPromise<EntitlementListResponse> {
    const request = new MeteroidRequest("POST", "/api/v1/addons/{addon_id}/entitlements");

    request.setPathParam("addon_id", addonId);
    request.setBody(
      CreateEntitlementsRequestSerializer.serialize(createEntitlementsRequest)
    );
    return request.send(
      this.requestCtx,
      EntitlementListResponseSerializer.parse,
      requestOptions
    );
  }
}
