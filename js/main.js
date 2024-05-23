import { Carousel, initMDB } from "mdb-ui-kit";

initMDB({ Carousel });
const element = document.querySelector('.carousel');
const instance = new Carousel(element);

const myCarousel = document.querySelector('#myCarousel');
const carousel = new Carousel(myCarousel);
carousel.pause();

