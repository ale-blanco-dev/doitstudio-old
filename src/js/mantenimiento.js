const carousel = document.querySelector(".custom-carousel");
const images = document.querySelectorAll(".custom-carousel img");
const buttons = document.querySelectorAll(".custom-button");
let intervalId;
let imageIndex = 0;
const slideImage = () => {
    images.forEach((image) => image.classList.remove("active"));
    imageIndex = imageIndex === images.length - 1 ? 0 : imageIndex + 1;
    images[imageIndex].classList.add("active");
    updateActiveButton();
};

const autoSlide = () => {
    intervalId = setInterval(slideImage, 3000);
};
autoSlide();
const updateActiveButton = () => {
    buttons.forEach((button) => button.classList.remove("active"));
    buttons[imageIndex].classList.add("active");
};
const updateClick = (e) => {
    clearInterval(intervalId);
    const buttonIndex = parseInt(e.target.getAttribute("data-index"));
    imageIndex = buttonIndex;
    images.forEach((image) => image.classList.remove("active"));
    images[imageIndex].classList.add("active");
    updateActiveButton();
    intervalId = setInterval(slideImage, 2000);
};
buttons.forEach((button) => button.addEventListener("click", updateClick));

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
