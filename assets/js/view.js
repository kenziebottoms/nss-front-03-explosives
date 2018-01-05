"use strict";

const populateDropdown = cats => {
    const dropdownTemplate = require("../templates/dropdown.hbs");
    $("#categories").append(dropdownTemplate({"cats": cats}));
};

const populateProducts = products => {
    const productsTableTemplate = require("../templates/products-table.hbs");
    $("#products").append(productsTableTemplate({"products": products}));
};

module.exports = {populateDropdown, populateProducts};