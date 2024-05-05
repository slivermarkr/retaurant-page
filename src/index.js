import { createMenuPage } from './menu'
console.log("I'm from index.js");

const contentDiv = document.querySelector('#content');
contentDiv.appendChild(
 createMenuPage())