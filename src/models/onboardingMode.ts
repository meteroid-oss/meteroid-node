// this file is @generated
import { decodeString } from "../decode.js";
/** Onboarding mode for connected accounts */
export const OnboardingMode = {
  Express: "express",
  Full: "full",
} as const;
export type OnboardingMode =
  | (typeof OnboardingMode)[keyof typeof OnboardingMode]
  | (string & {});

/** Converts `OnboardingMode` values from (`parse`) and to (`serialize`) their JSON form. */
export const OnboardingModeSerializer = {
  parse(json: any, path = "$"): OnboardingMode {
    return decodeString(json, path);
  },

  serialize(value: OnboardingMode): any {
    return value;
  },
};
