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
        view.refresh();
    });
};

module.exports = {store};