
var typed = new Typed(".typing", {
    strings: [ "Developer", "Learner"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typingnav", {
    strings: [ "FOLIO"],
    typeSpeed: 100,
 
});

var typed = new Typed(".typingh5", {
  strings: [ "come....."],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});



const items = document.querySelectorAll("#timeline li");

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWhith || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("show");
    }
  });

// Events
window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run);