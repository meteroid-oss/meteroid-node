// this file is @generated
import assert from "node:assert/strict";
import { test } from "node:test";
import { mock } from "./mock.js";

test("budgets.list", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"data":[{"amount":-9007199254740993,"behavior":"SOFT","created_at":"2023-12-31T23:59:59.999-05:30","created_by":"TENANT","exact":false,"id":"sample","thresholds":[-123456789],"updated_at":"2024-03-15T10:30:45.123+02:00","version":123456789}],"pagination_meta":{"page":-123456789,"per_page":-123456789,"total_items":-9007199254740993,"total_pages":123456789}}',
  });
  await client.budgets.list("id_or_alias");
  assert.deepEqual(requests, ["GET /api/v1/customers/id_or_alias/budgets"]);
});
