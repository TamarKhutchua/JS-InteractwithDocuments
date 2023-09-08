const list = document.getElementById("list");
list.innerHTML = "<li>Linked From: " + document.referrer;
list.innerHTML += "<li>Title: " + document.title;
list.innerHTML += "<li>URL: " + document.URL;
list.innerHTML += "<li>Domain: " + document.domain;
list.innerHTML += "<li>Last Modified: " + document.lastModified;
