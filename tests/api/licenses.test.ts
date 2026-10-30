// this file is @generated
import assert from "node:assert/strict";
import { test } from "node:test";
import {
  parseJson,
  IssueLicenseRequestSerializer,
  IssueOfflineLicenseRequestSerializer,
  RevokeLicenseRequestSerializer,
} from "../../src/index.js";
import { mock } from "./mock.js";

test("licenses.list", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"data":[{"auto_issued":false,"created_at":"2023-12-31T23:59:59.999-05:30","customer_id":"customer_id_2","customer_name":"sample","has_activation_code":false,"id":"license_id_0","offline":false,"revoked_immediately":false,"status":"REVOKED","validity_days":-123456789}]}',
  });
  await client.licenses.list();
  assert.deepEqual(requests, ["GET /api/v1/licenses"]);
});

test("licenses.create", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"license":{"auto_issued":false,"created_at":"2023-12-31T23:59:59.999-05:30","customer_id":"customer_id_37","customer_name":"sample","has_activation_code":true,"id":"license_id_40","offline":true,"revoked_immediately":true,"status":"PENDING","validity_days":123456789}}',
  });
  await client.licenses.create(
    IssueLicenseRequestSerializer.parse(parseJson('{"customer_id":"sample"}'))
  );
  assert.deepEqual(requests, ["POST /api/v1/licenses"]);
});

test("licenses.retrieve", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"auto_issued":false,"created_at":"2024-03-15T10:30:45.123+02:00","customer_id":"customer_id_79","customer_name":"sample","has_activation_code":false,"id":"license_id_90","offline":false,"revoked_immediately":true,"status":"PENDING","validity_days":-123456789}',
  });
  await client.licenses.retrieve("license_id");
  assert.deepEqual(requests, ["GET /api/v1/licenses/license_id"]);
});

test("licenses.retrieve_activation_code", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"activation_code":"sample"}',
  });
  await client.licenses.retrieveActivationCode("license_id");
  assert.deepEqual(requests, ["GET /api/v1/licenses/license_id/activation-code"]);
});

test("licenses.offline", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"license":"sample"}',
  });
  await client.licenses.offline(
    "license_id",
    IssueOfflineLicenseRequestSerializer.parse(parseJson('{"valid_days":123456789}'))
  );
  assert.deepEqual(requests, ["POST /api/v1/licenses/license_id/offline"]);
});

test("licenses.revoke", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"auto_issued":false,"created_at":"2024-03-15T10:30:45.123+02:00","customer_id":"customer_id_79","customer_name":"sample","has_activation_code":false,"id":"license_id_90","offline":false,"revoked_immediately":true,"status":"PENDING","validity_days":-123456789}',
  });
  await client.licenses.revoke(
    "license_id",
    RevokeLicenseRequestSerializer.parse(parseJson("{}"))
  );
  assert.deepEqual(requests, ["POST /api/v1/licenses/license_id/revoke"]);
});

test("licenses.list_licensing_signing_keys", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"endpoints":{"activate_url":"sample","events_url":"sample","jwks_url":"sample","refresh_url":"sample"},"keys":[{"created_at":"2023-12-31T23:59:59.999-05:30","kid":"sample","public_key_pem":"sample","status":"ACTIVE"}]}',
  });
  await client.licenses.listLicensingSigningKeys();
  assert.deepEqual(requests, ["GET /api/v1/licensing/signing-keys"]);
});
