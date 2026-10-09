// this file is @generated

import {
  type WebhookDelivery,
  WebhookDeliverySerializer,
} from "../models/webhookDelivery.js";
import { WebhookEndpointsEndpoints } from "./webhookEndpointsEndpoints.js";
import type { APIPromise } from "../apiPromise.js";
import {
  MeteroidRequest,
  type MeteroidRequestContext,
  type RequestOptions,
} from "../request.js";

/** The webhook endpoints operations, reached through the client's `webhookEndpoints`. */
export class WebhookEndpoints {
  private _endpoints?: WebhookEndpointsEndpoints;
  /** @internal */
  public constructor(private readonly requestCtx: MeteroidRequestContext) {}

  /** The endpoints operations. */
  public get endpoints(): WebhookEndpointsEndpoints {
    this._endpoints ??= new WebhookEndpointsEndpoints(this.requestCtx);
    return this._endpoints;
  }

  /**
   * Resend a webhook delivery
   *
   * Re-queues the same event for the same endpoint. Fails if the endpoint is disabled.
   */
  public resendWebhookDelivery(
    deliveryId: string,
    requestOptions?: RequestOptions
  ): APIPromise<WebhookDelivery> {
    const request = new MeteroidRequest(
      "POST",
      "/api/v1/webhooks/deliveries/{delivery_id}/resend"
    );

    request.setPathParam("delivery_id", deliveryId);
    return request.send(this.requestCtx, WebhookDeliverySerializer.parse, requestOptions);
  }
}
