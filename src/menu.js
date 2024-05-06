import egg from './imgs/egg.jpeg';
import karage from './imgs/karage.jpeg';
import eggroll from './imgs/eggroll.jpeg';
import beyond from './imgs/beyond.jpeg';
import shrimp from './imgs/leafshrimp.jpeg';
import fish from './imgs/fishsoup.jpeg';
import spicy from './imgs/spicyegg.jpeg';
import egghotdog from './imgs/egghotdog.jpeg';


export function createMenuPage() {
 const div = document.createElement('div');
 div.classList.add('menu-div');
 
 const item1 = createMenuItem(egg,"Fried Egg",3);
 const item2 = createMenuItem(karage,"Tonkatsu",12);
 const item3 = createMenuItem(eggroll,"Egg Roll",6);
 const item4 = createMenuItem(beyond,"Beyond Egg",10);
 const item5 = createMenuItem(shrimp,"Shrimp Rice",6);
 const item6 = createMenuItem(fish,"Fish Soup",6);
 const item7 = createMenuItem(spicy,"Spicy Egg",6);
 const item8 = createMenuItem(egghotdog,"Egg Hotdog", 9);

 div.appendChild(item1);
 div.appendChild(item2);
 div.appendChild(item3);
 div.appendChild(item4);
 div.appendChild(item5);
 div.appendChild(item6);
 div.appendChild(item7);
 div.appendChild(item8);
 console.log("this is from menu.js");
 return div
}

function createMenuItem(image,name,price) {
 const menuBox = document.createElement('button');
 menuBox.classList.add('menuItem-box');
 const textBox = document.createElement('div');
 const nameBox = document.createElement('p')
 const priceBox = document.createElement('p')
 const item = new Image();
 item.src = image;
 nameBox.textContent = name;
 priceBox.textContent = `Price: $${price}.00`;
 textBox.appendChild(nameBox);
 textBox.appendChild(priceBox);
 menuBox.appendChild(textBox)
 menuBox.appendChild(item)
 return menuBox;
}