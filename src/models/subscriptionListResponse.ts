// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import {
  type PaginationResponse,
  PaginationResponseSerializer,
} from "./paginationResponse.js";
import { type Subscription, SubscriptionSerializer } from "./subscription.js";

export interface SubscriptionListResponse {
  data: Subscription[];
  paginationMeta: PaginationResponse;
}

/** Converts `SubscriptionListResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const SubscriptionListResponseSerializer = {
  parse(json: any, path = "$"): SubscriptionListResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["data", "pagination_meta"]),
      data: decodeList(json["data"], path, "data", (item: any, p: string, i: number) =>
        SubscriptionSerializer.parse(item, decodePath(p, i))
      ),
      paginationMeta: PaginationResponseSerializer.parse(
        json["pagination_meta"],
        decodePath(path, "pagination_meta")
      ),
    };
  },

  serialize(value: SubscriptionListResponse): any {
    return {
      ...extraProperties(value, ["data", "paginationMeta"]),
      data: value.data.map((item: any) => SubscriptionSerializer.serialize(item)),
      pagination_meta: PaginationResponseSerializer.serialize(value.paginationMeta),
    };
  },
};
