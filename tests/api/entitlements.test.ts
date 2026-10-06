// this file is @generated
import assert from "node:assert/strict";
import { test } from "node:test";
import { parseJson, UpdateEntitlementRequestSerializer } from "../../src/index.js";
import { mock } from "./mock.js";

test("entitlements.retrieve", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"created_at":"2023-12-31T23:59:59.999-05:30","feature_id":"feature_id_0","id":"entitlement_id_79","updated_at":"2024-03-15T10:30:45.123+02:00","value":{"type":"BOOLEAN","enabled":true}}',
  });
  await client.entitlements.retrieve("entitlement_id");
  assert.deepEqual(requests, ["GET /api/v1/entitlements/entitlement_id"]);
});

test("entitlements.delete", async () => {
  const { client, requests } = mock({
    status: 204,
    contentType: null,
    body: "",
  });
  await client.entitlements.delete("entitlement_id");
  assert.deepEqual(requests, ["DELETE /api/v1/entitlements/entitlement_id"]);
});

test("entitlements.update", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"created_at":"2023-12-31T23:59:59.999-05:30","feature_id":"feature_id_0","id":"entitlement_id_79","updated_at":"2024-03-15T10:30:45.123+02:00","value":{"type":"BOOLEAN","enabled":true}}',
  });
  await client.entitlements.update(
    "entitlement_id",
    UpdateEntitlementRequestSerializer.parse(parseJson("{}"))
  );
  assert.deepEqual(requests, ["PATCH /api/v1/entitlements/entitlement_id"]);
});
