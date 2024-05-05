import createHomePage from './home';
import { createMenuPage } from './menu'
import createAboutPage from './about'
import './main.css'


const contentDiv = document.querySelector('#content');
const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const about = document.querySelector('.about');

contentDiv.appendChild(createHomePage());

home.addEventListener('click', () => {
 contentDiv.innerHTML = "";
 contentDiv.appendChild(createHomePage());
});

menu.addEventListener('click', () => {
 contentDiv.innerHTML = "";
 contentDiv.appendChild(createMenuPage());
});

about.addEventListener('click', () => {
 contentDiv.innerHTML = "";
 contentDiv.appendChild(createAboutPage())
})