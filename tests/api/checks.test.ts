// this file is @generated
import assert from "node:assert/strict";
import { test } from "node:test";
import { mock } from "./mock.js";

test("checks.check_entitlement", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"as_of":"2023-12-31T23:59:59.999-05:30","exact":true,"feature":{"code":"sample","id":"feature_id_19"},"has_access":true,"in_overage":false,"lag_ms":9007199254740993,"limits":[{"behavior":"HARD","has_access":false,"limit":"-0.000123","remaining":"12345.6789","usage_limit_id":"usage_limit_id_23","used":"12345.6789"}],"near_limit":false,"reason":"INSUFFICIENT_BALANCE"}',
  });
  await client.checks.checkEntitlement("id_or_alias", "feature_id_or_code");
  assert.deepEqual(requests, [
    "GET /api/v1/customers/id_or_alias/entitlements/feature_id_or_code/check",
  ]);
});
