"use strict";

const catFactory = require("./Category");
const typeFactory = require("./Type");
const productFactory = require("./Product");
const view = require('./view');

const store = results => {
    catFactory.fetchCategories()
    .then(categories => {
        return typeFactory.fetchTypes();
    })
    .then(types => {
        return productFactory.fetchProducts();
    }).then(products => {
        console.log(catFactory.getCategories());
        console.log(typeFactory.getTypes());
        console.log(productFactory.getProducts());
    });
};

module.exports = {store};