// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import { type WebhookEndpoint, WebhookEndpointSerializer } from "./webhookEndpoint.js";

export interface WebhookEndpointListResponse {
  data: WebhookEndpoint[];
}

/** Converts `WebhookEndpointListResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const WebhookEndpointListResponseSerializer = {
  parse(json: any, path = "$"): WebhookEndpointListResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["data"]),
      data: decodeList(json["data"], path, "data", (item: any, p: string, i: number) =>
        WebhookEndpointSerializer.parse(item, decodePath(p, i))
      ),
    };
  },

  serialize(value: WebhookEndpointListResponse): any {
    return {
      ...extraProperties(value, ["data"]),
      data: value.data.map((item: any) => WebhookEndpointSerializer.serialize(item)),
    };
  },
};
