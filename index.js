import stockxInfo from "./scrappers/StockX.js";
import klektInfo from "./scrappers/Kelkt.js";
import KikikickzInfo from "./scrappers/Kikikickz.js";

const SKU = "DO9392-700";

console.log(stockxInfo(SKU));
console.log(klektInfo(SKU));
console.log(KikikickzInfo(SKU));
