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

document.addEventListener('DOMContentLoaded', () => {
    const openPopup = document.querySelectorAll('.swiper-slide-content-contact-devis-button, .devis-button');
    const closePopup = document.getElementById('closePopup');
    const popup = document.getElementById('popup');
    const contactForm = document.getElementById('contactForm');
  
    // Инициализация EmailJS
    emailjs.init('ksgPraQRrKwGeAiFn'); // Замените YOUR_USER_ID на ваш ID из EmailJS
  
    openPopup.forEach((button) => {
        button.addEventListener("click", function() {
            popup.classList.remove('hidden');
        })
    })
  
    closePopup.addEventListener('click', () => {
      popup.classList.add('hidden');
    });
  
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const form = event.target; // Получаем форму
    
      // Данные формы
      const formData = {
        from_name: form.name.value, // Имя клиента
        destination: form.destination.value, // Назначение
        phone: form.phone.value, // Телефон клиента
        message: form.description.value, // Описание задачи
      };
    
      // Отправка через EmailJS
      emailjs
        .send('service_88pp82e', 'template_blgbjhv', formData)
        .then(() => {
          alert('Votre message a été envoyé avec succès !');
          form.reset(); // Сброс формы
          popup.classList.add('hidden'); // Закрытие popup, если используется
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Une erreur est survenue. Veuillez réessayer plus tard.');
        });
    });  
});