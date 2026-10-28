// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath, decodeString } from "../decode.js";
import { type UsageEvent, UsageEventSerializer } from "./usageEvent.js";

export interface UsageEventListResponse {
  data: UsageEvent[];
  /** Absent on the last page. */
  nextCursor?: string | null | undefined;
}

/** Converts `UsageEventListResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const UsageEventListResponseSerializer = {
  parse(json: any, path = "$"): UsageEventListResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["data", "next_cursor"]),
      data: decodeList(json["data"], path, "data", (item: any, p: string, i: number) =>
        UsageEventSerializer.parse(item, decodePath(p, i))
      ),
      nextCursor:
        json["next_cursor"] != null
          ? decodeString(json["next_cursor"], path, "next_cursor")
          : json["next_cursor"],
    };
  },

  serialize(value: UsageEventListResponse): any {
    return {
      ...extraProperties(value, ["data", "nextCursor"]),
      data: value.data.map((item: any) => UsageEventSerializer.serialize(item)),
      next_cursor: value.nextCursor,
    };
  },
};
