import { renderSearch, renderSongs } from "./ui.js";

//* Inputa girilen veriye göre aratacağımız api key
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "17bfa31bbbmsh1355592a7405f9bp1dd229jsnd7e87c1e1260",
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};

const optionsTop = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "81136feeccmsh39a1a89f3e8390ep1a729fjsn478fcd70c071",
    "x-rapidapi-host": "spotify23.p.rapidapi.com",
  },
};

export class API {
  constructor() {
    this.songs = [];
  }

  async searchMusic(query) {
    try {
      const res = await fetch(
        `https://shazam.p.rapidapi.com/search?term=${query}&locale=tr-TR&limit=5`,
        options
      );
      const data = await res.json();
      let newData = data.tracks.hits;
      newData = newData.map((song) => ({ ...song.track }));
      this.songs = newData;
      renderSearch(this.songs);
    } catch (error) {
      console.log(error);
    }
  }

  async topPopuler() {
    const url =
      "https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry";
    try {
      const res = await fetch(url, optionsTop);
      const result = await res.json();
      this.songs = result.tracks;
      renderSongs(this.songs);
    } catch (error) {
      console.log(error);
    }
  }
}
