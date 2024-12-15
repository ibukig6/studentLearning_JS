// 商店物品
const products = [
    {
        img: "images/product_images/product_image1.jpg",
        name: "海底撈【自煮火鍋（麻辣嫩牛/番茄牛肉）】",
        discount: 6.3,
        originalPrice: 300,
        discountPrice: 189
    },
    {
        img: "images/product_images/product_image2.jpg",
        name: "桂格無糖養氣人蔘盒裝19瓶",
        discount: null,
        originalPrice: null,
        discountPrice: 989
    },
    {
        img: "images/product_images/product_image3.jpg",
        name: "平面伯爵茶醫療口罩口罩 台灣製造 雙鋼印 醫療口罩 MIT 成人口罩( 現貨供應)",
        discount: 4.9,
        originalPrice: 100,
        discountPrice: 49
    },
]
let html = "";
for (let i=0; i<products.length; i++) {
    html +=`
        <div class="product-block">
            <a href="product.html">
                <div class="product-image-row">
                    <img class="product-image" src=${products[i].img}>
                    <p class="product-discount">${products[i].discount}折</p>
                </div>
                <div class="product-information">
                    <div class="product-text">
                        <p class="product-name">${products[i].name}</p>
                        <div class="add-success hidden-element">
                            <img class="check-icon" src="images/icons/check.png">
                            <p class="add-success-p">加入購物車</p>
                        </div>
                        <div class="product-price-row">
                            <div class="product-price">
                                <p class="discount-price">$${products[i].discountPrice}</p>
                                <p class="origin-price">$${products[i].originalPrice}</p>
                            </div>
                            <img class="add-to-cart" src="images/icons/cart.png">
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `
};

document.querySelector(".product.grid").innerHTML = html;
