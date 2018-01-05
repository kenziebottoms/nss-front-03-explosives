"use strict";

const catFactory = require("./Category");
const typeFactory = require("./Type");
const productFactory = require("./Product");
const view = require('./view');

const store = results => {
    catFactory.fetchCategories()
    .then(results => {
        return typeFactory.fetchTypes();
    })
    .then(results => {
        return productFactory.fetchProducts();
    }).then(results => {
        let categories = catFactory.getCategories();
        view.populateDropdown(categories);
        let products = productFactory.getProducts();
        console.log(products);
        view.populateProducts(products);
    });
};

module.exports = {store};