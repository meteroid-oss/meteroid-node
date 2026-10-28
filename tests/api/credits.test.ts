// this file is @generated
import assert from "node:assert/strict";
import { test } from "node:test";
import { mock } from "./mock.js";

test("credits.list_customer_credit_ledger", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"data":[{"amount":-9007199254740993,"applies_to":"USAGE","balance_after":9007199254740993,"credit_grant_id":"sample","effective_at":"2023-12-31T23:59:59.999-05:30","id":"sample","reason":"sample","recorded_at":"2023-12-31T23:59:59.999-05:30","sequence":9007199254740993,"type":"CREDIT"}],"pagination_meta":{"page":-123456789,"per_page":-123456789,"total_items":-9007199254740993,"total_pages":123456789}}',
  });
  await client.credits.listCustomerCreditLedger("id_or_alias");
  assert.deepEqual(requests, ["GET /api/v1/customers/id_or_alias/credit-ledger"]);
});
