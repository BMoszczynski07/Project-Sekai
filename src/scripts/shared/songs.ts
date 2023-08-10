import { Song } from "./SongType";

const songs: Song[] = [
  {
    name: "Ready Steady",
    img: "./assets/ready_steady_song.jpg",
    authors: ["Hatsune Miku", "Kagamine Rin", "Kagamine Len"],
    info: {
      "Release Date": "07/07/2021",
      Music: "GigaP",
      Lyrics: "q*Left",
    },
    lvl: {
      easy: 6,
      normal: 12,
      hard: 18,
      expert: 23,
      master: 30,
    },
    notes: [
      {
        note: "regular",
        posY: 20,
        range: [2, 4],
      },
    ],
  },
];

export default songs;
