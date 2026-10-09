// this file is @generated
import assert from "node:assert/strict";
import { test } from "node:test";
import { mock } from "./mock.js";

test("webhook_endpoints.resend_webhook_delivery", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"attempt_count":-2147483648,"created_at":"2023-12-31T23:59:59.999-05:30","endpoint_id":"webhook_endpoint_id_44","event_type":"sample","id":"webhook_delivery_id_90","manual":false,"message_id":"event_id_90","status":"IN_FLIGHT"}',
  });
  await client.webhookEndpoints.resendWebhookDelivery("delivery_id");
  assert.deepEqual(requests, ["POST /api/v1/webhooks/deliveries/delivery_id/resend"]);
});
