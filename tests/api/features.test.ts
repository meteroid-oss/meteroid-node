// this file is @generated
import assert from "node:assert/strict";
import { test } from "node:test";
import {
  parseJson,
  CreateFeatureRequestSerializer,
  UpdateFeatureRequestSerializer,
} from "../../src/index.js";
import { mock } from "./mock.js";

test("features.list", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"data":[{"code":"sample","created_at":"2023-12-31T23:59:59.999-05:30","feature_type":{"type":"BOOLEAN"},"id":"feature_id_0","name":"sample","status":"DISABLED"}],"pagination_meta":{"page":-123456789,"per_page":-123456789,"total_items":-9007199254740993,"total_pages":123456789}}',
  });
  await client.features.list();
  assert.deepEqual(requests, ["GET /api/v1/features"]);
});

test("features.create", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"code":"sample","created_at":"2024-03-15T10:30:45.123+02:00","feature_type":{"type":"BOOLEAN"},"id":"feature_id_90","name":"sample","status":"ARCHIVED"}',
  });
  await client.features.create(
    CreateFeatureRequestSerializer.parse(
      parseJson('{"code":"sample","feature_type":{"type":"BOOLEAN"},"name":"sample"}')
    )
  );
  assert.deepEqual(requests, ["POST /api/v1/features"]);
});

test("features.retrieve", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"code":"sample","created_at":"2024-03-15T10:30:45.123+02:00","feature_type":{"type":"BOOLEAN"},"id":"feature_id_90","name":"sample","status":"ARCHIVED"}',
  });
  await client.features.retrieve("id_or_code");
  assert.deepEqual(requests, ["GET /api/v1/features/id_or_code"]);
});

test("features.update", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"code":"sample","created_at":"2024-03-15T10:30:45.123+02:00","feature_type":{"type":"BOOLEAN"},"id":"feature_id_90","name":"sample","status":"ARCHIVED"}',
  });
  await client.features.update(
    "id_or_code",
    UpdateFeatureRequestSerializer.parse(parseJson("{}"))
  );
  assert.deepEqual(requests, ["PATCH /api/v1/features/id_or_code"]);
});

test("features.archive", async () => {
  const { client, requests } = mock({
    status: 204,
    contentType: null,
    body: "",
  });
  await client.features.archive("id_or_code");
  assert.deepEqual(requests, ["POST /api/v1/features/id_or_code/archive"]);
});

test("features.unarchive", async () => {
  const { client, requests } = mock({
    status: 204,
    contentType: null,
    body: "",
  });
  await client.features.unarchive("id_or_code");
  assert.deepEqual(requests, ["POST /api/v1/features/id_or_code/unarchive"]);
});
