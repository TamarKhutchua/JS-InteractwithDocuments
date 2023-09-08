// const list = document.getElementById("list");
// list.innerHTML = "<li>Linked From: " + document.referrer;
// list.innerHTML += "<li>Title: " + document.title;
// list.innerHTML += "<li>URL: " + document.URL;
// list.innerHTML += "<li>Domain: " + document.domain;
// list.innerHTML += "<li>Last Modified: " + document.lastModified;

// const list = document.getElementById("list");
// list.innerHTML = "<li>No. Forms: " + document.forms.length;
// list.innerHTML += "<li>No. Links: " + document.links.length;
// list.innerHTML += "<li>No. Images: " + document.images.length;
// list.innerHTML += "<li>No. Style Sheets: " + document.styleSheets.length;
// list.innerHTML += "<li>No. Scripts: " + document.scripts.length;
// list.innerHTML += "<li>First Image URL:" + document.images[0].src;
// list.innerHTML +=
//   "<li>First Form Element Value: " + document.forms[0].elements[0].value;

// const info = document.getElementById("info");
// const item = document.getElementById("country");
// const lists = document.getElementsByTagName("ol");
// const fruits = document.getElementsByClassName("fruit");
// let i = 0;
// info.innerHTML = item + " Id: " + item.innerText + "<br>";
// info.innerHTML += "<br>" + lists + " Tags:<br>";
// for (i = 0; i < lists.length; i++) {
//   info.innerHTML += i + 1 + " of " + lists.length;
//   info.innerHTML += " : " + lists[i].innerText + "<br>";
// }
// info.innerHTML += "<br>" + fruits + " Class:<br>";
// for (i = 0; i < fruits.length; i++) {
//   info.innerHTML += i + 1 + " of " + fruits.length;
//   info.innerHTML += " : " + fruits[i].innerText + "<br>";
// }

// const itemFour = document.createElement("li");
// const itemFive = document.createElement("li");
// const heading = document.getElementById("heading");
// itemFour.innerText = "London, England";
// itemFive.innerText = "Cape Town, South Africa";
// document.getElementById("listi").appendChild(itemFour);
// document.getElementById("listi").appendChild(itemFive);
// heading.setAttribute("style", "color:Red");
// heading.innerText = "Best Five Cities";

function setCookie(key, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 86400000);
  document.cookie =
    key + "=" + encodeURI(value) + ";expires=" + d.toUTCString() + ";";
}
function getCookie(key) {
  if (document.cookie) {
    const pairs = decodeURI(document.cookie).split(";");
    let i, name, value;
    for (i = 0; i < pairs.length; i++) {
      name = pairs[i].split("=")[0].trim();
      if (name === key) {
        value = pairs[i].split("=")[1];
      }
    }
    return value;
  }
}
setCookie("User", "Mike McGrath,12345", 7);
const list = document.getElementById("lista");
let i,
  value = getCookie("User");
if (value.indexOf(",")) {
  value = value.split(",");
}
for (i = 0; i < value.length; i++) {
  list.innerHTML += "<li>" + value[i];
}
addEventListener("load", welcome);
function welcome() {
  const info = document.getElementById("infos");
  if (getCookie("Name")) {
    info.innerHTML = "Welcome Back, " + getCookie("Name");
  } else {
    let name = prompt("Please Enter Your Name", "User");
    setCookie("Name", name, 7);
    info.innerHTML = "Welcome, " + name;
  }
}

// (function () {
//   const box = document.getElementById("box");
//   const btn = document.getElementById("btn");
//   box.addEventListener("mouseover", function (event) {
//     reactTo(event, "Red");
//   });
//   box.addEventListener("mouseout", function (event) {
//     reactTo(event, "Purple");
//   });
//   box.addEventListener("mousedown", function (event) {
//     reactTo(event, "Green");
//   });
//   box.addEventListener("mouseup", function (event) {
//     reactTo(event, "Blue");
//   });
//   btn.addEventListener("click", function (event) {
//     reactTo(event, "Orange");
//   });
// })();
// function reactTo(event, color) {
//   document.getElementById("box").style.background = color;
//   document.getElementById("infoa").innerText = event.type;
// }

(function () {
  document.addEventListener("keydown", function (event) {
    reactTo(event);
  });
  document.addEventListener("keyup", function (event) {
    reactTo(event);
  });
  document.addEventListener("mousemove", function (event) {
    reactTo(event);
  });
})();
function reactTo(event) {
  const info = document.getElementById("infoo");
  if (event.type === "mousemove") {
    info.innerHTML = "Mouse pointer is at X:" + event.x + " Y:" + event.y;
  }
  if (event.type === "keydown") {
    info.innerHTML += "<hr>" + event.type;
    info.innerHTML += ": " + event.keyCode;
  }
  if (event.type === "keyup") {
    info.innerHTML +=
      "<br>" + event.type + ": " + String.fromCharCode(event.keyCode) + "<hr>";
  }
}
