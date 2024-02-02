document.addEventListener('DOMContentLoaded', function () {
    const productId = getParameterByName('id');
    const productsData = [
        { id: 1, name: "Producto 1", description: "Descripción del producto 1", price: 10.99 },
        { id: 2, name: "Producto 2", description: "Descripción del producto 2", price: 15.99 },
        // Agrega más objetos para los demás productos
    ];

    const productDetails = productsData.find(product => product.id === parseInt(productId));

    if (productDetails) {
        const productTitleElement = document.querySelector('.product-title');
        const productDescriptionElement = document.querySelector('.product-description');
        const productPriceElement = document.querySelector('.product-price');

        productTitleElement.textContent = productDetails.name;
        productDescriptionElement.textContent = productDetails.description;
        productPriceElement.textContent = '$' + productDetails.price.toFixed(2);
    }
});

function getParameterByName(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
