const carousel = document.querySelector(".custom-carousel");
const images = document.querySelectorAll(".custom-carousel img");
const buttons = document.querySelectorAll(".custom-button");
let intervalId;
let imageIndex = 0;

// A function that updates the carousel display to show the specified image
const slideImage = () => {
    // Hide all images except the active one
    images.forEach((image) => image.classList.remove("active"));

    // Calculate the updated image index
    imageIndex = imageIndex === images.length - 1 ? 0 : imageIndex + 1;

    // Show the next image
    images[imageIndex].classList.add("active");

    // Update the active button
    updateActiveButton();
};

// Define function to start automatic image slider
const autoSlide = () => {
    // Start the slideshow by calling slideImage() every 2 seconds
    intervalId = setInterval(slideImage, 3000);
};

// Call autoSlide function on page load
autoSlide();

// A function that updates the active button based on the current image index
const updateActiveButton = () => {
    buttons.forEach((button) => button.classList.remove("active"));
    buttons[imageIndex].classList.add("active");
};

// A function that updates the carousel display to show the specified image when a button is clicked
const updateClick = (e) => {
    // Stop the automatic slideshow
    clearInterval(intervalId);

    // Get the index of the clicked button
    const buttonIndex = parseInt(e.target.getAttribute("data-index"));

    // Update the image index and carousel display
    imageIndex = buttonIndex;
    images.forEach((image) => image.classList.remove("active"));
    images[imageIndex].classList.add("active");

    // Update the active button
    updateActiveButton();

    // Restart the automatic slideshow
    intervalId = setInterval(slideImage, 2000);
};

// Add event listeners to the navigation buttons
buttons.forEach((button) => button.addEventListener("click", updateClick));


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

// Función para redireccionar a shop.html con la colección seleccionada como parámetro
function redirectToShop(collection) {
    const encodedCollection = encodeURIComponent(collection);
    const searchUrl = `shop.html?collection=${encodedCollection}#searchInput`;
    window.location.href = searchUrl;
}

// Obtener todos los elementos de colección
const collectionElements = document.querySelectorAll('.col-collection');

// Agregar el evento de clic a cada elemento de colección
collectionElements.forEach((element) => {
    element.addEventListener('click', () => {
        const collectionTitle = element.querySelector('.image-title').textContent;

        // Obtener la segunda palabra del título de la colección
        const collectionName = collectionTitle.split(' ')[1];

        // Redireccionar a shop.html con la colección seleccionada
        redirectToShop(collectionName);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('searchInput');
    var collectionItems = document.getElementsByClassName('col-collection');

    searchInput.addEventListener('input', function () {
        var searchTerm = searchInput.value.toLowerCase();

        for (var i = 0; i < collectionItems.length; i++) {
            var item = collectionItems[i];
            var titleElement = item.querySelector('.image-title');
            var title = titleElement.textContent.toLowerCase();

            if (title.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
});
