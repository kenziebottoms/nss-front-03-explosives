"use strict";

const populateDropdown = cats => {
    const dropdownTemplate = require("../templates/dropdown.hbs");
    $("#categories").append(dropdownTemplate({"cats": cats}));
};

module.exports = {populateDropdown};