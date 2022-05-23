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
  
