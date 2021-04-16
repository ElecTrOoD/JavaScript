const catalogItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена</b>: ${good.price}</div>
                    <button class="buy-btn" data-id_product="${good.id_product}">Купить</button>
                </div>`;
    }
}


const catalog = {
    catalogBlock: null,
    cart,
    catalogItem,
    goods: [
        {
            id_product: 12,
            product_name: 'Яблоки',
            price: 50,
        },
        {
            id_product: 17,
            product_name: 'Груши',
            price: 65,
        },
        {
            id_product: 23,
            product_name: 'Персики',
            price: 85,
        },
        {
            id_product: 87,
            product_name: 'Бананы',
            price: 55,
        }
    ],
    init() {
        this.catalogBlock = document.querySelector('.catalog');
        this.catalogBlock.addEventListener('click', event => this.addGoodToCart(event));
        this.renderCatalogList();
    },
    renderCatalogList() {
        this.catalogBlock.innerHTML = '';
        this.goods.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.catalogItem.render(item));
        });
    },
    addGoodToCart(event) {
        if (!event.target.classList.contains('buy-btn')) return;
        const idProduct = +event.target.dataset.id_product;
        const addProduct = this.goods.find((good) => good.id_product === idProduct);
        this.cart.addProduct(addProduct);
    },
};

catalog.init()