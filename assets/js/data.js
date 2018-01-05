"use strict";

const catFactory = require("./Category");
const typeFactory = require("./Type");
const view = require('./view');

const store = results => {
    catFactory.fetchCategories()
    .then(categories => {
        return typeFactory.fetchTypes();
    })
    .then(results => {
        console.log(catFactory.getCategories());
        console.log(typeFactory.getTypes());
    });
};

module.exports = {store};