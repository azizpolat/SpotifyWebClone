import { elements } from "./js/helper.js";
import { API } from "./js/api.js";
import { updateTitle, renderPlayingInfo } from "./js/ui.js";

//* Api classın bir ornegini olusurduk
const api = new API();

elements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = e.target[0].value;
  if (!query) {
    alert("Lütfen Bir Müzik Giriniz !!!");
    return;
  }

  //title değeri her girilen değere göre gelmesi
  updateTitle(`${query} için Sonuclar`);

  api.searchMusic(query);
});

// sayfa yuklnediği anda populer muzklşer yukenece
document.addEventListener("DOMContentLoaded", async () => {
  await api.topPopuler();
});
const playMusic = (url) => {
  // mzuik url html aktardık
  elements.audioSource.src = url;
  console.log(url);
  //audio elementine müziği yukleme saplandı
  elements.audio.load();
  //audio muzik oynatma saglandı
  elements.audio.play();
};

const handleClick = (e) => {
  // id paly olna elemanı bulama
  if (e.target.id === "play-btn") {
    // parent eleman yerine kullanılır
    const parent = e.target.closest(".card");
    renderPlayingInfo(parent.dataset);
    playMusic(parent.dataset.url);
  }
};

// fotogrfa animate classı ekle
const animatePhoto = () => {
  const img = document.querySelector(".info img");
  img.className = "animate";
};

// fotogrfa animate classı cıkar
const stopAnimation = () => {
  const img = document.querySelector(".info img");
  img.classList.remove("animate");
};

document.addEventListener("click", handleClick);
elements.audio.addEventListener("play", animatePhoto);
elements.audio.addEventListener("pause", stopAnimation);
