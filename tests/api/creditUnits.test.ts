// this file is @generated
import assert from "node:assert/strict";
import { test } from "node:test";
import {
  parseJson,
  CreditUnitCreateRequestSerializer,
  CreditUnitUpdateRequestSerializer,
} from "../../src/index.js";
import { mock } from "./mock.js";

test("credit_units.list", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"data":[{"archived":false,"code":"sample","id":"sample","name":"sample","plural_name":"sample","precision":123456789,"prices":[{"created_at":"2023-12-31T23:59:59.999-05:30","currency":"sample","id":"sample","unit_price":"sample"}]}]}',
  });
  await client.creditUnits.list();
  assert.deepEqual(requests, ["GET /api/v1/credit-units"]);
});

test("credit_units.create", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"archived":false,"code":"sample","id":"sample","name":"sample","plural_name":"sample","precision":2147483647,"prices":[{"created_at":"2024-03-15T10:30:45.123+02:00","currency":"sample","id":"sample","unit_price":"sample"}]}',
  });
  await client.creditUnits.create(
    CreditUnitCreateRequestSerializer.parse(
      parseJson(
        '{"code":"sample","name":"sample","plural_name":"sample","precision":123456789}'
      )
    )
  );
  assert.deepEqual(requests, ["POST /api/v1/credit-units"]);
});

test("credit_units.retrieve", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"archived":false,"code":"sample","id":"sample","name":"sample","plural_name":"sample","precision":2147483647,"prices":[{"created_at":"2024-03-15T10:30:45.123+02:00","currency":"sample","id":"sample","unit_price":"sample"}]}',
  });
  await client.creditUnits.retrieve("id");
  assert.deepEqual(requests, ["GET /api/v1/credit-units/id"]);
});

test("credit_units.update", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"archived":false,"code":"sample","id":"sample","name":"sample","plural_name":"sample","precision":2147483647,"prices":[{"created_at":"2024-03-15T10:30:45.123+02:00","currency":"sample","id":"sample","unit_price":"sample"}]}',
  });
  await client.creditUnits.update(
    "id",
    CreditUnitUpdateRequestSerializer.parse(parseJson("{}"))
  );
  assert.deepEqual(requests, ["PATCH /api/v1/credit-units/id"]);
});
