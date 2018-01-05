"use strict";

const view = require("./view");

const activateDropdown = () => {
    console.log("activating dropdown");
    $("#categories").click(event => {
        if ($(event.target).hasClass("dropdown-item")) {
            view.refresh($(event.target).data("id"));
        }
    });
};

module.exports = {activateDropdown};