// this file is @generated
import assert from "node:assert/strict";
import { test } from "node:test";
import {
  parseJson,
  CreateWebhookEndpointRequestSerializer,
  UpdateWebhookEndpointRequestSerializer,
} from "../../src/index.js";
import { mock } from "./mock.js";

test("webhook_endpoints.endpoints.list", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"data":[{"consecutive_failures":-123456789,"created_at":"2023-12-31T23:59:59.999-05:30","disabled":true,"event_types":["sample"],"headers":[{"name":"sample","sensitive":false,"set":true}],"id":"webhook_endpoint_id_25","max_in_flight":-2147483648,"needs_setup":false,"url":"sample"}]}',
  });
  await client.webhookEndpoints.endpoints.list();
  assert.deepEqual(requests, ["GET /api/v1/webhooks/endpoints"]);
});

test("webhook_endpoints.endpoints.create", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"consecutive_failures":-123456789,"created_at":"2023-12-31T23:59:59.999-05:30","disabled":true,"event_types":["sample"],"headers":[{"name":"sample","sensitive":false,"set":true}],"id":"webhook_endpoint_id_25","max_in_flight":-2147483648,"needs_setup":false,"url":"sample","secret":"sample"}',
  });
  await client.webhookEndpoints.endpoints.create(
    CreateWebhookEndpointRequestSerializer.parse(parseJson('{"url":"sample"}'))
  );
  assert.deepEqual(requests, ["POST /api/v1/webhooks/endpoints"]);
});

test("webhook_endpoints.endpoints.retrieve", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"consecutive_failures":-2147483648,"created_at":"2024-03-15T10:30:45.123+02:00","disabled":true,"event_types":["sample"],"headers":[{"name":"sample","sensitive":true,"set":true}],"id":"webhook_endpoint_id_40","max_in_flight":-123456789,"needs_setup":true,"url":"sample"}',
  });
  await client.webhookEndpoints.endpoints.retrieve("endpoint_id");
  assert.deepEqual(requests, ["GET /api/v1/webhooks/endpoints/endpoint_id"]);
});

test("webhook_endpoints.endpoints.delete", async () => {
  const { client, requests } = mock({
    status: 204,
    contentType: null,
    body: "",
  });
  await client.webhookEndpoints.endpoints.delete("endpoint_id");
  assert.deepEqual(requests, ["DELETE /api/v1/webhooks/endpoints/endpoint_id"]);
});

test("webhook_endpoints.endpoints.update", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"consecutive_failures":-2147483648,"created_at":"2024-03-15T10:30:45.123+02:00","disabled":true,"event_types":["sample"],"headers":[{"name":"sample","sensitive":true,"set":true}],"id":"webhook_endpoint_id_40","max_in_flight":-123456789,"needs_setup":true,"url":"sample"}',
  });
  await client.webhookEndpoints.endpoints.update(
    "endpoint_id",
    UpdateWebhookEndpointRequestSerializer.parse(parseJson("{}"))
  );
  assert.deepEqual(requests, ["PATCH /api/v1/webhooks/endpoints/endpoint_id"]);
});

test("webhook_endpoints.endpoints.list_deliveries", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"data":[{"attempt_count":-123456789,"created_at":"2024-03-15T10:30:45.123+02:00","endpoint_id":"webhook_endpoint_id_90","event_type":"sample","id":"webhook_delivery_id_0","manual":false,"message_id":"event_id_67","status":"SUCCEEDED"}],"pagination_meta":{"page":-123456789,"per_page":-123456789,"total_items":-9007199254740993,"total_pages":123456789}}',
  });
  await client.webhookEndpoints.endpoints.listDeliveries("endpoint_id");
  assert.deepEqual(requests, ["GET /api/v1/webhooks/endpoints/endpoint_id/deliveries"]);
});

test("webhook_endpoints.endpoints.rotate_secret", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"secret":"sample"}',
  });
  await client.webhookEndpoints.endpoints.rotateSecret("endpoint_id");
  assert.deepEqual(requests, [
    "POST /api/v1/webhooks/endpoints/endpoint_id/rotate-secret",
  ]);
});

test("webhook_endpoints.endpoints.retrieve_secret", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"secret":"sample"}',
  });
  await client.webhookEndpoints.endpoints.retrieveSecret("endpoint_id");
  assert.deepEqual(requests, ["GET /api/v1/webhooks/endpoints/endpoint_id/secret"]);
});
