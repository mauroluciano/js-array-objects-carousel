//array di oggetti
const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

const prev = document.getElementById("prev");
const next = document.getElementById("next");

//array con elenco immagine
const items = document.getElementsByClassName("item");
const containerItem = document.getElementById("items");

// classe da associare solo al primo elemento
let attivo = "active";

//ciclo su tutti gli oggetti presenti sulla lista image
for (let obj of images) {
  containerItem.innerHTML += `
    <img src="./${obj.image}" class="item ${attivo}" alt="${obj.text}" />
    `;
  // azzero la classe per evitare di associarla agli elementi successivi
  attivo = "";
}

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
