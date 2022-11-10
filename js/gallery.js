new Swiper(".swiper-container", {
  speed: 400,
  spaceBetween: 100,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});


const { styler, spring, listen, pointer, value } = window.popmotion;

const ball = document.querySelector(".brand");
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, "mousedown touchstart").start(e => {
  e.preventDefault();
  pointer(ballXY.get()).start(ballXY);
});

listen(document, "mouseup touchend").start(() => {
  spring({
    from: ballXY.get(),
    velocity: ballXY.getVelocity(),
    to: { x: 0, y: 0 },
    stiffness: 200
    // mass: 1,
    // damping: 10
  }).start(ballXY);
});




// let currentlySelected = 0;
// const nodes = document.querySelectorAll(".gallery-img");
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");

// function previous() {
//   nextBtn.disabled = false;
//   nodes[currentlySelected].classList.remove("active");
//   currentlySelected--;
//   nodes[currentlySelected].classList.add("active");

//   if (currentlySelected === 0) {
//     prevBtn.disabled = true;
//   }
// }

// function next() {
//   prevBtn.disabled = false;
//   nodes[currentlySelected].classList.remove("active");
//   currentlySelected++;
//   nodes[currentlySelected].classList.add("active");

//   if (currentlySelected + 1 === nodes.length) {
//     nextBtn.disabled = true;
//   }
// }

// function init() {
//   prevBtn.addEventListener("click", function() {
//     previous();
//   });

//   nextBtn.addEventListener("click", function(e) {
//     next();
//   });
// }

// init();