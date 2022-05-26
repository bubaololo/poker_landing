import 'normalize.css'
import './styles/main.scss';
import './styles/media.scss';

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';

// BURGER________________________________

document.querySelector(".menu__icon").addEventListener("click", (event) => {
    document
      .querySelectorAll(".line, .header__panel")
      .forEach((element) => element.classList.toggle("active"));
    document.querySelector("html").classList.toggle("lock");
  });

  // PROGRESS BAR________________________________
  var ProgressBar = require('progressbar.js')
  function circle(node, rating) {
    var circle = new ProgressBar.Circle(node, {
      color: '#FFF',
      trailColor: "transparent", 
      strokeWidth: 8,
      trailWidth: 8,
      duration: 1440,
      text: {
        value: '0%',
        style: {
          color: 'rgb(157, 255, 0)' 
        }
      },
      step: function(state, bar) {
        var num = (bar.value() * 5).toFixed(1)
        // console.log(num, 'bar.value()')
        bar.setText(num);
      }
    });
    circle.animate(rating);
  }

  circle('#progressbar', 0.86);
  circle('#progressbar2', 0.9);
  circle('#progressbar3', 0.95);
  circle('#progressbar4', 1);

//   Swiper.use([Navigation]);
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView:1.2,
    centeredSlides: true,
    spaceBetween: 20,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	loop: true,
          navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });

//   var swiper = new Swiper(".swiper", {
//     slidesPerView: 'auto',
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
  
  
