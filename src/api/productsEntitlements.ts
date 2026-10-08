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

/** The products entitlements operations, reached through the client's `products.entitlements`. */
export class ProductsEntitlements {
  /** @internal */
  public constructor(private readonly requestCtx: MeteroidRequestContext) {}

  /** List product entitlements */
  public list(
    productId: string,
    requestOptions?: RequestOptions
  ): APIPromise<ResolvedEntitlementListResponse> {
    const request = new MeteroidRequest(
      "GET",
      "/api/v1/products/{product_id}/entitlements"
    );

    request.setPathParam("product_id", productId);
    return request.send(
      this.requestCtx,
      ResolvedEntitlementListResponseSerializer.parse,
      requestOptions
    );
  }

  /**
   * Create product entitlements
   *
   * A product has no entitlement rows of its own: its entitlements are the feature-level
   * defaults of the features scoped to it, which is what `GET` on this path resolves. Every
   * spec must therefore target a feature belonging to `product_id`. Features that already
   * carry a default entitlement are skipped.
   *
   * Specs are validated up front, but the writes are not atomic: each feature is written on
   * its own, so a failure part-way can leave earlier specs committed. Retrying is safe.
   */
  public create(
    productId: string,
    createEntitlementsRequest: CreateEntitlementsRequest,
    requestOptions?: RequestOptions
  ): APIPromise<EntitlementListResponse> {
    const request = new MeteroidRequest(
      "POST",
      "/api/v1/products/{product_id}/entitlements"
    );

    request.setPathParam("product_id", productId);
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
