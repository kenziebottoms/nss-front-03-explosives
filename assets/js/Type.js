"use strict";

let types = [];
const catFactory = require("./Category");

function Type(id, catId, name, desc) {
    this.id = id;
    this.cat = catFactory.getCategory(catId);
    this.name = name;
    this.desc = desc;
}

const getTypes = () => types;

const getType = id => types.filter(type => type.id == id)[0];

const fetchTypes = () => {
    return new Promise((resolve, reject) => {
        $.get("assets/json/types.json")
        .done(results => {
            storeTypes(results.types);
            resolve(results.types);
        })
        .fail(error => reject(error));
    });
};

const storeTypes = results => {
    results.forEach(result => {
        let type = new Type(result.id, result.catId, result.name, result.desc);
        types.push(type);
    });
};

module.exports = {getType, getTypes, fetchTypes};