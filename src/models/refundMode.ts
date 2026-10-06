// this file is @generated
/**
 * How a voluntary refund was issued: through the provider, or recorded after a wire or cash
 * movement made outside Meteroid.
 */
export const RefundMode = {
  Online: "ONLINE",
  Offline: "OFFLINE",
} as const;
export type RefundMode = (typeof RefundMode)[keyof typeof RefundMode] | (string & {});

/** Converts `RefundMode` values from (`parse`) and to (`serialize`) their JSON form. */
export const RefundModeSerializer = {
  parse(json: any): RefundMode {
    return json;
  },

  serialize(value: RefundMode): any {
    return value;
  },
};
