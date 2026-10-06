// this file is @generated

import {
  type CreateFeatureRequest,
  CreateFeatureRequestSerializer,
} from "../models/createFeatureRequest.js";
import { type Feature, FeatureSerializer } from "../models/feature.js";
import {
  type FeatureListResponse,
  FeatureListResponseSerializer,
} from "../models/featureListResponse.js";
import type { FeatureStatus } from "../models/featureStatus.js";
import type { ProductId } from "../models/productId.js";
import {
  type UpdateFeatureRequest,
  UpdateFeatureRequestSerializer,
} from "../models/updateFeatureRequest.js";
import type { APIPromise } from "../apiPromise.js";
import {
  MeteroidRequest,
  type MeteroidRequestContext,
  type RequestOptions,
} from "../request.js";

/** The query and header parameters of `list`. */
export interface FeaturesListOptions {
  /** Filter by feature status. Repeat the param to select multiple, omit to return all. */
  statuses?: FeatureStatus[] | undefined;
  /** Filter by product. Omit to return features across all products. */
  productId?: ProductId | undefined;
  /** Search by feature name. */
  search?: string | undefined;
  /** Page number (0-indexed) */
  page?: number | undefined;
  /** Number of items per page */
  perPage?: number | undefined;
}

/** The features operations, reached through the client's `features`. */
export class Features {
  /** @internal */
  public constructor(private readonly requestCtx: MeteroidRequestContext) {}

  /** List features */
  public list(
    options?: FeaturesListOptions,
    requestOptions?: RequestOptions
  ): APIPromise<FeatureListResponse> {
    const request = new MeteroidRequest("GET", "/api/v1/features");

    request.setExplodedQueryParam("statuses", options?.statuses);
    request.setQueryParam("product_id", options?.productId);
    request.setQueryParam("search", options?.search);
    request.setQueryParam("page", options?.page);
    request.setQueryParam("per_page", options?.perPage);
    return request.send(
      this.requestCtx,
      FeatureListResponseSerializer.parse,
      requestOptions
    );
  }

  /** Create a feature */
  public create(
    createFeatureRequest: CreateFeatureRequest,
    requestOptions?: RequestOptions
  ): APIPromise<Feature> {
    const request = new MeteroidRequest("POST", "/api/v1/features");

    request.setBody(CreateFeatureRequestSerializer.serialize(createFeatureRequest));
    return request.send(this.requestCtx, FeatureSerializer.parse, requestOptions);
  }

  /** Get feature details */
  public retrieve(
    idOrCode: string,
    requestOptions?: RequestOptions
  ): APIPromise<Feature> {
    const request = new MeteroidRequest("GET", "/api/v1/features/{id_or_code}");

    request.setPathParam("id_or_code", idOrCode);
    return request.send(this.requestCtx, FeatureSerializer.parse, requestOptions);
  }

  /**
   * Update a feature
   *
   * Partially update feature fields. Code, feature type and product are immutable.
   */
  public update(
    idOrCode: string,
    updateFeatureRequest: UpdateFeatureRequest,
    requestOptions?: RequestOptions
  ): APIPromise<Feature> {
    const request = new MeteroidRequest("PATCH", "/api/v1/features/{id_or_code}");

    request.setPathParam("id_or_code", idOrCode);
    request.setBody(UpdateFeatureRequestSerializer.serialize(updateFeatureRequest));
    return request.send(this.requestCtx, FeatureSerializer.parse, requestOptions);
  }

  /**
   * Archive a feature
   *
   * Keeps the feature and its entitlements but hides them from resolution.
   */
  public archive(idOrCode: string, requestOptions?: RequestOptions): APIPromise<void> {
    const request = new MeteroidRequest("POST", "/api/v1/features/{id_or_code}/archive");

    request.setPathParam("id_or_code", idOrCode);
    return request.sendNoResponseBody(this.requestCtx, requestOptions);
  }

  /** Unarchive a feature */
  public unarchive(idOrCode: string, requestOptions?: RequestOptions): APIPromise<void> {
    const request = new MeteroidRequest(
      "POST",
      "/api/v1/features/{id_or_code}/unarchive"
    );

    request.setPathParam("id_or_code", idOrCode);
    return request.sendNoResponseBody(this.requestCtx, requestOptions);
  }
}
