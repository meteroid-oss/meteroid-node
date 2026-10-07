// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type CountryCode, CountryCodeSerializer } from "./countryCode.js";

export interface Address {
  city?: string | null | undefined;
  country?: CountryCode | null | undefined;
  line1?: string | null | undefined;
  line2?: string | null | undefined;
  state?: string | null | undefined;
  zipCode?: string | null | undefined;
}

/** Converts `Address` values from (`parse`) and to (`serialize`) their JSON form. */
export const AddressSerializer = {
  parse(json: any, path = "$"): Address {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "city",
        "country",
        "line1",
        "line2",
        "state",
        "zip_code",
      ]),
      city:
        json["city"] != null ? decodeString(json["city"], path, "city") : json["city"],
      country:
        json["country"] != null
          ? CountryCodeSerializer.parse(json["country"], decodePath(path, "country"))
          : json["country"],
      line1:
        json["line1"] != null
          ? decodeString(json["line1"], path, "line1")
          : json["line1"],
      line2:
        json["line2"] != null
          ? decodeString(json["line2"], path, "line2")
          : json["line2"],
      state:
        json["state"] != null
          ? decodeString(json["state"], path, "state")
          : json["state"],
      zipCode:
        json["zip_code"] != null
          ? decodeString(json["zip_code"], path, "zip_code")
          : json["zip_code"],
    };
  },

  serialize(value: Address): any {
    return {
      ...extraProperties(value, [
        "city",
        "country",
        "line1",
        "line2",
        "state",
        "zipCode",
      ]),
      city: value.city,
      country:
        value.country != null
          ? CountryCodeSerializer.serialize(value.country)
          : value.country,
      line1: value.line1,
      line2: value.line2,
      state: value.state,
      zip_code: value.zipCode,
    };
  },
};
