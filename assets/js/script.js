

var sections = document.getElementsByTagName('section');
var highlights = document.getElementsByClassName('highlight');

for(var i = 0; i < sections.length; i++) {
  document.getElementById("toc").insertAdjacentHTML('beforeend', '<li><a href="#'+sections[i].id+'" id="topLink">'+sections[i].firstChild.innerHTML+'</a></li>')
}

document.getElementById("toc").insertAdjacentHTML('beforeend', '<li><a href="#top" id="topLink">▲ Top</a></li>')

var r = document.querySelector(':root');
var darklink = document.getElementById("darklink");
darklink.onclick = toggleDarkMode;

function toggleDarkMode(){
  if (darklink.innerHTML === "🌞︎") {
    setDark();
  } else {
    praiseTheSun();
  } 
};

function setDark() {
  darklink.innerHTML = "🌛︎";
  r.style.setProperty("--code-back", " #0D0D0D");
  r.style.setProperty("--white", "#222323");
  r.style.setProperty("--very-light-gray", "#ccc0bd");
  r.style.setProperty("--off-white", "#2c2d2e");
  r.style.setProperty("--light-gray", "#3A3B3C");
  r.style.setProperty("--dark-gray", "#191a1a");
  r.style.setProperty("--black", "#ccc0bd");
  r.style.setProperty("--warm-gray", "#191a1a"); 
  if (typeof(Storage) !== "undefined") {
    sessionStorage.setItem("darkmode", "dark");
  }
  for(var i = 0; i < highlights.length; i++) {
    highlights[i].classList.remove("light");
    highlights[i].classList.add("dark");
  }
}

function praiseTheSun() {
  darklink.innerHTML = "🌞︎";
  r.style.setProperty("--code-back", " #f2f2f2");
  r.style.setProperty("--white", " #FFFFFF");
  r.style.setProperty("--very-light-gray", "#f2f2f2");
  r.style.setProperty("--off-white", "#F6F6F0");
  r.style.setProperty("--warm-gray", "#C0C0BB");
  r.style.setProperty("--light-gray", "#3A3B3C");
  r.style.setProperty("--dark-gray", "#222323");
  r.style.setProperty("--black", "#000000"); 
  if (typeof(Storage) !== "undefined") {
    sessionStorage.setItem("darkmode", "lidght");
  }
  for(var i = 0; i < highlights.length; i++) {
    highlights[i].classList.remove("dark");
    highlights[i].classList.add("light");
  }
}

var expandAll = document.getElementsByClassName("expandall")[0];
expandAll.addEventListener("click", function(){
  this.classList.toggle("collapsed");
  var coll = document.getElementsByClassName("collapsible");
  var i;
  if (this.classList.contains("collapsed")) {
    this.innerText = "Expand All";
    for (i = 0; i < coll.length; i++) {
      coll[i].classList.remove("active");
      var content = coll[i].nextElementSibling;
      content.style.maxHeight = null;      
    }
  } else {
    this.innerText = "Collapse All";
    for (i = 0; i < coll.length; i++) {
      coll[i].classList.add("active");
      var content = coll[i].nextElementSibling;
      content.style.maxHeight = content.scrollHeight + "px";      
    }
  }
});

// This bit for the collapsibles, from W3 Schools
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });  
}

let mainNavLinks = document.querySelectorAll("#toc-nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    if (document.querySelector(link.hash)) {
        let section = document.querySelector(link.hash);

        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add("current");
        } else {
          link.classList.remove("current");
        }
    }
  });
});

//Get the button:
mybutton = document.getElementById("topButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(window.matchMedia("(max-width: 970px)").matches && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

if (typeof(Storage) !== "undefined") {
  if (sessionStorage.getItem("darkmode") === "dark"){
    setDark();
  } else {
    praiseTheSun();
  }; 
}


window.addEventListener('load', (event) => {
  // Uncollapse all collapsy's only once images are loaded
  var coll = document.getElementsByClassName("collapsible");
  var i;
  for (i = 0; i < coll.length; i++) {
    // open collapsibles by default (with animation)!
    coll[i].classList.add("active");
    var content = coll[i].nextElementSibling;
    content.style.maxHeight = content.scrollHeight + "px";
  }
});

