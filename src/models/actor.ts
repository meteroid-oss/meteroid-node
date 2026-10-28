// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type ActorType, ActorTypeSerializer } from "./actorType.js";
/** Who made a change. */
export interface Actor {
  /**
   * The user's id (`usr_…`) for USER, the customer's (`cus_…`) for CUSTOMER, the API key's
   * or app's for API_KEY and OAUTH_APP; absent for SYSTEM.
   */
  id?: string | null | undefined;
  /** USER, CUSTOMER, API_KEY, OAUTH_APP or SYSTEM. */
  type: ActorType;
}

/** Converts `Actor` values from (`parse`) and to (`serialize`) their JSON form. */
export const ActorSerializer = {
  parse(json: any, path = "$"): Actor {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["id", "type"]),
      id: json["id"] != null ? decodeString(json["id"], path, "id") : json["id"],
      type: ActorTypeSerializer.parse(json["type"], decodePath(path, "type")),
    };
  },

  serialize(value: Actor): any {
    return {
      ...extraProperties(value, ["id", "type"]),
      id: value.id,
      type: ActorTypeSerializer.serialize(value.type),
    };
  },
};
