// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";
/**
 * Restricts the customer's usage events a subscription bills to those whose `property` equals
 * `value` (for example `api_key` = `key-A`). Among the customer's subscriptions pricing the same
 * metric, one with a usage filter bills the events matching it (an event two filters match goes
 * to the older subscription); one without bills the events matching no other subscription's
 * filter. Two subscriptions without a usage filter both bill every such event. Events matching
 * no filter while every subscription pricing their metric has one are billed by none and
 * reported as unattributed usage.
 */
export interface UsageFilter {
  /** Event property name, e.g. `api_key`. */
  property: string;
  /** Value the property must have. */
  value: string;
}

/** Converts `UsageFilter` values from (`parse`) and to (`serialize`) their JSON form. */
export const UsageFilterSerializer = {
  parse(json: any, path = "$"): UsageFilter {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["property", "value"]),
      property: decodeString(json["property"], path, "property"),
      value: decodeString(json["value"], path, "value"),
    };
  },

  serialize(value: UsageFilter): any {
    return {
      ...extraProperties(value, ["property", "value"]),
      property: value.property,
      value: value.value,
    };
  },
};
