import { extendType, objectType } from "nexus";

import axios from "axios";
import { load } from "cheerio";

async function getEmasPrice() {
  const url = "https://www.hargaemas.com/";

  const html = await (await axios.get(url)).data;

  const cheerio = load(html);

  return parseFloat(
    (cheerio(".price-current").html() as string)?.replace(".", "")
  );
}

async function getBerasPrice() {
  const url = "https://hargapangan.id/tabel-harga/pedagang-besar/daerah";

  const html = await (await axios.get(url)).data;

  const cheerio = load(html);

  const price = cheerio("tbody")
    .children("tr")
    .first()
    .children("td")
    .last()
    .children()
    .children()
    .html();

  return parseFloat(price?.replace(".", "") ?? "");
}

export const MetalPrice = objectType({
  name: "MetalPrice",
  definition(t) {
    t.string("name");
    t.float("price");
  },
});

const hourMS = 1000 * 60 * 60;

let lastChangeMap = {
  emas: Date.now(),
  beras: Date.now(),
};

let lastPriceMap = { emas: 0, beras: 0 };

export const queryMetalPrice = extendType({
  type: "Query",
  definition(t) {
    t.field("getEmasPrice", {
      type: MetalPrice,
      resolve: async () => {
        let price = lastPriceMap.emas;

        if (
          Date.now() - lastChangeMap.emas > hourMS ||
          lastPriceMap.emas == 0
        ) {
          price = await getEmasPrice();
          lastPriceMap.emas = price;
          lastChangeMap.emas = Date.now();
        }

        return {
          name: "Emas",
          price,
        };
      },
    });
    t.field("getBerasPrice", {
      type: MetalPrice,
      resolve: async () => {
        let price = lastPriceMap.beras;

        if (
          Date.now() - lastChangeMap.beras > hourMS ||
          lastPriceMap.beras == 0
        ) {
          price = await getBerasPrice();
          lastPriceMap.beras = price;
          lastChangeMap.beras = Date.now();
        }

        return {
          name: "Beras",
          price,
        };
      },
    });
  },
});
