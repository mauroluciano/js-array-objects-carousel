const prev = document.getElementById("prev");
const next = document.getElementById("next");

//array con elenco immagine
const items = document.getElementsByClassName("item");

// indice
let index = 0;

//funzione associata al pulsante next
next.addEventListener("click", function () {
  // nasconde l'immagine attualmente visibile

  document.querySelector(".item.active").classList.remove("active");

  //controlla se siamo all'ultima immmagine
  if (index < items.length - 1) {
    index++;
  } else {
    index = 0;
  }

  // rende visibile l'immagine in posizione index

  items[index].classList.add("active");
});

//funzione associata al pulsante prev

prev.addEventListener("click", function () {
  // nasconde l'immagine attualmente visibile
  document.querySelector(".item.active").classList.remove("active");

  //controlla se siamo alla prima immagine
  if (index > 0) {
    index--;
  } else {
    index = items.length - 1;
  }
  // rende visibile l'immagine in posizione index
  items[index].classList.add("active");
});
