var btnContainer = document.getElementById("lnav-list");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("lnav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}




var btnContainer = document.getElementById("pg-right");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("page-no");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-2");
    current[0].className = current[0].className.replace(" active-2", "");
    this.className += " active-2";
  });
}