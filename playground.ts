import axios from "axios";
import { load } from "cheerio";

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

getBerasPrice().then(console.log);
