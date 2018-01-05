"use strict";

const typeFactory = require("./Type");

let products = [];

function Product(id, typeId, name, desc) {
    this.id = id;
    this.type = typeFactory.getType(typeId);
    this.name = name;
    this.desc = desc;
}

const fetchProducts = () => {
    return new Promise((resolve, reject) => {
        $.get("assets/json/products.json")
        .done(results => {
            storeProducts(results.products);
            resolve(results.products);
        })
        .fail(error => reject(error));
    });
};

const storeProducts = results => {
    results.forEach(result => {
        let product = new Product(result.id, result.type, result.name, result.description);
        products.push(product);
    });
};

const getProducts = catId => {
    if (catId) {
        return products.filter(product => product.type.cat.id == catId);
    } else {
        return products;
    }
};

module.exports = {getProducts, fetchProducts};