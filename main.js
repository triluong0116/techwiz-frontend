// Slideshow banner images
$("#slideshow > div:gt(0)").hide();

setInterval(function () {
  $('#slideshow > div:first')
    .fadeOut(1500)
    .next()
    .fadeIn(1500)
    .end()
    .appendTo('#slideshow');
}, 4500);

// Go to top button
const btnGoToTop = document.querySelector(".btn-go-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    btnGoToTop.classList.add("visible");
  } else {
    btnGoToTop.classList.remove("visible");
  }
});


//Width
console.log(window.innerWidth);
  const width = document.querySelector(".blog_feedback");
  console.log(width);

  window.addEventListener('resize', () => {
    if (window.innerWidth < '800'){
      width.classList.remove("row");
    } else {
      width.classList.add('row');
    }
  });



// Blog slide
const containerSlideEl = document.querySelector(".slide-list");
const leftEl = document.getElementById("left");
const middleEl = document.getElementById("middle");
const rightEl = document.getElementById("right");
let position = 0;

function vtRight(position) {
  if (position = 172) {
    return 0;
  }
  // else if (position = - 660)
  //   return - 660;
}

function vtMiddle(position) {
  if (position = 172) {
    return - 570;
  }
  // else if (position = -1320)
  //   return + 660;

}

function vtLeft(position) {
  if (position = - 550) {
    return -1140;
  }
  // else if (position = 1320)
  //   return 0;
}


leftEl.onclick = function () {
  position = vtRight(position);
  containerSlideEl.style.left = `${position}px`;
};

rightEl.onclick = function () {
  position = vtLeft(position);
  containerSlideEl.style.left = `${position}px`;
};

middleEl.onclick = function () {
  position = vtMiddle(position);
  containerSlideEl.style.left = `${position}px`;
};


//Feedback slide
const containerFeedbackEl = document.querySelector(".feedback-list");
const leftFbEl = document.getElementById("fb_dot_left");
const middleFbEl = document.getElementById("fb_dot_middle");
const rightFbEl = document.getElementById("fb_dot_right");
let positionFb = 0;

function vtRightfb(positionFb) {
  if (positionFb = 172)
    return 0;
}

function vtMiddlefb(positionFb) {
  if (positionFb = 172)
    return - 580;
}

function vtLeftfb(positionFb) {
  if (positionFb = - 660)
    return -1160;
}

leftFbEl.onclick = function () {
  positionFb = vtRightfb(positionFb);
  containerFeedbackEl.style.left = `${positionFb}px`;
};

rightFbEl.onclick = function () {
  positionFb = vtLeftfb(positionFb);
  containerFeedbackEl.style.left = `${positionFb}px`;
};

middleFbEl.onclick = function () {
  positionFb = vtMiddlefb(positionFb);
  containerFeedbackEl.style.left = `${positionFb}px`;
};