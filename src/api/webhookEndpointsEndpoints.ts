// this file is @generated

import {
  type CreateWebhookEndpointRequest,
  CreateWebhookEndpointRequestSerializer,
} from "../models/createWebhookEndpointRequest.js";
import {
  type CreatedWebhookEndpoint,
  CreatedWebhookEndpointSerializer,
} from "../models/createdWebhookEndpoint.js";
import {
  type UpdateWebhookEndpointRequest,
  UpdateWebhookEndpointRequestSerializer,
} from "../models/updateWebhookEndpointRequest.js";
import type { WebhookDelivery } from "../models/webhookDelivery.js";
import {
  type WebhookDeliveryListResponse,
  WebhookDeliveryListResponseSerializer,
} from "../models/webhookDeliveryListResponse.js";
import type { WebhookDeliveryStatus } from "../models/webhookDeliveryStatus.js";
import {
  type WebhookEndpoint,
  WebhookEndpointSerializer,
} from "../models/webhookEndpoint.js";
import {
  type WebhookEndpointListResponse,
  WebhookEndpointListResponseSerializer,
} from "../models/webhookEndpointListResponse.js";
import {
  type WebhookEndpointSecret,
  WebhookEndpointSecretSerializer,
} from "../models/webhookEndpointSecret.js";
import type { APIPromise } from "../apiPromise.js";
import { PagePromise } from "../pagination.js";
import {
  MeteroidRequest,
  type MeteroidRequestContext,
  type RequestOptions,
} from "../request.js";

/** The query and header parameters of `listDeliveries`. */
export interface WebhookEndpointsEndpointsListDeliveriesOptions {
  /** Only return deliveries in this state. */
  status?: WebhookDeliveryStatus | undefined;
  /** Page number (0-indexed) */
  page?: number | undefined;
  /** Number of items per page */
  perPage?: number | undefined;
}

/** The webhook endpoints endpoints operations, reached through the client's `webhookEndpoints.endpoints`. */
export class WebhookEndpointsEndpoints {
  /** @internal */
  public constructor(private readonly requestCtx: MeteroidRequestContext) {}

  /** List webhook endpoints */
  public list(requestOptions?: RequestOptions): APIPromise<WebhookEndpointListResponse> {
    const request = new MeteroidRequest("GET", "/api/v1/webhooks/endpoints");

    return request.send(
      this.requestCtx,
      WebhookEndpointListResponseSerializer.parse,
      requestOptions
    );
  }

  /**
   * Create a webhook endpoint
   *
   * The signing secret is returned once, in this response only.
   */
  public create(
    createWebhookEndpointRequest: CreateWebhookEndpointRequest,
    requestOptions?: RequestOptions
  ): APIPromise<CreatedWebhookEndpoint> {
    const request = new MeteroidRequest("POST", "/api/v1/webhooks/endpoints");

    request.setBody(
      CreateWebhookEndpointRequestSerializer.serialize(createWebhookEndpointRequest)
    );
    return request.send(
      this.requestCtx,
      CreatedWebhookEndpointSerializer.parse,
      requestOptions
    );
  }

  /** Get a webhook endpoint */
  public retrieve(
    endpointId: string,
    requestOptions?: RequestOptions
  ): APIPromise<WebhookEndpoint> {
    const request = new MeteroidRequest(
      "GET",
      "/api/v1/webhooks/endpoints/{endpoint_id}"
    );

    request.setPathParam("endpoint_id", endpointId);
    return request.send(this.requestCtx, WebhookEndpointSerializer.parse, requestOptions);
  }

  /**
   * Delete a webhook endpoint
   *
   * The endpoint is archived and its pending deliveries are cancelled.
   */
  public delete(endpointId: string, requestOptions?: RequestOptions): APIPromise<void> {
    const request = new MeteroidRequest(
      "DELETE",
      "/api/v1/webhooks/endpoints/{endpoint_id}"
    );

    request.setPathParam("endpoint_id", endpointId);
    return request.sendNoResponseBody(this.requestCtx, requestOptions);
  }

  /**
   * Update a webhook endpoint
   *
   * Omitted fields are left untouched. Re-enabling a disabled endpoint resets its
   * consecutive failure count.
   */
  public update(
    endpointId: string,
    updateWebhookEndpointRequest: UpdateWebhookEndpointRequest,
    requestOptions?: RequestOptions
  ): APIPromise<WebhookEndpoint> {
    const request = new MeteroidRequest(
      "PATCH",
      "/api/v1/webhooks/endpoints/{endpoint_id}"
    );

    request.setPathParam("endpoint_id", endpointId);
    request.setBody(
      UpdateWebhookEndpointRequestSerializer.serialize(updateWebhookEndpointRequest)
    );
    return request.send(this.requestCtx, WebhookEndpointSerializer.parse, requestOptions);
  }

  /**
   * List deliveries for a webhook endpoint
   *
   * Await it for the first page: the response body, its properties read on the page, with
   * `items`, `hasNextPage()`, `getNextPage()` and `iterPages()`. Or iterate it with `for await`
   * over every item of every page, fetched on demand.
   */
  public listDeliveries(
    endpointId: string,
    options?: WebhookEndpointsEndpointsListDeliveriesOptions,
    requestOptions?: RequestOptions
  ): PagePromise<WebhookDeliveryListResponse, WebhookDelivery> {
    return new PagePromise<WebhookDeliveryListResponse, WebhookDelivery>(
      {
        style: "page",
        items: (page) => page.data,
        totalPages: (page) => page.paginationMeta?.totalPages,
        firstPage: 0,
        fetch: (page) =>
          this.#listDeliveries(endpointId, { ...options, page: page }, requestOptions),
      },
      options?.page
    );
  }

  #listDeliveries(
    endpointId: string,
    options?: WebhookEndpointsEndpointsListDeliveriesOptions,
    requestOptions?: RequestOptions
  ): APIPromise<WebhookDeliveryListResponse> {
    const request = new MeteroidRequest(
      "GET",
      "/api/v1/webhooks/endpoints/{endpoint_id}/deliveries"
    );

    request.setPathParam("endpoint_id", endpointId);
    request.setQueryParam("status", options?.status);
    request.setQueryParam("page", options?.page);
    request.setQueryParam("per_page", options?.perPage);
    return request.send(
      this.requestCtx,
      WebhookDeliveryListResponseSerializer.parse,
      requestOptions
    );
  }

  /**
   * Rotate a webhook endpoint secret
   *
   * The previous secret keeps signing alongside the new one for 24 hours, so consumers
   * can roll over without dropping events.
   */
  public rotateSecret(
    endpointId: string,
    requestOptions?: RequestOptions
  ): APIPromise<WebhookEndpointSecret> {
    const request = new MeteroidRequest(
      "POST",
      "/api/v1/webhooks/endpoints/{endpoint_id}/rotate-secret"
    );

    request.setPathParam("endpoint_id", endpointId);
    return request.send(
      this.requestCtx,
      WebhookEndpointSecretSerializer.parse,
      requestOptions
    );
  }

  /** Reveal a webhook endpoint secret */
  public retrieveSecret(
    endpointId: string,
    requestOptions?: RequestOptions
  ): APIPromise<WebhookEndpointSecret> {
    const request = new MeteroidRequest(
      "GET",
      "/api/v1/webhooks/endpoints/{endpoint_id}/secret"
    );

    request.setPathParam("endpoint_id", endpointId);
    return request.send(
      this.requestCtx,
      WebhookEndpointSecretSerializer.parse,
      requestOptions
    );
  }
}
