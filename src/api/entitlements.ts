// this file is @generated

import { type Entitlement, EntitlementSerializer } from "../models/entitlement.js";
import {
  type UpdateEntitlementRequest,
  UpdateEntitlementRequestSerializer,
} from "../models/updateEntitlementRequest.js";
import type { APIPromise } from "../apiPromise.js";
import {
  MeteroidRequest,
  type MeteroidRequestContext,
  type RequestOptions,
} from "../request.js";

/** The entitlements operations, reached through the client's `entitlements`. */
export class Entitlements {
  /** @internal */
  public constructor(private readonly requestCtx: MeteroidRequestContext) {}

  /** Get entitlement details */
  public retrieve(
    entitlementId: string,
    requestOptions?: RequestOptions
  ): APIPromise<Entitlement> {
    const request = new MeteroidRequest("GET", "/api/v1/entitlements/{entitlement_id}");

    request.setPathParam("entitlement_id", entitlementId);
    return request.send(this.requestCtx, EntitlementSerializer.parse, requestOptions);
  }

  /** Delete an entitlement */
  public delete(
    entitlementId: string,
    requestOptions?: RequestOptions
  ): APIPromise<void> {
    const request = new MeteroidRequest(
      "DELETE",
      "/api/v1/entitlements/{entitlement_id}"
    );

    request.setPathParam("entitlement_id", entitlementId);
    return request.sendNoResponseBody(this.requestCtx, requestOptions);
  }

  /**
   * Update an entitlement
   *
   * The new value must match the feature's declared type.
   */
  public update(
    entitlementId: string,
    updateEntitlementRequest: UpdateEntitlementRequest,
    requestOptions?: RequestOptions
  ): APIPromise<Entitlement> {
    const request = new MeteroidRequest("PATCH", "/api/v1/entitlements/{entitlement_id}");

    request.setPathParam("entitlement_id", entitlementId);
    request.setBody(
      UpdateEntitlementRequestSerializer.serialize(updateEntitlementRequest)
    );
    return request.send(this.requestCtx, EntitlementSerializer.parse, requestOptions);
  }
}
