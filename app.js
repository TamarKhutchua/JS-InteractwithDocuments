// const list = document.getElementById("list");
// list.innerHTML = "<li>Linked From: " + document.referrer;
// list.innerHTML += "<li>Title: " + document.title;
// list.innerHTML += "<li>URL: " + document.URL;
// list.innerHTML += "<li>Domain: " + document.domain;
// list.innerHTML += "<li>Last Modified: " + document.lastModified;

const list = document.getElementById("list");
list.innerHTML = "<li>No. Forms: " + document.forms.length;
list.innerHTML += "<li>No. Links: " + document.links.length;
list.innerHTML += "<li>No. Images: " + document.images.length;
list.innerHTML += "<li>No. Style Sheets: " + document.styleSheets.length;
list.innerHTML += "<li>No. Scripts: " + document.scripts.length;
list.innerHTML += "<li>First Image URL:" + document.images[0].src;
list.innerHTML +=
  "<li>First Form Element Value: " + document.forms[0].elements[0].value;

const info = document.getElementById("info");
const item = document.getElementById("country");
const lists = document.getElementsByTagName("ol");
const fruits = document.getElementsByClassName("fruit");
let i = 0;
info.innerHTML = item + " Id: " + item.innerText + "<br>";
info.innerHTML += "<br>" + lists + " Tags:<br>";
for (i = 0; i < lists.length; i++) {
  info.innerHTML += i + 1 + " of " + lists.length;
  info.innerHTML += " : " + lists[i].innerText + "<br>";
}
info.innerHTML += "<br>" + fruits + " Class:<br>";
for (i = 0; i < fruits.length; i++) {
  info.innerHTML += i + 1 + " of " + fruits.length;
  info.innerHTML += " : " + fruits[i].innerText + "<br>";
}

const itemFour = document.createElement("li");
const itemFive = document.createElement("li");
const heading = document.getElementById("heading");
itemFour.innerText = "London, England";
itemFive.innerText = "Cape Town, South Africa";
document.getElementById("listi").appendChild(itemFour);
document.getElementById("listi").appendChild(itemFive);
heading.setAttribute("style", "color:Red");
heading.innerText = "Best Five Cities";
