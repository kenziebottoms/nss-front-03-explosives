"use strict";

const populateDropdown = cats => {
    cats.forEach(cat => {
        $("#categories").append(`<a class="dropdown-item" href="#">${cat.name}</a>`);
    });
};

module.exports = {populateDropdown};