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
        .done(results => {
            storeCategories(results.categories);
            resolve(results.categories);
        })
        .fail(error => reject(error));
    });
};

const storeCategories = cats => {
    cats.forEach(cat => {
        let category = new Category(cat.id, cat.name);
        categories.push(category);
    });
};

const getCategories = () => {
    return categories;
};

const getCategory = id => {
    return categories.filter(cat => cat.id == id);
};

module.exports = {fetchCategories, getCategories, getCategory};