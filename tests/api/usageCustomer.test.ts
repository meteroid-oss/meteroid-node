// this file is @generated
import assert from "node:assert/strict";
import { test } from "node:test";
import { mock } from "./mock.js";

test("usage.customer.retrieve_unattributed", async () => {
  const { client, requests } = mock({
    status: 200,
    contentType: "application/json",
    body: '{"period_end":"1999-12-31","period_start":"2024-02-29","usage":[{"from":"2024-03-15T10:30:45.123+02:00","metric_code":"sample","metric_id":"billable_metric_id_44","metric_name":"sample","total_value":"12345.6789","until":"2023-12-31T23:59:59.999-05:30"}]}',
  });
  await client.usage.customer.retrieveUnattributed("customer_id");
  assert.deepEqual(requests, ["GET /api/v1/usage/customer/customer_id/unattributed"]);
});
