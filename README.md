# KickScrappers

This library provides a simple interface for retrieving data from various online sneaker retailers. It currently supports the following retailers:

- Klekt
- Kikikickz
- StockX

Usage

To use, simply require the library and invoke the appropriate scraper function with a SKU sneakers code:

in Index.js simply "stockxInfo(SKU)"


The scraper function will return a promise that resolves to an object containing the parsed data.

Supported fields

The following data fields are currently supported:

- sizes
- price

KickScrappers written in Javascript.
