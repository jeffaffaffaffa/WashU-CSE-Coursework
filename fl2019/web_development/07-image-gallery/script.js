// opens gallery, sets display to block
function openGallery() {
  document.getElementById("gallery").style.display = "block";
}

// closes gallery, sets display to none
function closeGallery() {
  document.getElementById("gallery").style.display = "none";
}

//start with slide 1
var slideNumber = 1;
//show slide one
showSlide(slideNumber);

//change slide, takes in 1 or -1 from html file. increases or decreases slide number by one
function changeSlide(n) {
  showSlide(slideNumber += n);
}

//the current picture (clicked picture) is shown when gallery is opened
//slide number is now n; shows that slide
function currentPic(n) {
  showSlide(slideNumber = n);
}

//instatiates a variable z for use in for loops
//get class names slide and thumbnails and variables created to represent the number of elements per class name
//same with caption id
function showSlide(n) {
  var z;
  var slide = document.getElementsByClassName("slide");
  var tnail = document.getElementsByClassName("thumbnails");
  var cap = document.getElementById("caption");

  //if n is larger than the number of slides, we reset value back to 1 (looping around)
  if (n > slide.length) {
    slideNumber = 1;
  }

  //if n is less than one, we are reversing back and loop around to end
  if (n < 1) {
    slideNumber = slide.length;
  }

  //each time showSlide is called, we set everything to display none
  for (z = 0; z < slide.length; z++) {
    slide[z].style.display = "none";
  }

  //each time showSlide is called, we remove active from thumbnail class name
  for (z = 0; z < tnail.length; z++) {
    tnail[z].className = tnail[z].className.replace(" active", "");
  }

  //since arrays are indexed from 0, need to shift by one
  var newIndex = slideNumber-1;

  //set the slide we want to show to display block, everything else is still display none
  slide[newIndex].style.display = "block";
  //add active to thumbnail class name that is currently displayed. the "active" thumbnail is given an opacity of 1 in the css file
  tnail[newIndex].className += " active";
  //the caption is the alt of each respective image, changes with the slides
  caption.innerHTML = tnail[newIndex].alt;
}
