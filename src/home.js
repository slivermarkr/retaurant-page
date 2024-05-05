export default function createHomePage() {
const homeDiv = document.createElement('div');
homeDiv.classList.add('home-div');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const para1 = document.createElement('p')
const para2 = document.createElement('p')
const para3 = document.createElement('p')
const para4 = document.createElement('p')
h1.textContent = "Savory Haven";
h2.textContent = "Savor the Moment: Where Culinary Delights Meet Warm Hospitality";
para1.textContent = "Welcome to Savory Haven, where every meal is a celebration of flavor and every guest is cherished like family. Nestled in the heart of Metro Manila, our restaurant offers a haven for food lovers seeking an unforgettable dining experience.";
para2.textContent = "At Savory Haven, we believe that great food is more than just sustenance—it's an art form crafted with passion and precision. Our talented chefs source the finest ingredients to create dishes that delight the senses and ignite the palate. From savory starters to decadent desserts, each bite tells a story of culinary excellence and innovation.";
para3.textContent = "But it's not just about the food. Our warm and welcoming ambiance invites you to relax and indulge in the moment. Whether you're sharing a romantic dinner for two or hosting a lively gathering with friends, our attentive staff is dedicated to ensuring your every need is met with a smile.";
para4.textContent = "Join us at Savory Haven and discover why we're more than just a restaurant—we're a culinary sanctuary where memories are made and flavors linger long after the last bite. Experience the magic for yourself and savor the moment with us.";

homeDiv.appendChild(para1);
homeDiv.appendChild(para2);
homeDiv.appendChild(para3);
homeDiv.appendChild(para4);

return homeDiv
}