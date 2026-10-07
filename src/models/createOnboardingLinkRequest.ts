// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface CreateOnboardingLinkRequest {
  redirectUrl: string;
}

/** Converts `CreateOnboardingLinkRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreateOnboardingLinkRequestSerializer = {
  parse(json: any, path = "$"): CreateOnboardingLinkRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["redirect_url"]),
      redirectUrl: decodeString(json["redirect_url"], path, "redirect_url"),
    };
  },

  serialize(value: CreateOnboardingLinkRequest): any {
    return {
      ...extraProperties(value, ["redirectUrl"]),
      redirect_url: value.redirectUrl,
    };
  },
};
