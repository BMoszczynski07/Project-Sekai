import Song from "./SongType";

let songs: Song[] = [
  {
    name: "Ready Steady",
    img: "./assets/ready_steady_song.jpg",
    authors: ["Hatsune Miku", "Kagamine Rin", "Kagamine Len"],
    info: [
      { type: "Release Date", desc: "07/07/2021" },
      { type: "Music", desc: "GigaP" },
    ],
    lvl: {
      easy: 6,
      normal: 13,
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
  {
    name: "Po Pi Po",
    img: "./assets/po_pi_po_song.jpg",
    authors: ["Hatsune Miku"],
    info: [
      { type: "Release Date", desc: "07/07/2021" },
      { type: "Music", desc: "GigaP" },
    ],
    lvl: {
      easy: 6,
      normal: 11,
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
  {
    name: "Ghost Rule",
    img: "./assets/ghost_rule_song.jpg",
    authors: ["Hatsune Miku"],
    info: [
      { type: "Release Date", desc: "07/07/2021" },
      { type: "Music", desc: "GigaP" },
    ],
    lvl: {
      easy: 6,
      normal: 14,
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
