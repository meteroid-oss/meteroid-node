// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import { type MatrixRow, MatrixRowSerializer } from "./matrixRow.js";

export interface MatrixPricing {
  rates: MatrixRow[];
}

/** Converts `MatrixPricing` values from (`parse`) and to (`serialize`) their JSON form. */
export const MatrixPricingSerializer = {
  parse(json: any, path = "$"): MatrixPricing {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["rates"]),
      rates: decodeList(json["rates"], path, "rates", (item: any, p: string, i: number) =>
        MatrixRowSerializer.parse(item, decodePath(p, i))
      ),
    };
  },

  serialize(value: MatrixPricing): any {
    return {
      ...extraProperties(value, ["rates"]),
      rates: value.rates.map((item: any) => MatrixRowSerializer.serialize(item)),
    };
  },
};
