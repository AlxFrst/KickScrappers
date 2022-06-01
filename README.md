# KickScrappers

This library provides a simple interface for retrieving data from various online sneaker retailers. It currently supports the following retailers:

- Klekt
- Kikikickz
- StockX

Usage

To use, simply require the library and invoke the appropriate scraper function with a SKU sneakers code:

in Index.js simply "stockxInfo(SKU)"

scraper.nike('http://www.nike.com/us/en_us/pd/air-jordan-11-low-mens-shoe/pid-11031651/pgid-11351735');

The scraper function will return a promise that resolves to an object containing the parsed data.

Supported fields

The following data fields are currently supported:

- sizes
- price

KickScrappers written in Javascript.
