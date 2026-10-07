// this file is @generated
import { extraProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath, decodeString } from "../decode.js";
import { type Address, AddressSerializer } from "./address.js";
import { type CustomerId, CustomerIdSerializer } from "./customerId.js";

export interface CustomerDetails {
  alias?: string | null | undefined;
  billingAddress?: Address | null | undefined;
  email?: string | null | undefined;
  id: CustomerId;
  name: string;
  snapshotAt: Date;
  vatNumber?: string | null | undefined;
}

/** Converts `CustomerDetails` values from (`parse`) and to (`serialize`) their JSON form. */
export const CustomerDetailsSerializer = {
  parse(json: any, path = "$"): CustomerDetails {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "alias",
        "billing_address",
        "email",
        "id",
        "name",
        "snapshot_at",
        "vat_number",
      ]),
      alias:
        json["alias"] != null
          ? decodeString(json["alias"], path, "alias")
          : json["alias"],
      billingAddress:
        json["billing_address"] != null
          ? AddressSerializer.parse(
              json["billing_address"],
              decodePath(path, "billing_address")
            )
          : json["billing_address"],
      email:
        json["email"] != null
          ? decodeString(json["email"], path, "email")
          : json["email"],
      id: CustomerIdSerializer.parse(json["id"], decodePath(path, "id")),
      name: decodeString(json["name"], path, "name"),
      snapshotAt: decodeDateTime(json["snapshot_at"], path, "snapshot_at"),
      vatNumber:
        json["vat_number"] != null
          ? decodeString(json["vat_number"], path, "vat_number")
          : json["vat_number"],
    };
  },

  serialize(value: CustomerDetails): any {
    return {
      ...extraProperties(value, [
        "alias",
        "billingAddress",
        "email",
        "id",
        "name",
        "snapshotAt",
        "vatNumber",
      ]),
      alias: value.alias,
      billing_address:
        value.billingAddress != null
          ? AddressSerializer.serialize(value.billingAddress)
          : value.billingAddress,
      email: value.email,
      id: CustomerIdSerializer.serialize(value.id),
      name: value.name,
      snapshot_at: value.snapshotAt,
      vat_number: value.vatNumber,
    };
  },
};
