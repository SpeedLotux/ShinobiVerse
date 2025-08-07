// Wait until DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.header .flex .search-form');
  const searchToggler = document.getElementById('search-toggler');
  const menuBtn = document.getElementById('menu-btn'); // if needed for menu toggle
  const header = document.querySelector('.header');

  const closeBtn = document.querySelector('#close-btn');
  const sideBar = document.querySelector('.side-bar');
  const navbar = document.querySelector('.side-bar .navbar');
  const list_items = document.querySelectorAll('.filter form .list-container .list .items .item');

  if (!searchForm || !searchToggler) return;

 searchToggler.onclick = () => {
  searchForm.classList.toggle('active');
  searchToggler.classList.toggle('active'); // NEW
};

window.onscroll = () => {
  searchForm.classList.remove('active');
  searchToggler.classList.remove('active'); // NEW

  if(window.scrollY > 0) {
  header.classList.add('active');
}
else {
  header.classList.remove('active');
}};

menuBtn.onclick = () => {
  sideBar.classList.add('active');
}

closeBtn.onclick = () => {
  sideBar.classList.remove('active');
}

var swiper = new Swiper('.hero-slider', {
  loop: true ,
  grabCursor: true,
    autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true ,
  }
});

var swiper = new Swiper('.trending-slider', {
  slidesPerView:"auto",
  spaceBetween:20,
  loop: true ,
  grabCursor: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  }
});

list_items.forEach(items => {
  items.onclick = () => {
    list = items.parentElement.parentElement;
    output = list.querySelector('.output');
    output.value = items.innerHTML;
  }
})

});
