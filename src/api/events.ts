// this file is @generated

import {
  type AmendEventRequest,
  AmendEventRequestSerializer,
} from "../models/amendEventRequest.js";
import {
  type EventChangeResponse,
  EventChangeResponseSerializer,
} from "../models/eventChangeResponse.js";
import {
  type IngestEventsRequest,
  IngestEventsRequestSerializer,
} from "../models/ingestEventsRequest.js";
import {
  type IngestEventsResponse,
  IngestEventsResponseSerializer,
} from "../models/ingestEventsResponse.js";
import {
  type VoidEventRequest,
  VoidEventRequestSerializer,
} from "../models/voidEventRequest.js";
import type { APIPromise } from "../apiPromise.js";
import {
  MeteroidRequest,
  type MeteroidRequestContext,
  type RequestOptions,
} from "../request.js";

/** The events operations, reached through the client's `events`. */
export class Events {
  /** @internal */
  public constructor(private readonly requestCtx: MeteroidRequestContext) {}

  /**
   * Ingest events
   *
   * Ingest usage events for metering and billing purposes.
   *
   * Events are deduplicated by `(event_id, customer_id)` — re-sending the same pair will not be
   * double-counted. The first copy received is kept and later copies are ignored, whatever they change.
   *
   * By default, any invalid event rejects the entire batch. Set `allow_partial_failures` to `true` to ingest valid events and receive per-event failure details in the response body.
   */
  public ingest(
    ingestEventsRequest: IngestEventsRequest,
    requestOptions?: RequestOptions
  ): APIPromise<IngestEventsResponse> {
    const request = new MeteroidRequest("POST", "/api/v1/events/ingest");

    request.setBody(IngestEventsRequestSerializer.serialize(ingestEventsRequest));
    return request.send(
      this.requestCtx,
      IngestEventsResponseSerializer.parse,
      requestOptions
    );
  }

  /**
   * Amend an event
   *
   * Replaces the timestamp and the properties of an ingested event. The code and the customer
   * cannot change: void the event and send a new one instead. The change is applied asynchronously,
   * in order with the event's other copies.
   *
   * Only events ingested in the last 35 days can be amended, and neither their current nor their
   * new timestamp can be in an invoiced period. Tenants that keep the last copy of an event correct
   * it by sending it again instead.
   *
   * An event is found once metering has stored it: a just-ingested event can still return `404`.
   * Wait until an amend is visible before sending the next change to the same event; concurrent
   * changes resolve by `ingested_at`, the latest wins.
   */
  public amend(
    eventId: string,
    amendEventRequest: AmendEventRequest,
    requestOptions?: RequestOptions
  ): APIPromise<EventChangeResponse> {
    const request = new MeteroidRequest("POST", "/api/v1/events/{event_id}/amend");

    request.setPathParam("event_id", eventId);
    request.setBody(AmendEventRequestSerializer.serialize(amendEventRequest));
    return request.send(
      this.requestCtx,
      EventChangeResponseSerializer.parse,
      requestOptions
    );
  }

  /**
   * Void an event
   *
   * Cancels an ingested event: it no longer counts in usage. The change is applied asynchronously,
   * in order with the event's other copies.
   *
   * Only events ingested in the last 35 days, outside an invoiced period, can be voided. Tenants
   * that keep the last copy of an event correct it by sending it again instead.
   *
   * An event is found once metering has stored it: a just-ingested event can still return `404`,
   * and so does a retried void once the first one is applied. Wait until a change is visible
   * before sending the next one to the same event; concurrent changes resolve by `ingested_at`.
   */
  public void(
    eventId: string,
    voidEventRequest: VoidEventRequest,
    requestOptions?: RequestOptions
  ): APIPromise<EventChangeResponse> {
    const request = new MeteroidRequest("POST", "/api/v1/events/{event_id}/void");

    request.setPathParam("event_id", eventId);
    request.setBody(VoidEventRequestSerializer.serialize(voidEventRequest));
    return request.send(
      this.requestCtx,
      EventChangeResponseSerializer.parse,
      requestOptions
    );
  }
}
