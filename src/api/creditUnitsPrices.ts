// this file is @generated

import {
  type CreditUnitPrice,
  CreditUnitPriceSerializer,
} from "../models/creditUnitPrice.js";
import {
  type CreditUnitPriceListResponse,
  CreditUnitPriceListResponseSerializer,
} from "../models/creditUnitPriceListResponse.js";
import {
  type CreditUnitPriceSetRequest,
  CreditUnitPriceSetRequestSerializer,
} from "../models/creditUnitPriceSetRequest.js";
import type { APIPromise } from "../apiPromise.js";
import {
  MeteroidRequest,
  type MeteroidRequestContext,
  type RequestOptions,
} from "../request.js";

/** The query and header parameters of `list`. */
export interface CreditUnitsPricesListOptions {
  /** Include archived prices. Defaults to false. */
  includeArchived?: boolean | undefined;
}

/** The credit units prices operations, reached through the client's `creditUnits.prices`. */
export class CreditUnitsPrices {
  /** @internal */
  public constructor(private readonly requestCtx: MeteroidRequestContext) {}

  /**
   * List a credit unit's selling prices
   *
   * The active price per currency, and archived ones when asked, newest first.
   */
  public list(
    id: string,
    options?: CreditUnitsPricesListOptions,
    requestOptions?: RequestOptions
  ): APIPromise<CreditUnitPriceListResponse> {
    const request = new MeteroidRequest("GET", "/api/v1/credit-units/{id}/prices");

    request.setPathParam("id", id);
    request.setQueryParam("include_archived", options?.includeArchived);
    return request.send(
      this.requestCtx,
      CreditUnitPriceListResponseSerializer.parse,
      requestOptions
    );
  }

  /**
   * Set a credit unit's selling price
   *
   * The price of one credit in a currency, used to sell the unit through top-ups and automatic
   * top-ups (taxed at purchase under the unit's `product_id`). Replaces the active price in that
   * currency, which is archived: a top-up already priced keeps its terms.
   */
  public update(
    id: string,
    currency: string,
    creditUnitPriceSetRequest: CreditUnitPriceSetRequest,
    requestOptions?: RequestOptions
  ): APIPromise<CreditUnitPrice> {
    const request = new MeteroidRequest(
      "PUT",
      "/api/v1/credit-units/{id}/prices/{currency}"
    );

    request.setPathParam("id", id);
    request.setPathParam("currency", currency);
    request.setBody(
      CreditUnitPriceSetRequestSerializer.serialize(creditUnitPriceSetRequest)
    );
    return request.send(this.requestCtx, CreditUnitPriceSerializer.parse, requestOptions);
  }

  /**
   * Remove a credit unit's selling price
   *
   * Archives the active price in a currency: the unit can no longer be sold in it (top-ups and
   * automatic top-ups included) until a new price is set.
   */
  public archive(
    id: string,
    currency: string,
    requestOptions?: RequestOptions
  ): APIPromise<CreditUnitPrice> {
    const request = new MeteroidRequest(
      "DELETE",
      "/api/v1/credit-units/{id}/prices/{currency}"
    );

    request.setPathParam("id", id);
    request.setPathParam("currency", currency);
    return request.send(this.requestCtx, CreditUnitPriceSerializer.parse, requestOptions);
  }
}
