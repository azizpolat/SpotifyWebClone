import { elements } from "./helper.js";

export const renderSearch = (songs) => {
  // her istek atmadan once ekran temizlenmesi için
  elements.list.innerHTML = "";
  // dounlen her eelam için div etiketi olusutrudu
  songs.forEach((song) => {
    const div = document.createElement("div");
    // kart divine data özellikler elklerl
    div.dataset.url = song.hub.actions.pop().uri;
    div.dataset.title = song.title;
    div.dataset.img = song.images.coverart;
    div.className = "card";
    div.innerHTML = `
        <figure>
           <img src="${song.images.coverart}" alt="">
                        <div class="play" id="play-btn">
                        </div>
                        <h4>${song.subtitle}</h4>
                        <h4>${song.title}</h4>
        </figure>
        `;

    // her donelen veri için helper.js olusutrulan fonksiyon iel ile ekrana basıyoruz
    elements.list.appendChild(div);
  });
};

// inputa giren değeree gore title değeri geliyor ne girilirse o geliyor

export const updateTitle = (message) => {
  elements.title.textContent = message;
};

export const renderSongs = (songs) => {
  // her istek atmadan once ekran temizlenmesi için
  elements.list.innerHTML = "";
  // dounlen her eelam için div etiketi olusutrudu
  songs.forEach((song) => {
    console.log(song);
    const div = document.createElement("div");
    // kart divine data özellikler elklerl
    div.dataset.url = song.preview_url;
    div.dataset.title = song.name;
    div.dataset.img = song.album.images[1].url;
    div.className = "card";
    div.innerHTML = `
        <figure>
           <img src="${song.album.images[1].url}" alt="">
                        <div class="play">
                            <i class="bi bi-play-fill" id="play-btn"></i>
                        </div>
                        <h4>${song.album.artists[0].name}</h4>
                        <h4>${song.name.slice(0.15) + "..."}</h4>
        </figure>
        `;

    // her donelen veri için helper.js olusutrulan fonksiyon iel ile ekrana basıyoruz
    elements.list.appendChild(div);
  });
};


// dataset üzerinden gelen resmi cw name info kısman ekle
export const renderPlayingInfo = (song) => {
  elements.playingInfo.innerHTML = `
 <div class="info">
            <img src="${song.img}"  alt="resim"/>
            <div>
                <p>Şu An Oynatılıyor</p>
                <h3>${song.title}</h3>
            </div>
            <audio controls src="">
                <source  />
            </audio>
        </div>
 `;
};
