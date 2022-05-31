import axios from "axios";
import cheerio from "cheerio";

const KikikickzInfo = (sku) => {
  const sizes = [];
  let kikikickzUrl = "https://kikikickz.com/search?type=product&q=" + sku;
  axios.get(kikikickzUrl).then((response) => {
    const $ = cheerio.load(response.data);
    const link = $(".product__item__link--container").attr("href");
    const newLink = "https://kikikickz.com" + link;
    axios.get(newLink).then((response) => {
      const $ = cheerio.load(response.data);
      const sizeArray = $(".select__custom--value.body--text").each((i, el) => {
        const element = $(el).text();
        const kikikickzsize = element.split("-")[1];
        const kikikickzprice = element.split("-")[2];
        sizes.push({ kikikickzsize, kikikickzprice });
      });
      console.log(sizes);
    });
  });
};

export default KikikickzInfo;
