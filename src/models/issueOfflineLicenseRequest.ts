// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";

export interface IssueOfflineLicenseRequest {
  /**
   * The installation's id as it reports it, up to 255 characters without spaces: the license
   * names it (`aud`) and stays bound to it. Without one, the license is not tied to one.
   */
  instanceId?: string | null | undefined;
  /** Lifetime of the offline license, 1 to 400 days. */
  validDays: number;
}

/** Converts `IssueOfflineLicenseRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const IssueOfflineLicenseRequestSerializer = {
  parse(json: any, path = "$"): IssueOfflineLicenseRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["instance_id", "valid_days"]),
      instanceId:
        json["instance_id"] != null
          ? decodeString(json["instance_id"], path, "instance_id")
          : json["instance_id"],
      validDays: decodeInteger(json["valid_days"], path, "valid_days"),
    };
  },

  serialize(value: IssueOfflineLicenseRequest): any {
    return {
      ...extraProperties(value, ["instanceId", "validDays"]),
      instance_id: value.instanceId,
      valid_days: value.validDays,
    };
  },
};
