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
