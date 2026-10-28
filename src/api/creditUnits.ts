// this file is @generated

import { type CreditUnit, CreditUnitSerializer } from "../models/creditUnit.js";
import {
  type CreditUnitCreateRequest,
  CreditUnitCreateRequestSerializer,
} from "../models/creditUnitCreateRequest.js";
import {
  type CreditUnitListResponse,
  CreditUnitListResponseSerializer,
} from "../models/creditUnitListResponse.js";
import {
  type CreditUnitUpdateRequest,
  CreditUnitUpdateRequestSerializer,
} from "../models/creditUnitUpdateRequest.js";
import { CreditUnitsPrices } from "./creditUnitsPrices.js";
import type { APIPromise } from "../apiPromise.js";
import {
  MeteroidRequest,
  type MeteroidRequestContext,
  type RequestOptions,
} from "../request.js";

/** The query and header parameters of `list`. */
export interface CreditUnitsListOptions {
  /** Include archived units. Defaults to false. */
  includeArchived?: boolean | undefined;
}

/** The credit units operations, reached through the client's `creditUnits`. */
export class CreditUnits {
  private _prices?: CreditUnitsPrices;
  /** @internal */
  public constructor(private readonly requestCtx: MeteroidRequestContext) {}

  /** The prices operations. */
  public get prices(): CreditUnitsPrices {
    this._prices ??= new CreditUnitsPrices(this.requestCtx);
    return this._prices;
  }

  /**
   * List credit units
   *
   * The tenant's credit units (e.g. "Halyard credits"): denominations usage can be priced and
   * credit granted in, instead of money, each with its selling prices.
   */
  public list(
    options?: CreditUnitsListOptions,
    requestOptions?: RequestOptions
  ): APIPromise<CreditUnitListResponse> {
    const request = new MeteroidRequest("GET", "/api/v1/credit-units");

    request.setQueryParam("include_archived", options?.includeArchived);
    return request.send(
      this.requestCtx,
      CreditUnitListResponseSerializer.parse,
      requestOptions
    );
  }

  /**
   * Create a credit unit
   *
   * `code` and `precision` are immutable once created. Price usage in the unit with a plan fee's
   * `credit_unit`, grant it with a credit pack or a credit grant, and sell it with a top-up once
   * it has a `product_id` and a selling price.
   */
  public create(
    creditUnitCreateRequest: CreditUnitCreateRequest,
    requestOptions?: RequestOptions
  ): APIPromise<CreditUnit> {
    const request = new MeteroidRequest("POST", "/api/v1/credit-units");

    request.setBody(CreditUnitCreateRequestSerializer.serialize(creditUnitCreateRequest));
    return request.send(this.requestCtx, CreditUnitSerializer.parse, requestOptions);
  }

  /**
   * Get a credit unit
   *
   * The unit with its active selling prices.
   */
  public retrieve(id: string, requestOptions?: RequestOptions): APIPromise<CreditUnit> {
    const request = new MeteroidRequest("GET", "/api/v1/credit-units/{id}");

    request.setPathParam("id", id);
    return request.send(this.requestCtx, CreditUnitSerializer.parse, requestOptions);
  }

  /**
   * Update a credit unit
   *
   * Partial update: an absent field is left unchanged. `code` and `precision` are immutable and
   * cannot be changed here. Setting `archived: true` blocks the unit from new prices, packs and
   * grants; existing ones keep working.
   */
  public update(
    id: string,
    creditUnitUpdateRequest: CreditUnitUpdateRequest,
    requestOptions?: RequestOptions
  ): APIPromise<CreditUnit> {
    const request = new MeteroidRequest("PATCH", "/api/v1/credit-units/{id}");

    request.setPathParam("id", id);
    request.setBody(CreditUnitUpdateRequestSerializer.serialize(creditUnitUpdateRequest));
    return request.send(this.requestCtx, CreditUnitSerializer.parse, requestOptions);
  }
}
