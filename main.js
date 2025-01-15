const openModal = document.querySelectorAll(".galery-row-image-box img");
const closeModal = document.querySelector(".close-cursor")
const modal = document.getElementById("myModal");
const buttonPrev = document.querySelector(".prev");
const buttonNext = document.querySelector(".next");
const slides = document.querySelectorAll(".mySlides");
const hamburger = document.querySelector(".hamburger");
const navbarItems = document.querySelector(".navbar-items");
let slideIndex = 0;



function showSlide (index) {
    slides.forEach((slide) => {
        slide.classList.remove("active")
        slides[index].classList.add("active")
        slideIndex = index;
    })
}

openModal.forEach((img, index) => {
    img.addEventListener("click", function(){
        modal.style.display = "block"
        showSlide(index)
    })
})

closeModal.addEventListener("click", function(){
    modal.style.display = "none"
})

buttonNext.addEventListener("click", function(){
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex)
})

buttonPrev.addEventListener("click", function(){
    slideIndex = (slideIndex - 1 + slides.length) % slides.length
    showSlide(slideIndex)
})

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


function openNavbar () {
    hamburger.classList.toggle("active");
    navbarItems.classList.toggle("active");
}

hamburger.addEventListener("click", openNavbar);

document.querySelectorAll(".navbar-items li a").forEach(item => 
    item.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navbarItems.classList.remove("active");
}))