// this file is @generated
import assert from "node:assert/strict";
import { test } from "node:test";
import { parseJson, MinimumCommitmentSerializer } from "../../src/index.js";
import { mock } from "./mock.js";

test("plans.versions.update_minimum", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"amount":"sample","scope":{"type":"all_components"}}',
  });
  await client.plans.versions.updateMinimum(
    "plan_version_id",
    MinimumCommitmentSerializer.parse(
      parseJson('{"amount":"sample","scope":{"type":"all_components"}}')
    )
  );
  assert.deepEqual(requests, ["PUT /api/v1/plans/versions/plan_version_id/minimum"]);
});

test("plans.versions.delete_minimum", async () => {
  const { client, requests } = mock({
    status: 204,
    contentType: null,
    body: "",
  });
  await client.plans.versions.deleteMinimum("plan_version_id");
  assert.deepEqual(requests, ["DELETE /api/v1/plans/versions/plan_version_id/minimum"]);
});

test("plans.versions.list", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"data":[{"created_at":"2023-12-31T23:59:59.999-05:30","currency":"CVE","id":"plan_version_id_2","is_draft":true,"version":-2147483648}],"pagination_meta":{"page":-123456789,"per_page":-123456789,"total_items":-9007199254740993,"total_pages":123456789}}',
  });
  await client.plans.versions.list("plan_id");
  assert.deepEqual(requests, ["GET /api/v1/plans/plan_id/versions"]);
});
