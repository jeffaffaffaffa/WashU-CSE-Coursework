var slideIndex = 1;
showDivs(slideIndex);
var myIndex = 0;
automatic();

function automatic() {
  var photos = document.getElementsByClassName("slide"); //getting myslides
  var i; //instantiating variable
  for (i = 0; i < photos.length; i++) { //for loop to iterate through slideshow
    photos[i].style.display = "none";
  }
  myIndex++; //loops through then adds to myindex
  if (myIndex > photos.length) {
    myIndex = 1
  }
  photos[myIndex-1].style.display = "block"; //help from online sources:w3schools.com
  setTimeout(automatic, 3000); // Change image every 3 seconds
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
