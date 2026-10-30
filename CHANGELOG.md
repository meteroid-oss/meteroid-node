# Changelog

## [0.31.1](https://github.com/meteroid-oss/meteroid-node/compare/v0.31.0...v0.31.1) (2026-10-30)


### Features

* **api:** add `GET /api/v1/licenses`, `GET /api/v1/licenses/{license_id}`, `GET /api/v1/licenses/{license_id}/activation-code`, `GET /api/v1/licensing/signing-keys`, `POST /api/v1/licenses` and 2 more ([6e5d84d](https://github.com/meteroid-oss/meteroid-node/commit/6e5d84ddb15250d4e81bc1c0c5e4466e4b90eb92))
* **api:** update `GET /api/v1/plans`, `GET /api/v1/plans/{plan_id}`, `PATCH /api/v1/plans/{plan_id}`, `POST /api/v1/custom-property-definitions`, `POST /api/v1/plans` and 3 more ([6e5d84d](https://github.com/meteroid-oss/meteroid-node/commit/6e5d84ddb15250d4e81bc1c0c5e4466e4b90eb92))
* **api:** update SDKs to meteroid 0.1.0 ([#17](https://github.com/meteroid-oss/meteroid-node/issues/17)) ([6e5d84d](https://github.com/meteroid-oss/meteroid-node/commit/6e5d84ddb15250d4e81bc1c0c5e4466e4b90eb92))

## [0.31.0](https://github.com/meteroid-oss/meteroid-node/compare/v0.30.1...v0.31.0) (2026-10-28)


### ⚠ BREAKING CHANGES

* **api:** update SDKs to meteroid 0.1.0 ([#15](https://github.com/meteroid-oss/meteroid-node/issues/15))
* **api:** `GET /api/v1/coupons`: added `#/components/schemas/CreditDiscount` to the `data/items/discount` response property `oneOf` list for the response status `200`
* **api:** `GET /api/v1/coupons/{coupon_id}`: added `#/components/schemas/CreditDiscount` to the `discount` response property `oneOf` list for the response status `200`
* **api:** `GET /api/v1/plans`: added `#/components/schemas/CreditPlanFee` to the `data/items/price_components/items/fee/oneOf[#/components/schemas/Fee]/` response property `oneOf` list for the response status `200`
* **api:** `GET /api/v1/plans/{plan_id}`: added `#/components/schemas/CreditPlanFee` to the `price_components/items/fee/oneOf[#/components/schemas/Fee]/` response property `oneOf` list for the response status `200`
* **api:** `GET /api/v1/products`: added `#/components/schemas/CreditFeeStructure` to the `data/items/fee_structure` response property `oneOf` list for the response status `200`
* **api:** `GET /api/v1/products/{product_id}`: added `#/components/schemas/CreditFeeStructure` to the `fee_structure` response property `oneOf` list for the response status `200`
* **api:** `GET /api/v1/subscriptions/{subscription_id}`: added `#/components/schemas/CreditDiscount` to the `applied_coupons/items/coupon/discount` response property `oneOf` list for the response status `200`
* **api:** `GET /api/v1/subscriptions/{subscription_id}`: added `#/components/schemas/CreditFee` to the `add_ons/items/fee` response property `oneOf` list for the response status `200`
* **api:** `GET /api/v1/subscriptions/{subscription_id}`: added `#/components/schemas/CreditFee` to the `components/items/fee` response property `oneOf` list for the response status `200`
* **api:** `PATCH /api/v1/coupons/{coupon_id}`: added the new required request property `discount/oneOf[#/components/schemas/CouponDiscount]/oneOf[#/components/schemas/FixedDiscount]/type`
* **api:** 90 more breaking changes

### Features

* **api:** `GET /api/v1/coupons/{coupon_id}`: added `#/components/schemas/CreditDiscount` to the `discount` response property `oneOf` list for the response status `200` ([ca1faf5](https://github.com/meteroid-oss/meteroid-node/commit/ca1faf51872216120ee345823490251c9417278e))
* **api:** `GET /api/v1/coupons`: added `#/components/schemas/CreditDiscount` to the `data/items/discount` response property `oneOf` list for the response status `200` ([ca1faf5](https://github.com/meteroid-oss/meteroid-node/commit/ca1faf51872216120ee345823490251c9417278e))
* **api:** `GET /api/v1/plans/{plan_id}`: added `#/components/schemas/CreditPlanFee` to the `price_components/items/fee/oneOf[#/components/schemas/Fee]/` response property `oneOf` list for the response status `200` ([ca1faf5](https://github.com/meteroid-oss/meteroid-node/commit/ca1faf51872216120ee345823490251c9417278e))
* **api:** `GET /api/v1/plans`: added `#/components/schemas/CreditPlanFee` to the `data/items/price_components/items/fee/oneOf[#/components/schemas/Fee]/` response property `oneOf` list for the response status `200` ([ca1faf5](https://github.com/meteroid-oss/meteroid-node/commit/ca1faf51872216120ee345823490251c9417278e))
* **api:** `GET /api/v1/products/{product_id}`: added `#/components/schemas/CreditFeeStructure` to the `fee_structure` response property `oneOf` list for the response status `200` ([ca1faf5](https://github.com/meteroid-oss/meteroid-node/commit/ca1faf51872216120ee345823490251c9417278e))
* **api:** `GET /api/v1/products`: added `#/components/schemas/CreditFeeStructure` to the `data/items/fee_structure` response property `oneOf` list for the response status `200` ([ca1faf5](https://github.com/meteroid-oss/meteroid-node/commit/ca1faf51872216120ee345823490251c9417278e))
* **api:** `GET /api/v1/subscriptions/{subscription_id}`: added `#/components/schemas/CreditDiscount` to the `applied_coupons/items/coupon/discount` response property `oneOf` list for the response status `200` ([ca1faf5](https://github.com/meteroid-oss/meteroid-node/commit/ca1faf51872216120ee345823490251c9417278e))
* **api:** `GET /api/v1/subscriptions/{subscription_id}`: added `#/components/schemas/CreditFee` to the `add_ons/items/fee` response property `oneOf` list for the response status `200` ([ca1faf5](https://github.com/meteroid-oss/meteroid-node/commit/ca1faf51872216120ee345823490251c9417278e))
* **api:** `GET /api/v1/subscriptions/{subscription_id}`: added `#/components/schemas/CreditFee` to the `components/items/fee` response property `oneOf` list for the response status `200` ([ca1faf5](https://github.com/meteroid-oss/meteroid-node/commit/ca1faf51872216120ee345823490251c9417278e))
* **api:** `PATCH /api/v1/coupons/{coupon_id}`: added the new required request property `discount/oneOf[#/components/schemas/CouponDiscount]/oneOf[#/components/schemas/FixedDiscount]/type` ([ca1faf5](https://github.com/meteroid-oss/meteroid-node/commit/ca1faf51872216120ee345823490251c9417278e))
* **api:** 90 more breaking changes ([ca1faf5](https://github.com/meteroid-oss/meteroid-node/commit/ca1faf51872216120ee345823490251c9417278e))
* **api:** update SDKs to meteroid 0.1.0 ([#15](https://github.com/meteroid-oss/meteroid-node/issues/15)) ([ca1faf5](https://github.com/meteroid-oss/meteroid-node/commit/ca1faf51872216120ee345823490251c9417278e))
* **api:** update the API definitions ([ca1faf5](https://github.com/meteroid-oss/meteroid-node/commit/ca1faf51872216120ee345823490251c9417278e))

## [0.30.1](https://github.com/meteroid-oss/meteroid-node/compare/v0.30.0...v0.30.1) (2026-10-16)


### Bug Fixes

* **api:** update SDKs to meteroid 0.1.0 ([#13](https://github.com/meteroid-oss/meteroid-node/issues/13)) ([f258652](https://github.com/meteroid-oss/meteroid-node/commit/f258652c293931c1ab7a6900e804b5e488af3d5c))

## [0.30.0](https://github.com/meteroid-oss/meteroid-node/compare/v0.29.0...v0.30.0) (2026-10-09)


### ⚠ BREAKING CHANGES

* **api:** update SDKs to meteroid 0.1.0 ([#11](https://github.com/meteroid-oss/meteroid-node/issues/11))
* **api:** `POST /api/v1/events/ingest`: the `events/items/timestamp` request property `type/format` changed from `string` to `string, null/date-time`

### Features

* **api:** `POST /api/v1/events/ingest`: the `events/items/timestamp` request property `type/format` changed from `string` to `string, null/date-time` ([dff2efa](https://github.com/meteroid-oss/meteroid-node/commit/dff2efa9a63d399202799958aa0ba9636d4b045c))
* **api:** add `DELETE /api/v1/webhooks/endpoints/{endpoint_id}` ([dff2efa](https://github.com/meteroid-oss/meteroid-node/commit/dff2efa9a63d399202799958aa0ba9636d4b045c))
* **api:** update `GET /api/v1/plans` and 1029 more ([dff2efa](https://github.com/meteroid-oss/meteroid-node/commit/dff2efa9a63d399202799958aa0ba9636d4b045c))
* **api:** update SDKs to meteroid 0.1.0 ([#11](https://github.com/meteroid-oss/meteroid-node/issues/11)) ([dff2efa](https://github.com/meteroid-oss/meteroid-node/commit/dff2efa9a63d399202799958aa0ba9636d4b045c))

## [0.29.0](https://github.com/meteroid-oss/meteroid-node/compare/v0.28.0...v0.29.0) (2026-10-08)


### ⚠ BREAKING CHANGES

* **api:** update SDKs to meteroid 0.1.0 ([#9](https://github.com/meteroid-oss/meteroid-node/issues/9))

### Features

* **api:** update SDKs to meteroid 0.1.0 ([#9](https://github.com/meteroid-oss/meteroid-node/issues/9)) ([9d6644c](https://github.com/meteroid-oss/meteroid-node/commit/9d6644c088878d9f8140c7173915b12903f5f05b))

## [0.28.0](https://github.com/meteroid-oss/meteroid-node/compare/v0.27.1...v0.28.0) (2026-10-07)


### ⚠ BREAKING CHANGES

* **api:** update SDKs to meteroid 0.1.0 ([#7](https://github.com/meteroid-oss/meteroid-node/issues/7))

### Features

* **api:** update SDKs to meteroid 0.1.0 ([#7](https://github.com/meteroid-oss/meteroid-node/issues/7)) ([b9575cf](https://github.com/meteroid-oss/meteroid-node/commit/b9575cffa93e0e0639d53bdc7c9483d8cff39ce5))

## [0.27.1](https://github.com/meteroid-oss/meteroid-node/compare/v0.27.0...v0.27.1) (2026-10-06)


### Bug Fixes

* **api:** update SDKs to meteroid 0.1.0 ([#3](https://github.com/meteroid-oss/meteroid-node/issues/3)) ([620141f](https://github.com/meteroid-oss/meteroid-node/commit/620141f49c82ab3a335cb58e80a64388b779ab4a))

## [0.27.0](https://github.com/meteroid-oss/meteroid-node/compare/v0.1.0...v0.27.0) (2026-10-06)


### Features

* **api:** update SDKs to meteroid 0.1.0 ([#1](https://github.com/meteroid-oss/meteroid-node/issues/1)) ([3f723bb](https://github.com/meteroid-oss/meteroid-node/commit/3f723bb302536a48adbbd2aaeb3c18c1339f0569))


### Bug Fixes

* publish the package as @meteroid/node ([78dd79e](https://github.com/meteroid-oss/meteroid-node/commit/78dd79ef6c7c5ea4246c4d13b116d8639b655301))
