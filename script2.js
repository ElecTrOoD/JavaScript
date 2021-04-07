'use strict';

function getProduct(name, price, count) {
    return {
        name,
        price,
        count,
        calcFullPrice() {
            return this.price * this.count;
        }
    }
}

function getBasket(products) {
    return {
        products,
        countBasketPrice() {
            return this.products.reduce((total_price, product) => total_price + product.calcFullPrice(), 0);
        }
    }
}

let product1 = getProduct('Яблоки', 50, 3);
let product2 = getProduct('Груши', 65, 1);
let product3 = getProduct('Персики', 85, 2);
let product4 = getProduct('Бананы', 55, 1);
let basket = getBasket([product1, product2, product3, product4])


console.log(basket.countBasketPrice())