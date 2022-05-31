import axios from "axios";
import cheerio from "cheerio";

const KlektInfo = (sku) => {
  const sizes = [];
  let klektUrl = "https://www.klekt.com/all?search=" + sku;
  axios.get(klektUrl).then((response) => {
    const $ = cheerio.load(response.data);
    const link = $(".pod-link").attr("href");
    const newLink = "https://www.klekt.com" + link;
    axios.get(newLink).then((response) => {
      const $ = cheerio.load(response.data);
      const sneakerTitle = $(".u-title.u-margin-none").text();
      const sizeArray = $(".pdp-price-point-wrapper").each((i, el) => {
        const klektsize = $(el).find(".pdp-price-point-size").text();
        const kelktprice = $(el).find(".pdp-price-point-price").text();
        sizes.push({ klektsize, kelktprice });
      });
      console.log(sizes);
      //DO WHAT U WANT WITH THE SIZE
    });
  });
};

export default KlektInfo;
