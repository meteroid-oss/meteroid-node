// this file is @generated
import assert from "node:assert/strict";
import { test } from "node:test";
import { parseJson, CreateEntitlementsRequestSerializer } from "../../src/index.js";
import { mock } from "./mock.js";

test("add_ons.entitlements.list", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"data":[{"feature":{"code":"sample","id":"feature_id_53","name":"sample"},"value":{"type":"BOOLEAN","enabled":false}}]}',
  });
  await client.addOns.entitlements.list("addon_id");
  assert.deepEqual(requests, ["GET /api/v1/addons/addon_id/entitlements"]);
});

test("add_ons.entitlements.create", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"data":[{"created_at":"2023-12-31T23:59:59.999-05:30","feature_id":"feature_id_39","id":"entitlement_id_2","updated_at":"2024-03-15T10:30:45.123+02:00","value":{"type":"BOOLEAN","enabled":false}}]}',
  });
  await client.addOns.entitlements.create(
    "addon_id",
    CreateEntitlementsRequestSerializer.parse(
      parseJson(
        '{"entitlements":[{"feature_id":"feature_id_9","value":{"type":"BOOLEAN","enabled":false}}]}'
      )
    )
  );
  assert.deepEqual(requests, ["POST /api/v1/addons/addon_id/entitlements"]);
});
