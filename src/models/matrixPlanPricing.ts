// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import { type MatrixRow, MatrixRowSerializer } from "./matrixRow.js";

export interface MatrixPlanPricing {
  rates: MatrixRow[];
}

/** Converts `MatrixPlanPricing` values from (`parse`) and to (`serialize`) their JSON form. */
export const MatrixPlanPricingSerializer = {
  parse(json: any, path = "$"): MatrixPlanPricing {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["rates"]),
      rates: decodeList(json["rates"], path, "rates", (item: any, p: string, i: number) =>
        MatrixRowSerializer.parse(item, decodePath(p, i))
      ),
    };
  },

  serialize(value: MatrixPlanPricing): any {
    return {
      ...extraProperties(value, ["rates"]),
      rates: value.rates.map((item: any) => MatrixRowSerializer.serialize(item)),
    };
  },
};
