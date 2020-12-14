'use strcit';

// Navbar mouseover
const navbarLeftShop = document.querySelector('.shop');
const navbarLeftShopList = document.querySelector('.clothes');

navbarLeftShop.addEventListener('mouseover', () => {
  navbarLeftShopList.classList.add('open');
});
navbarLeftShopList.addEventListener('mouseout', () => {
  navbarLeftShopList.classList.remove('open');
});

// Navbar toggle btn mobile
const navbarToggleBtn = document.querySelector('.nav__toggle-btn');
const navbarMenu = document.querySelector('.nav__menu');

navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
  navbarToggleBtn.classList.toggle('click');
});

// Talk tab
$(".tabmenu>li").click(function(){
  var index=$(this).index();
    $(".tabmenu>li").removeClass("on");
  $(this).addClass("on")
  $(".tab").eq(index).show().siblings(".tab").hide();
  });
