import stockxInfo from "./scrappers/StockX.js";
import klektInfo from "./scrappers/Kelkt.js";
import KikikickzInfo from "./scrappers/Kikikickz.js";
import getSneakers from "./utils/getSneakers.js";

const SKU = "DJ9649-400";

console.log(stockxInfo(SKU));
console.log(klektInfo(SKU));
console.log(KikikickzInfo(SKU));


