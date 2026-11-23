// this file is @generated
import assert from "node:assert/strict";
import { test } from "node:test";
import {
  parseJson,
  IngestEventsRequestSerializer,
  AmendEventRequestSerializer,
  VoidEventRequestSerializer,
} from "../../src/index.js";
import { mock } from "./mock.js";

test("events.ingest", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: "{}",
  });
  await client.events.ingest(
    IngestEventsRequestSerializer.parse(
      parseJson(
        '{"events":[{"code":"sample","customer_id":"sample","event_id":"sample"}]}'
      )
    )
  );
  assert.deepEqual(requests, ["POST /api/v1/events/ingest"]);
});

test("events.amend", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"ingested_at":"2023-12-31T23:59:59.999-05:30"}',
  });
  await client.events.amend(
    "event_id",
    AmendEventRequestSerializer.parse(
      parseJson(
        '{"properties":{"alpha":"sample"},"timestamp":"2023-12-31T23:59:59.999-05:30"}'
      )
    )
  );
  assert.deepEqual(requests, ["POST /api/v1/events/event_id/amend"]);
});

test("events.void", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"ingested_at":"2023-12-31T23:59:59.999-05:30"}',
  });
  await client.events.void("event_id", VoidEventRequestSerializer.parse(parseJson("{}")));
  assert.deepEqual(requests, ["POST /api/v1/events/event_id/void"]);
});
