export default function createAboutPage() {
 const aboutDiv = document.createElement('div');
 const para1 = document.createElement("p");
 const para2 = document.createElement("p");
 const para3 = document.createElement("p");
 const para4 = document.createElement("p");
 para1.textContent = "178 Diwata St. Metro Manila";
 para2.textContent = "122-23-71";
 para3.textContent = "@savory@email.com"
 para4.textContent = "Hello World"
 aboutDiv.appendChild(para1);
 aboutDiv.appendChild(para2);
 aboutDiv.appendChild(para3);
 aboutDiv.appendChild(para4);
 return aboutDiv
}