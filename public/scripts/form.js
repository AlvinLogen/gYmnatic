// Slider and Button Variables
const slidePage = document.querySelector(".register__content--form__page");
const firstNextBtn = document.querySelector(".next-1");

const firstPrevBtn = document.querySelector(".prev-1");
const secondNextBtn = document.querySelector(".next-2");

const secondPrevBtn = document.querySelector(".prev-2");
const thirdNextBtn = document.querySelector(".next-3");

const thirdPrevBtn = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");

// Progress Steps and (span)
const progressStep = document.querySelectorAll(".register__progress--step");
const progressNumber = document.querySelectorAll(
  ".register__progress--step span"
);
const progressTick = document.querySelectorAll(".fa-check");

let max = 4;
let current = 1;

// Functions
function increment() {
  progressStep[current - 1].classList.add("active");
  progressNumber[current - 1].classList.add("active");
  progressTick[current - 1].classList.add("active");
  current += 1;
}

function decrement() {
  progressStep[current - 2].classList.remove("active");
  progressNumber[current - 2].classList.remove("active");
  progressTick[current - 2].classList.remove("active");
  current -= 1;
}

// Next + Submit Button Movements

firstNextBtn.addEventListener("click", () => {
  slidePage.style.marginLeft = "-33%";
  increment();
});

secondNextBtn.addEventListener("click", () => {
  slidePage.style.marginLeft = "-100%";
  increment();
});

thirdNextBtn.addEventListener("click", () => {
  slidePage.style.marginLeft = "-200%";
  increment();
});

submitBtn.addEventListener("click", () => {
  setTimeout(() => {
    alert("Your Form Has Been Submitted Successfully");
    location.reload();
  }, 1000);
});

// Previous Button Movements

firstPrevBtn.addEventListener("click", () => {
  slidePage.style.marginLeft = "0%";
  decrement();
});

secondPrevBtn.addEventListener("click", () => {
  slidePage.style.marginLeft = "-33%";
  decrement();
});

thirdPrevBtn.addEventListener("click", () => {
  slidePage.style.marginLeft = "-100%";
  decrement();
});
