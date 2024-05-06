export default function createAboutPage() {
 const aboutDiv = document.createElement('div');
 const paraBox = document.createElement('div');
 aboutDiv.classList.add('about-div');
 paraBox.classList.add('about-box');
 const para1 = document.createElement("p");
 const para2 = document.createElement("p");
 const para3 = document.createElement("p");
 const para4 = document.createElement("p");
 para1.textContent = "178 Bulbolito St. Metro Manila";
 para2.textContent = "122-23-71";
 para3.textContent = "@savory@email.com"
 para4.textContent = "Hello World"
 paraBox.appendChild(para1);
 paraBox.appendChild(para2);
 paraBox.appendChild(para3);
 paraBox.appendChild(para4);
 aboutDiv.appendChild(paraBox);
 return aboutDiv
}