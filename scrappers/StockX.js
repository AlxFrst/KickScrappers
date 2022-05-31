import stockx from "stockx-scraper";

const stockxInfo = (sku) => {
  let sizes = [];
  const options = {
    currency: "EUR", // Default USD
    country: "FR", // Default US
  };

  stockx
    .getProduct(sku, options)
    .then((item) => {
      let allSizes = item.sizes;
      allSizes.forEach((size) => {
        sizes.push({
          stockxsize: size.sizeUS,
          stockxprice: size.lowestAsk.toString(),
        });
      });
      console.log(sizes);
      // DO WHAT U WANT WITH THE SIZE
    })
    .catch((e) => console.log(e));
};

export default stockxInfo;
