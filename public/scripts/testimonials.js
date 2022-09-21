const slides = document.querySelector(
  ".testimonials__content--slider"
).children;
const indicatorImages = document.querySelector(
  ".testimonials__content--indicator"
).children;

for (let i = 0; i < indicatorImages.length; i++) {
  indicatorImages[i].addEventListener("click", function () {
    //   Getting the slider Images
    for (let j = 0; j < indicatorImages.length; j++) {
      indicatorImages[j].classList.remove("active");
    }

    this.classList.add("active");

    //   Getting the Next Slide
    const id = this.getAttribute("data-id");
    for (let k = 0; k < slides.length; k++) {
      slides[k].classList.remove("active");
    }

    slides[id].classList.add("active");
  });
}
