// this file is @generated

import {
  type IssueLicenseRequest,
  IssueLicenseRequestSerializer,
} from "../models/issueLicenseRequest.js";
import {
  type IssueLicenseResponse,
  IssueLicenseResponseSerializer,
} from "../models/issueLicenseResponse.js";
import {
  type IssueOfflineLicenseRequest,
  IssueOfflineLicenseRequestSerializer,
} from "../models/issueOfflineLicenseRequest.js";
import { type License, LicenseSerializer } from "../models/license.js";
import {
  type LicenseActivationCode,
  LicenseActivationCodeSerializer,
} from "../models/licenseActivationCode.js";
import {
  type LicenseListResponse,
  LicenseListResponseSerializer,
} from "../models/licenseListResponse.js";
import {
  type LicenseSigningKeysResponse,
  LicenseSigningKeysResponseSerializer,
} from "../models/licenseSigningKeysResponse.js";
import {
  type OfflineLicense,
  OfflineLicenseSerializer,
} from "../models/offlineLicense.js";
import {
  type RevokeLicenseRequest,
  RevokeLicenseRequestSerializer,
} from "../models/revokeLicenseRequest.js";
import type { APIPromise } from "../apiPromise.js";
import {
  MeteroidRequest,
  type MeteroidRequestContext,
  type RequestOptions,
} from "../request.js";

/** The query and header parameters of `list`. */
export interface LicensesListOptions {
  /** Filter by customer ID or alias */
  customerId?: string | undefined;
  subscriptionId?: string | undefined;
  /** Include revoked licenses. Default: false. */
  includeRevoked?: boolean | undefined;
}

/** The licenses operations, reached through the client's `licenses`. */
export class Licenses {
  /** @internal */
  public constructor(private readonly requestCtx: MeteroidRequestContext) {}

  /** List licenses */
  public list(
    options?: LicensesListOptions,
    requestOptions?: RequestOptions
  ): APIPromise<LicenseListResponse> {
    const request = new MeteroidRequest("GET", "/api/v1/licenses");

    request.setQueryParam("customer_id", options?.customerId);
    request.setQueryParam("subscription_id", options?.subscriptionId);
    request.setQueryParam("include_revoked", options?.includeRevoked);
    return request.send(
      this.requestCtx,
      LicenseListResponseSerializer.parse,
      requestOptions
    );
  }

  /**
   * Issue a license
   *
   * Issues a license to a customer, optionally tied to one of its subscriptions. Online, the
   * license is pending until their installation activates it with the returned one-time code.
   * Offline, it is returned signed at once, for an installation that can't reach the server.
   */
  public create(
    issueLicenseRequest: IssueLicenseRequest,
    requestOptions?: RequestOptions
  ): APIPromise<IssueLicenseResponse> {
    const request = new MeteroidRequest("POST", "/api/v1/licenses");

    request.setBody(IssueLicenseRequestSerializer.serialize(issueLicenseRequest));
    return request.send(
      this.requestCtx,
      IssueLicenseResponseSerializer.parse,
      requestOptions
    );
  }

  /** Get a license */
  public retrieve(
    licenseId: string,
    requestOptions?: RequestOptions
  ): APIPromise<License> {
    const request = new MeteroidRequest("GET", "/api/v1/licenses/{license_id}");

    request.setPathParam("license_id", licenseId);
    return request.send(this.requestCtx, LicenseSerializer.parse, requestOptions);
  }

  /**
   * Get a license's activation code
   *
   * Available until the license is activated or revoked.
   */
  public retrieveActivationCode(
    licenseId: string,
    requestOptions?: RequestOptions
  ): APIPromise<LicenseActivationCode> {
    const request = new MeteroidRequest(
      "GET",
      "/api/v1/licenses/{license_id}/activation-code"
    );

    request.setPathParam("license_id", licenseId);
    return request.send(
      this.requestCtx,
      LicenseActivationCodeSerializer.parse,
      requestOptions
    );
  }

  /**
   * Issue an offline license
   *
   * Signs a long-lived license for an air-gapped installation from an existing license, e.g. to
   * renew an offline license before it expires. Given an instance id, binds the license to it.
   */
  public offline(
    licenseId: string,
    issueOfflineLicenseRequest: IssueOfflineLicenseRequest,
    requestOptions?: RequestOptions
  ): APIPromise<OfflineLicense> {
    const request = new MeteroidRequest("POST", "/api/v1/licenses/{license_id}/offline");

    request.setPathParam("license_id", licenseId);
    request.setBody(
      IssueOfflineLicenseRequestSerializer.serialize(issueOfflineLicenseRequest)
    );
    return request.send(this.requestCtx, OfflineLicenseSerializer.parse, requestOptions);
  }

  /** Revoke a license */
  public revoke(
    licenseId: string,
    revokeLicenseRequest: RevokeLicenseRequest,
    requestOptions?: RequestOptions
  ): APIPromise<License> {
    const request = new MeteroidRequest("POST", "/api/v1/licenses/{license_id}/revoke");

    request.setPathParam("license_id", licenseId);
    request.setBody(RevokeLicenseRequestSerializer.serialize(revokeLicenseRequest));
    return request.send(this.requestCtx, LicenseSerializer.parse, requestOptions);
  }

  /**
   * Get the licensing signing keys
   *
   * The keys licenses are signed with, and the public endpoints installations talk to.
   */
  public listLicensingSigningKeys(
    requestOptions?: RequestOptions
  ): APIPromise<LicenseSigningKeysResponse> {
    const request = new MeteroidRequest("GET", "/api/v1/licensing/signing-keys");

    return request.send(
      this.requestCtx,
      LicenseSigningKeysResponseSerializer.parse,
      requestOptions
    );
  }
}
