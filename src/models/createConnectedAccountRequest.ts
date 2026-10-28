// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type CountryCode, CountryCodeSerializer } from "./countryCode.js";
import { type OnboardingMode, OnboardingModeSerializer } from "./onboardingMode.js";

export interface CreateConnectedAccountRequest {
  country?: CountryCode | null | undefined;
  email: string;
  metadata?: unknown | undefined;
  mode?: OnboardingMode | null | undefined;
  organizationName: string;
  redirectUrl?: string | null | undefined;
}

/** Converts `CreateConnectedAccountRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreateConnectedAccountRequestSerializer = {
  parse(json: any, path = "$"): CreateConnectedAccountRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "country",
        "email",
        "metadata",
        "mode",
        "organization_name",
        "redirect_url",
      ]),
      country:
        json["country"] != null
          ? CountryCodeSerializer.parse(json["country"], decodePath(path, "country"))
          : json["country"],
      email: decodeString(json["email"], path, "email"),
      metadata: json["metadata"],
      mode:
        json["mode"] != null
          ? OnboardingModeSerializer.parse(json["mode"], decodePath(path, "mode"))
          : json["mode"],
      organizationName: decodeString(
        json["organization_name"],
        path,
        "organization_name"
      ),
      redirectUrl:
        json["redirect_url"] != null
          ? decodeString(json["redirect_url"], path, "redirect_url")
          : json["redirect_url"],
    };
  },

  serialize(value: CreateConnectedAccountRequest): any {
    return {
      ...extraProperties(value, [
        "country",
        "email",
        "metadata",
        "mode",
        "organizationName",
        "redirectUrl",
      ]),
      country:
        value.country != null
          ? CountryCodeSerializer.serialize(value.country)
          : value.country,
      email: value.email,
      metadata: value.metadata,
      mode:
        value.mode != null ? OnboardingModeSerializer.serialize(value.mode) : value.mode,
      organization_name: value.organizationName,
      redirect_url: value.redirectUrl,
    };
  },
};
