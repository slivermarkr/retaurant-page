import egg from './imgs/egg.jpeg';
import karage from './imgs/karage.jpeg';
import eggroll from './imgs/eggroll.jpeg';
import beyond from './imgs/beyond.jpeg';
export function createMenuPage() {
 const div = document.createElement('div');
 div.classList.add('menu-div');

 const img1 = new Image();
 const img2 = new Image();
 const img3 = new Image();
 const img4 = new Image();
 img1.src = egg;
 img2.src = karage;
 img3.src = eggroll;
 img4.src = beyond;
 
 div.appendChild(img1);
 div.appendChild(img2);
 div.appendChild(img3);
 div.appendChild(img4);
 console.log("this is from menu.js");
 return div
}