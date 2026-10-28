// this file is @generated

import { UsageCostsCustomer } from "./usageCostsCustomer.js";
import { UsageCostsSubscription } from "./usageCostsSubscription.js";
import type { MeteroidRequestContext } from "../request.js";

/** The usage costs operations, reached through the client's `usageCosts`. */
export class UsageCosts {
  private _customer?: UsageCostsCustomer;
  private _subscription?: UsageCostsSubscription;
  /** @internal */
  public constructor(private readonly requestCtx: MeteroidRequestContext) {}

  /** The customer operations. */
  public get customer(): UsageCostsCustomer {
    this._customer ??= new UsageCostsCustomer(this.requestCtx);
    return this._customer;
  }

  /** The subscription operations. */
  public get subscription(): UsageCostsSubscription {
    this._subscription ??= new UsageCostsSubscription(this.requestCtx);
    return this._subscription;
  }
}
