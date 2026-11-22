// this file is @generated

import {
  type RecordInvoicePaymentRequest,
  RecordInvoicePaymentRequestSerializer,
} from "../models/recordInvoicePaymentRequest.js";
import {
  type ReverseInvoicePaymentRequest,
  ReverseInvoicePaymentRequestSerializer,
} from "../models/reverseInvoicePaymentRequest.js";
import { type Transaction, TransactionSerializer } from "../models/transaction.js";
import type { APIPromise } from "../apiPromise.js";
import {
  MeteroidRequest,
  type MeteroidRequestContext,
  type RequestOptions,
} from "../request.js";

/** The query and header parameters of `create`. */
export interface InvoicesPaymentsCreateOptions {
  /** Sent as the `Idempotency-Key` header. */
  idempotencyKey: string;
}

/** The query and header parameters of `reverse`. */
export interface InvoicesPaymentsReverseOptions {
  /** Sent as the `Idempotency-Key` header. */
  idempotencyKey: string;
}

/** The invoices payments operations, reached through the client's `invoices.payments`. */
export class InvoicesPayments {
  /** @internal */
  public constructor(private readonly requestCtx: MeteroidRequestContext) {}

  /**
   * Record an invoice payment
   *
   * Record a partial or full payment received outside Meteroid against a finalized invoice.
   * Paying the remaining balance marks the invoice paid.
   */
  public create(
    invoiceId: string,
    recordInvoicePaymentRequest: RecordInvoicePaymentRequest,
    options: InvoicesPaymentsCreateOptions,
    requestOptions?: RequestOptions
  ): APIPromise<Transaction> {
    const request = new MeteroidRequest("POST", "/api/v1/invoices/{invoice_id}/payments");

    request.setPathParam("invoice_id", invoiceId);
    request.setHeaderParam("Idempotency-Key", options.idempotencyKey);
    request.setBody(
      RecordInvoicePaymentRequestSerializer.serialize(recordInvoicePaymentRequest)
    );
    return request.send(this.requestCtx, TransactionSerializer.parse, requestOptions);
  }

  /**
   * Reverse an invoice payment
   *
   * Record the full reversal of a settled manual payment.
   */
  public reverse(
    invoiceId: string,
    transactionId: string,
    reverseInvoicePaymentRequest: ReverseInvoicePaymentRequest,
    options: InvoicesPaymentsReverseOptions,
    requestOptions?: RequestOptions
  ): APIPromise<Transaction> {
    const request = new MeteroidRequest(
      "POST",
      "/api/v1/invoices/{invoice_id}/payments/{transaction_id}/reverse"
    );

    request.setPathParam("invoice_id", invoiceId);
    request.setPathParam("transaction_id", transactionId);
    request.setHeaderParam("Idempotency-Key", options.idempotencyKey);
    request.setBody(
      ReverseInvoicePaymentRequestSerializer.serialize(reverseInvoicePaymentRequest)
    );
    return request.send(this.requestCtx, TransactionSerializer.parse, requestOptions);
  }
}
