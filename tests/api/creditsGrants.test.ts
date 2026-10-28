// this file is @generated
import assert from "node:assert/strict";
import { test } from "node:test";
import { mock } from "./mock.js";

test("credits.grants.list", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"data":[{"amount":-9007199254740993,"applicable_product_ids":["product_id_39"],"applies_to":"ALL","created_at":"2024-03-15T10:30:45.123+02:00","effective_at":"2023-12-31T23:59:59.999-05:30","id":"sample","kind":"ACCOUNT_BALANCE","kind_label":"sample","priority":123456789,"reason":"sample","remaining":-9007199254740993,"source":"OVERPAYMENT","status":"ACTIVE","type":"PAID"}],"pagination_meta":{"page":-123456789,"per_page":-123456789,"total_items":-9007199254740993,"total_pages":123456789}}',
  });
  await client.credits.grants.list("id_or_alias");
  assert.deepEqual(requests, ["GET /api/v1/customers/id_or_alias/credit-grants"]);
});
