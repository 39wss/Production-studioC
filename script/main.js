'use strict';

// Navbar scroll opacity
const navbar = document.querySelector('#nav');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('nav--dark');
  } else {
    navbar.classList.remove('nav--dark');
  }
});

// Navbar list movseover
const navbarLeftShop = document.querySelector('.shop');
const navbarLeftShopList = document.querySelector('.clothes');

navbarLeftShop.addEventListener('mouseover', () => {
  navbarLeftShopList.classList.add('open');
});
navbarLeftShopList.addEventListener('mouseout', () => {
  navbarLeftShopList.classList.remove('open');
});

// Navbar Mobile toggle btn
const navbarToggleBtn = document.querySelector('.nav__toggle-btn');
const navbarMenu = document.querySelector('.nav__menu');

navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
  navbarToggleBtn.classList.toggle('click');
});

// Home
// bx Slider
$(document).ready(function(){
	var main = $('.bxslider').bxSlider({
		mode: 'fade',
		auto: true,		//자동으로 슬라이드
		controls : false,	//좌우 화살표	
		//autoControls: true,	//stop,play
		pager:true,	//페이징
		pause: 3000,
		autoDelay: 0,	
		speed: 500,
		stopAutoOnclick:true
	});
});