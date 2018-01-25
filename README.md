# Acme Explosives

![](https://img.shields.io/badge/data-static-lightgrey.svg)
![](https://img.shields.io/badge/template-handlebars-orange.svg)
![](https://img.shields.io/badge/js-jquery-blue.svg)
![](https://img.shields.io/badge/modularity-browserify-yellow.svg)
![](https://img.shields.io/badge/css_preprocessor-scss-ff69b4.svg)
![](https://img.shields.io/badge/css_framework-bootstrap-5F2C7C.svg)
![](https://img.shields.io/badge/mvp-working-brightgreen.svg)

## Install locally

```
git clone git@github.com:kenziebottoms/nss-front-03-explosives.git
npm install
grunt
```

## Requirements

You are going to be creating several JSON files that will be describing all of the explosive products that you sell. You need to use Promises to handle the order of the asynchronous operations needed to load the data.

### Product Categories

- [x] Choose two or more categories for your products.
- [x] Give each one an integer unique id.

[Here's an example.](assets/json/categories.sample.json)

### Product Types

- [x] Create at least three types **for each** category of your products.
- [x] For each type, add a key/value pair that creates a relationship to the corresponding category.

[Here's an example.](assets/json/types.sample.json)

### Product Details

- [x] Create a JSON file describing each product you offer.
- [x] Add a key/value pair that creates a relationship to the appropriate product type.
- [x] Add at least 3 products for each type.

[Here's an example.](assets/json/products.sample.json)

### User interface

- [x] Create a simple user interface for your product catalog where a user can select a category from a dropdown.
- [x] When a category is selected, you must use Promises to read, first, from the `categories.json` to load that array of objects, then load `types.json`, then `products.json`.
- [x] Once all data is loaded, you need to display the products in a Bootstrap grid.
    - [x] Each product must display the string name of its product type, and product category. Not the integer id value.
