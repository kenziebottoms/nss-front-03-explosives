"use strict";

let categories = [];
const view = require("./view");

function Category(id, name) {
    this.id = id;
    this.name = name;
}

const fetchCategories = () => {
    return new Promise((resolve, reject) => {
        $.get("assets/json/categories.json")
        .done(results => resolve(results.categories))
        .fail(error => reject(error));
    });
};

const processCategories = results => {
    fetchCategories().then(cats => {
        cats.forEach(cat => {
            let category = new Category(cat.id, cat.name);
            categories.push(category);
        });
        view.populateDropdown(categories);
    });
};

const getCategories = () => {
    return categories;
};

module.exports = {processCategories, getCategories};