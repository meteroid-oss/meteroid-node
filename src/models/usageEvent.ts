// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeDateTime,
  decodeMap,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type UsageCost, UsageCostSerializer } from "./usageCost.js";

export interface UsageEvent {
  cost?: UsageCost | null | undefined;
  id: string;
  properties: { [key: string]: string };
  /**
   * Billed units the event adds. Absent when the metric's aggregation cannot be split per
   * event, or when the event does not count towards the metric.
   */
  quantity?: string | null | undefined;
  timestamp: Date;
}

/** Converts `UsageEvent` values from (`parse`) and to (`serialize`) their JSON form. */
export const UsageEventSerializer = {
  parse(json: any, path = "$"): UsageEvent {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["cost", "id", "properties", "quantity", "timestamp"]),
      cost:
        json["cost"] != null
          ? UsageCostSerializer.parse(json["cost"], decodePath(path, "cost"))
          : json["cost"],
      id: decodeString(json["id"], path, "id"),
      properties: decodeMap(
        json["properties"],
        path,
        "properties",
        (entry: any, p: string, key: string) => decodeString(entry, p, key)
      ),
      quantity:
        json["quantity"] != null
          ? decodeString(json["quantity"], path, "quantity")
          : json["quantity"],
      timestamp: decodeDateTime(json["timestamp"], path, "timestamp"),
    };
  },

  serialize(value: UsageEvent): any {
    return {
      ...extraProperties(value, ["cost", "id", "properties", "quantity", "timestamp"]),
      cost: value.cost != null ? UsageCostSerializer.serialize(value.cost) : value.cost,
      id: value.id,
      properties: value.properties,
      quantity: value.quantity,
      timestamp: value.timestamp,
    };
  },
};
