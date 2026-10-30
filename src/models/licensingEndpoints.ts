// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";
/** The public endpoints your installations talk to. */
export interface LicensingEndpoints {
  activateUrl: string;
  eventsUrl: string;
  jwksUrl: string;
  refreshUrl: string;
}

/** Converts `LicensingEndpoints` values from (`parse`) and to (`serialize`) their JSON form. */
export const LicensingEndpointsSerializer = {
  parse(json: any, path = "$"): LicensingEndpoints {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["activate_url", "events_url", "jwks_url", "refresh_url"]),
      activateUrl: decodeString(json["activate_url"], path, "activate_url"),
      eventsUrl: decodeString(json["events_url"], path, "events_url"),
      jwksUrl: decodeString(json["jwks_url"], path, "jwks_url"),
      refreshUrl: decodeString(json["refresh_url"], path, "refresh_url"),
    };
  },

  serialize(value: LicensingEndpoints): any {
    return {
      ...extraProperties(value, ["activateUrl", "eventsUrl", "jwksUrl", "refreshUrl"]),
      activate_url: value.activateUrl,
      events_url: value.eventsUrl,
      jwks_url: value.jwksUrl,
      refresh_url: value.refreshUrl,
    };
  },
};
