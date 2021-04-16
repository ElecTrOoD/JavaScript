const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                </div>`;
    }
}

const cart = {
    cartListBlock: null,
    clearCartButton: null,
    cartItem,
    goods: [
        {
            id_product: 12,
            product_name: 'Яблоки',
            price: 50,
            quantity: 3
        },
        {
            id_product: 17,
            product_name: 'Груши',
            price: 65,
            quantity: 1
        },
        {
            id_product: 23,
            product_name: 'Персики',
            price: 85,
            quantity: 2
        },
        {
            id_product: 87,
            product_name: 'Бананы',
            price: 55,
            quantity: 1
        }
    ],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.clearCartButton = document.querySelector('.cart-btn');
        this.clearCartButton.addEventListener('click', () => this.clearCart());
        this.render();
    },
    render() {
        this.cartListBlock.innerHTML = '';
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций(а) стоимостью ${this.getCartPrice()}`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },
    getCartPrice() {
        return this.goods.reduce((totalPrice, good) => totalPrice + good.price * good.quantity, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
    addProduct(good) {
        const addedGood = this.goods.find(({id_product}) => good.id_product === id_product);
        if (addedGood) {
            addedGood.quantity++;
        } else {
            this.goods.push(Object.assign({quantity: 1}, good));
        }
        this.render();
    },
};

cart.init();