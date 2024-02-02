
///Ajustes de Shop

const navbarToggler = document.querySelector('.navbar-toggler');
const dropdownMenu = document.querySelector('.collapse.navbar-collapse');
const navBarPrincipal = document.querySelector('.navbar.navbar-expand-sm.justify-content-center');
const buscarHome = document.querySelector('.buscador-home');
navbarToggler.addEventListener('click', function () {
    navbarToggler.classList.toggle('show');
    dropdownMenu.classList.toggle('show');
    navBarPrincipal.classList.toggle('show');
    buscarHome.classList.toggle('show');
});

// Obtener el elemento con la clase "redirect-buy"
const redirectBuyLink = document.getElementById('redirect-buy-shop');
// Agregar un evento de clic al elemento
redirectBuyLink.addEventListener('click', () => {
    window.location.href = 'shop.html';
});

document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('searchInput');
    var productItems = document.getElementsByClassName('product');

    // Obtener el valor del parámetro de colección de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const collectionParam = urlParams.get('collection');

    // Colocar el nombre de la colección en el campo de búsqueda
    searchInput.value = collectionParam;

    // Filtrar los productos por la colección y mostrarlos
    function filterProducts() {
        var searchTerm = searchInput.value.toLowerCase().trim();

        for (var i = 0; i < productItems.length; i++) {
            var item = productItems[i];
            var titleElement = item.querySelector('.product-title');
            var title = titleElement.textContent.toLowerCase();

            if (title.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    }

    // Llamar a la función de filtrado cuando se escriba en el campo de búsqueda
    searchInput.addEventListener('input', filterProducts);

    // Enfocar el campo de búsqueda al cargar la página
    searchInput.focus();

    // Filtrar los productos al cargar la página
    filterProducts();
});

document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('searchInput');
    var productItems = document.getElementsByClassName('product');

    searchInput.addEventListener('input', function () {
        var searchTerm = searchInput.value.toLowerCase();

        for (var i = 0; i < productItems.length; i++) {
            var item = productItems[i];
            var titleElement = item.querySelector('.product-title');
            var title = titleElement.textContent.toLowerCase();

            if (title.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
});


// Obtener los checkboxes de tipo de producto
const tipoProductoCheckboxes = document.querySelectorAll('.form-check-input');

// Función para filtrar los productos según el tipo de producto seleccionado
function filtrarProductos() {
    const tipoProductoSeleccionado = Array.from(tipoProductoCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.nextElementSibling.textContent.trim());

    // Verificar si no se ha seleccionado ningún checkbox
    const noSeSeleccionoNingunCheckbox = tipoProductoSeleccionado.length === 0;

    // Mostrar los productos correspondientes al tipo de producto seleccionado y ocultar los demás
    const productos = document.querySelectorAll('.product');
    productos.forEach((producto, index) => {
        const tipoProducto = producto.querySelector('#tipo_producto').textContent.trim();
        const shouldDisplay = noSeSeleccionoNingunCheckbox || tipoProductoSeleccionado.includes(tipoProducto);

        // Mantener el orden original
        producto.style.order = index + 1;

        if (shouldDisplay) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}


// Asignar eventos de cambio a los checkboxes de tipo de producto
tipoProductoCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filtrarProductos);
});


// Obtener los botones de filtro
const filterButtons = document.querySelectorAll('.filter-button');

// Obtener los productos

// Función de comparación para ordenar los elementos por precio
function compareByPrice(a, b) {
    const priceA = parseInt(a.querySelector('#precio_producto').textContent);
    const priceB = parseInt(b.querySelector('#precio_producto').textContent);
    return priceB - priceA;
}

// Función de comparación para ordenar los elementos alfabéticamente
function compareByTitle(a, b) {
    const titleA = a.querySelector('.product-title').textContent;
    const titleB = b.querySelector('.product-title').textContent;
    return titleA.localeCompare(titleB);
}

// Función para limpiar los productos
function clearProducts() {
    products.forEach(product => {
        product.style.display = 'block';
    });
}

// Función para filtrar por precio de mayor a menor
function filterByPriceDescending() {
    const sortedProducts = Array.from(products).sort(compareByPrice);
    clearProducts();
    sortedProducts.forEach(product => {
        document.querySelector('.row').appendChild(product);
    });
}

// Función para filtrar por precio de menor a mayor
function filterByPriceAscending() {
    const sortedProducts = Array.from(products).sort((a, b) => compareByPrice(b, a));
    clearProducts();
    sortedProducts.forEach(product => {
        document.querySelector('.row').appendChild(product);
    });
}

// Función para filtrar alfabéticamente de A a Z
function filterByTitleAscending() {
    const sortedProducts = Array.from(products).sort(compareByTitle);
    clearProducts();
    sortedProducts.forEach(product => {
        document.querySelector('.row').appendChild(product);
    });
}

// Función para filtrar alfabéticamente de Z a A
function filterByTitleDescending() {
    const sortedProducts = Array.from(products).sort((a, b) => compareByTitle(b, a));
    clearProducts();
    sortedProducts.forEach(product => {
        document.querySelector('.row').appendChild(product);
    });
}

// Asignar eventos de clic a los botones de filtro
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterType = button.textContent.trim();
        clearProducts();
        switch (filterType) {
            case 'Precio | Mayor - Menor':
                filterByPriceDescending();
                break;
            case 'Precio | Menor - Mayor':
                filterByPriceAscending();
                break;
            case 'Alfabético | A - Z':
                filterByTitleAscending();
                break;
            case 'Alfabético | Z - A':
                filterByTitleDescending();
                break;
            default:
                clearProducts();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los elementos con la clase "product"
    var products = document.getElementsByClassName("product");

    // Recorrer cada elemento y obtener el tipo de producto
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var titleElement = product.querySelector(".product-title");
        var tipoProducto = product.querySelector(".tipo_producto");

        // Obtener el texto del título del producto
        var title = titleElement.textContent;

        // Obtener las dos primeras palabras del título
        var words = title.split(" ").slice(0, 2).join(" ");

        // Asignar las dos primeras palabras al elemento "tipo_producto"
        if (tipoProducto) {
            tipoProducto.textContent = words;
        }
    }
});



