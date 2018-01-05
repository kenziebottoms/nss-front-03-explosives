"use strict";

const populateDropdown = cats => {
    const dropdownTemplate = require("../templates/dropdown.hbs");
    $("#categories").html(dropdownTemplate({"cats": cats}));
};

const populateProducts = products => {
    const productsTableTemplate = require("../templates/products-table.hbs");
    $("#products").html(productsTableTemplate({"products": products}));
};

const refresh = catId => {
    const catFactory = require("./Category");
    const productFactory = require("./Product");
    let categories = catFactory.getCategories();
    populateDropdown(categories);
    let products = productFactory.getProducts();
    if (catId) {
        products = productFactory.getProducts(catId);
    }
    populateProducts(products);
};

module.exports = {populateDropdown, populateProducts, refresh};