// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import { type IngestFailure, IngestFailureSerializer } from "./ingestFailure.js";

export interface IngestEventsResponse {
  /** Events that failed to ingest. Omitted when no failures. */
  failures?: IngestFailure[] | undefined;
}

/** Converts `IngestEventsResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const IngestEventsResponseSerializer = {
  parse(json: any, path = "$"): IngestEventsResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["failures"]),
      failures:
        json["failures"] != null
          ? decodeList(
              json["failures"],
              path,
              "failures",
              (item: any, p: string, i: number) =>
                IngestFailureSerializer.parse(item, decodePath(p, i))
            )
          : undefined,
    };
  },

  serialize(value: IngestEventsResponse): any {
    return {
      ...extraProperties(value, ["failures"]),
      failures:
        value.failures != null
          ? value.failures.map((item: any) => IngestFailureSerializer.serialize(item))
          : undefined,
    };
  },
};
