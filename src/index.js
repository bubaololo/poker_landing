import 'normalize.css'
import './styles/main.scss';
import './styles/media.scss';

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
      color: '#13f6fe',
      trailColor: "transparent", 
      strokeWidth: 8,
      trailWidth: 8,
      duration: 1440,
      text: {
        value: '0%',
        style: {
          color: '#13f6fe' 
        }
      },
      step: function(state, bar) {
        var num = (bar.value() * 10).toFixed(1)+"/10"
        // console.log(num, 'bar.value()')
        bar.setText(num);
      }
    });
    circle.animate(rating);
  }

  circle('#progressbar', 0.86);
  circle('#progressbar2', 0.9);
  circle('#progressbar3', 0.95);

