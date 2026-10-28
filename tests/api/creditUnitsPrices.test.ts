// this file is @generated
import assert from "node:assert/strict";
import { test } from "node:test";
import { parseJson, CreditUnitPriceSetRequestSerializer } from "../../src/index.js";
import { mock } from "./mock.js";

test("credit_units.prices.list", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"data":[{"created_at":"2023-12-31T23:59:59.999-05:30","currency":"sample","id":"sample","unit_price":"sample"}]}',
  });
  await client.creditUnits.prices.list("id");
  assert.deepEqual(requests, ["GET /api/v1/credit-units/id/prices"]);
});

test("credit_units.prices.update", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"created_at":"2024-03-15T10:30:45.123+02:00","currency":"sample","id":"sample","unit_price":"sample"}',
  });
  await client.creditUnits.prices.update(
    "id",
    "currency",
    CreditUnitPriceSetRequestSerializer.parse(parseJson('{"unit_price":"sample"}'))
  );
  assert.deepEqual(requests, ["PUT /api/v1/credit-units/id/prices/currency"]);
});

test("credit_units.prices.archive", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"created_at":"2024-03-15T10:30:45.123+02:00","currency":"sample","id":"sample","unit_price":"sample"}',
  });
  await client.creditUnits.prices.archive("id", "currency");
  assert.deepEqual(requests, ["DELETE /api/v1/credit-units/id/prices/currency"]);
});