document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos todos los elementos con la clase "product"
    const products = document.getElementsByClassName("product");

    // Recorremos todos los elementos y actualizamos el precio según el tipo de producto
    Array.from(products).forEach(function (product) {
        const precioProducto = product.querySelector(".precio_producto");
        const tipoProducto = product.querySelector(".tipo_producto");
        const producto = product.querySelector(".product-title").textContent.trim();

        switch (producto) {
            case "Sticker x4":
                precioProducto.textContent = "COP$ 4.000";
                break;
            case "Notepad L":
                precioProducto.textContent = "COP$ 10.000";
                break;
            case "Notepad Mini":
                precioProducto.textContent = "COP$ 5.000";
                break;
            case "Sticker L":
                precioProducto.textContent = "COP$ 4.000";
                break;
            case "Washi Sticker":
                precioProducto.textContent = "COP$ 4.000";
                break;
            case "Sticker 3D":
                precioProducto.textContent = "COP$ 4.000";
                break;
            case "Bitacora Bond":
                precioProducto.textContent = "COP$ 12.000";
                break;
            case "Bitacora Opalina":
                precioProducto.textContent = "COP$ 12.000";
                break;
            case "Agenda M":
                precioProducto.textContent = "COP$ 15.000";
                break;
            case "Agenda Stickeres":
                precioProducto.textContent = "COP$ 15.000";
                break;
            case "Print Grande":
                precioProducto.textContent = "COP$ 6.000";
                break;
            case "Print Mini":
                precioProducto.textContent = "COP$ 4.000";
                break;
            case "Planeador M":
                precioProducto.textContent = "COP$ 4.000";
                break;
            case "Separador M":
                precioProducto.textContent = "COP$ 4.000";
                break;
            default:
                precioProducto.textContent = "COP$";
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.product');
    const productsPerPage = 16; // Cantidad de productos por página
    const paginationList = document.querySelector('.pagination-list');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');

    let currentPage = 1;
    let pageCount = Math.ceil(products.length / productsPerPage);
    let paginationButtons = [];

    function showPage(pageNumber) {
        const startIndex = (pageNumber - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;

        products.forEach(function (product, index) {
            if (index >= startIndex && index < endIndex) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    function createPaginationButtons() {
        paginationList.innerHTML = '';

        if (pageCount <= 1) {
            return;
        }

        for (let i = 1; i <= pageCount; i++) {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = i;

            link.addEventListener('click', function () {
                currentPage = i;
                showPage(currentPage);
                updatePaginationButtons();
            });

            li.appendChild(link);
            paginationList.appendChild(li);
            paginationButtons.push(link);
        }

        paginationButtons[currentPage - 1].classList.add('active');
    }

    function updatePaginationButtons() {
        paginationButtons.forEach(function (button) {
            button.classList.remove('active');
        });

        paginationButtons[currentPage - 1].classList.add('active');
    }

    function navigateToPrevPage() {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
            updatePaginationButtons();
        }
    }

    function navigateToNextPage() {
        if (currentPage < pageCount) {
            currentPage++;
            showPage(currentPage);
            updatePaginationButtons();
        }
    }

    function init() {
        showPage(currentPage);
        createPaginationButtons();

        prevButton.addEventListener('click', navigateToPrevPage);
        nextButton.addEventListener('click', navigateToNextPage);
    }

    init();

    window.addEventListener('resize', function () {
        currentPage = 1;
        pageCount = Math.ceil(products.length / productsPerPage);
        paginationButtons = [];
        showPage(currentPage);
        createPaginationButtons();
    });
});
