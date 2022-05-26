import 'normalize.css'
import './styles/main.scss';
import './styles/media.scss';

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'hystmodal/dist/hystmodal.min.js'

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

/*** Rating ***/

let rating_fields = document.querySelectorAll('.stars-rating-field');

if (rating_fields) {

	rating_fields.forEach(function (rating_field) {

		let rating_stars = rating_field.querySelectorAll('.stars-rating__star');

		if (rating_stars) {

			rating_stars.forEach(function (rating_star) {

				rating_star.addEventListener('click', function (e) {

					let selected_index = this.getAttribute('data-star');

					let rating_field_input = rating_field.querySelector('#commentform input[name="comment_rating"]');

					if (rating_field_input) {
						rating_field_input.value = selected_index;
					}

					rating_stars.forEach(function (rating_star, rating_star_index) {

						let rating_star_icon = rating_star.querySelector('use');

						if (rating_star_index < selected_index) {
							rating_star.classList.add('stars-rating__star--full');
							rating_star.classList.remove('stars-rating__star--empty');
							rating_star_icon.setAttribute('xlink:href', '#star-full');
						} else {
							rating_star.classList.add('stars-rating__star--empty');
							rating_star.classList.remove('stars-rating__star--full');
							rating_star_icon.setAttribute('xlink:href', '#star');
						}
					})

					e.preventDefault();
				});
			});
		}
	});
}

document.addEventListener("click", function (event) {

	if (!event.target.closest('.star.star-empty')) return;
	event.preventDefault();
	let starEl = event.target.closest('.star.star-empty');
	let selectedIndex = starEl.getAttribute('data-star');

	document.querySelector('#commentform input[name="comment_rating"]').value = selectedIndex;

	var form = event.target.closest('.star-rating');
	var stars = Array.from(form.querySelectorAll('.star'));
	stars.forEach(function (star, index) {
		if (index < selectedIndex) {
			star.classList.add('rating-hover');
		} else {
			star.classList.remove('rating-hover');
		}
	});

});

/*** END Rating ***/
const success = new HystModal({
    linkAttributeName: "data-hystmodal",
});
let reviewButton = document.querySelector('.apf__submit');

reviewButton.addEventListener('click', (e)=>{
    e.preventDefault;
    const inputs = document.querySelectorAll('input, textarea');

    inputs.forEach(input => {
      input.value = '';
    });

})
    
let commentButton = document.querySelector('.comments__button');

commentButton.addEventListener('click', showComments);

function showComments() {

   let hiddenComments = document.querySelectorAll('.comment-list li:nth-child(n+5)');
   hiddenComments.forEach(comment => comment.style.display='block');
   commentButton.style.display='none';

   
}
  
  
