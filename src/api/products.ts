// this file is @generated

import {
  type CreateProductRequest,
  CreateProductRequestSerializer,
} from "../models/createProductRequest.js";
import { type Product, ProductSerializer } from "../models/product.js";
import type { ProductFamilyId } from "../models/productFamilyId.js";
import {
  type ProductListResponse,
  ProductListResponseSerializer,
} from "../models/productListResponse.js";
import {
  type UpdateProductRequest,
  UpdateProductRequestSerializer,
} from "../models/updateProductRequest.js";
import { ProductsEntitlements } from "./productsEntitlements.js";
import type { APIPromise } from "../apiPromise.js";
import { PagePromise } from "../pagination.js";
import {
  MeteroidRequest,
  type MeteroidRequestContext,
  type RequestOptions,
} from "../request.js";

/** The query and header parameters of `list`. */
export interface ProductsListOptions {
  productFamilyId?: ProductFamilyId | undefined;
  search?: string | undefined;
  /** Sort order. Format: `column.direction`. Allowed columns: `name`, `created_at`. Direction: `asc` or `desc`. Default: `name.asc`. */
  orderBy?: string | undefined;
  /** Page number (0-indexed) */
  page?: number | undefined;
  /** Number of items per page */
  perPage?: number | undefined;
}

/** The products operations, reached through the client's `products`. */
export class Products {
  private _entitlements?: ProductsEntitlements;
  /** @internal */
  public constructor(private readonly requestCtx: MeteroidRequestContext) {}

  /** The entitlements operations. */
  public get entitlements(): ProductsEntitlements {
    this._entitlements ??= new ProductsEntitlements(this.requestCtx);
    return this._entitlements;
  }

  /**
   * List products
   *
   * Await it for the first page: the response body, its properties read on the page, with
   * `items`, `hasNextPage()`, `getNextPage()` and `iterPages()`. Or iterate it with `for await`
   * over every item of every page, fetched on demand.
   */
  public list(
    options?: ProductsListOptions,
    requestOptions?: RequestOptions
  ): PagePromise<ProductListResponse, Product> {
    return new PagePromise<ProductListResponse, Product>(
      {
        style: "page",
        items: (page) => page.data,
        totalPages: (page) => page.paginationMeta?.totalPages,
        firstPage: 0,
        fetch: (page) => this.#list({ ...options, page: page }, requestOptions),
      },
      options?.page
    );
  }

  #list(
    options?: ProductsListOptions,
    requestOptions?: RequestOptions
  ): APIPromise<ProductListResponse> {
    const request = new MeteroidRequest("GET", "/api/v1/products");

    request.setQueryParam("product_family_id", options?.productFamilyId);
    request.setQueryParam("search", options?.search);
    request.setQueryParam("order_by", options?.orderBy);
    request.setQueryParam("page", options?.page);
    request.setQueryParam("per_page", options?.perPage);
    return request.send(
      this.requestCtx,
      ProductListResponseSerializer.parse,
      requestOptions
    );
  }

  /** Create a product */
  public create(
    createProductRequest: CreateProductRequest,
    requestOptions?: RequestOptions
  ): APIPromise<Product> {
    const request = new MeteroidRequest("POST", "/api/v1/products");

    request.setBody(CreateProductRequestSerializer.serialize(createProductRequest));
    return request.send(this.requestCtx, ProductSerializer.parse, requestOptions);
  }

  /** Get product details */
  public retrieve(
    productId: string,
    requestOptions?: RequestOptions
  ): APIPromise<Product> {
    const request = new MeteroidRequest("GET", "/api/v1/products/{product_id}");

    request.setPathParam("product_id", productId);
    return request.send(this.requestCtx, ProductSerializer.parse, requestOptions);
  }

  /**
   * Update a product
   *
   * Partially update product fields. The fee_type is immutable and cannot be changed.
   */
  public update(
    productId: string,
    updateProductRequest: UpdateProductRequest,
    requestOptions?: RequestOptions
  ): APIPromise<Product> {
    const request = new MeteroidRequest("PATCH", "/api/v1/products/{product_id}");

    request.setPathParam("product_id", productId);
    request.setBody(UpdateProductRequestSerializer.serialize(updateProductRequest));
    return request.send(this.requestCtx, ProductSerializer.parse, requestOptions);
  }

  /** Archive a product */
  public archive(productId: string, requestOptions?: RequestOptions): APIPromise<void> {
    const request = new MeteroidRequest("POST", "/api/v1/products/{product_id}/archive");

    request.setPathParam("product_id", productId);
    return request.sendNoResponseBody(this.requestCtx, requestOptions);
  }

  /** Unarchive a product */
  public unarchive(productId: string, requestOptions?: RequestOptions): APIPromise<void> {
    const request = new MeteroidRequest(
      "POST",
      "/api/v1/products/{product_id}/unarchive"
    );

    request.setPathParam("product_id", productId);
    return request.sendNoResponseBody(this.requestCtx, requestOptions);
  }
}
