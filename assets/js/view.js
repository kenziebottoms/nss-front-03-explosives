"use strict";

const populateDropdown = cats => {
    const dropdownTemplate = require("../templates/dropdown.hbs");
    $("#categories").append(dropdownTemplate({"cats": cats}));
};

const populateProducts = products => {
    const productsTableTemplate = require("../templates/products-table.hbs");
    $("#products").append(productsTableTemplate({"products": products}));
};

const refresh = () => {
    const catFactory = require("./Category");
    const productFactory = require("./Product");
    let categories = catFactory.getCategories();
    populateDropdown(categories);
    let products = productFactory.getProducts();
    populateProducts(products);
};

module.exports = {populateDropdown, populateProducts, refresh};