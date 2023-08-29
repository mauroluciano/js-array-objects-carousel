const prev = document.getElementById("prev");
const next = document.getElementById("next");

const items = document.getElementsByClassName("item");

let index = 0;

next.addEventListener("click", function () {
  document.querySelector(".item.active").classList.remove("active");

  if (index < items.length - 1) {
    index++;
  } else {
    index = 0;
  }

  items[index].classList.add("active");
});

prev.addEventListener("click", function () {
  document.querySelector(".item.active").classList.remove("active");

  if (index > 0) {
    index--;
  } else {
    index = items.length - 1;
  }

  items[index].classList.add("active");
});
