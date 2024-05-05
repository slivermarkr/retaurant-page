import egg from './imgs/egg.jpeg';

export function createMenuPage() {
 const div = document.createElement('div');
 const img = new Image();
 img.src = egg;
 div.appendChild(img);
 console.log("this is from menu.js");
 return div
}