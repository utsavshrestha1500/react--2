
/* -----------------------------------------Dropdown ----------------------------*/

// Get all dropdown menus
const dropdowns = document.querySelectorAll('.dropdown');

// Add click event listener to all parent menu items
document.querySelectorAll('.department').forEach((item) => {
  item.addEventListener('click', () => {
    // Hide all dropdown menus
    dropdowns.forEach((dropdown) => {
      dropdown.style.display = 'none';
    });
    // Show the dropdown menu of the clicked parent menu item
    item.querySelector('.dropdown').style.display = 'block';
  });
});

// Hide all dropdown menus when the user clicks anywhere else
document.addEventListener('click', (event) => {
  if (!event.target.closest('.department')) {
    dropdowns.forEach((dropdown) => {
      dropdown.style.display = 'none';
    });
  }
});





/* -----------------------------------Autoplay ---------------------------------------------------*/

var swiper2 = new Swiper(".swiper_slide", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*---------------------- Most Popular Sider -----------------------*/

var swiper3 = new Swiper(".foodlist", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

/*------------------------ Weeks Special Slide ---------------------*/

var swiper3 = new Swiper(".foodlist2", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});






