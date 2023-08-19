import Song from "./SongType";

let songs: Song[] = [
  {
    name: "Ready Steady",
    img: "./assets/ready_steady_song.jpg",
    musicVideo: "./assets/ready_steady.mp4",
    authors: ["Hatsune Miku", "Kagamine Rin", "Kagamine Len"],
    info: [{ type: "Release Date", desc: "07/07/2021" }],
    lvl: {
      easy: 6,
      normal: 15,
      hard: 19,
      expert: 25,
      master: 33,
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
    musicVideo: "./assets/po_pi_po.mp4",
    authors: ["Hatsune Miku"],
    info: [{ type: "Music", desc: "GigaP" }],
    lvl: {
      easy: 6,
      normal: 13,
      hard: 18,
      expert: 21,
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
    musicVideo: "./assets/ghost_rule.mp4",
    authors: ["Hatsune Miku"],
    info: [
      { type: "Release Date", desc: "07/07/2021" },
      { type: "Music", desc: "GigaP" },
    ],
    lvl: {
      easy: 5,
      normal: 14,
      hard: 20,
      expert: 22,
      master: 29,
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
    name: "Miku",
    img: "./assets/miku.jpg",
    musicVideo: "./assets/miku.mp4",
    authors: ["Hatsune Miku"],
    info: [
      { type: "Release Date", desc: "27/05/2016" },
      { type: "Music", desc: "Anamanaguchi" },
    ],
    lvl: {
      easy: 5,
      normal: 14,
      hard: 20,
      expert: 22,
      master: 29,
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
    name: "Remote Controller",
    img: "./assets/remote_controller.jpg",
    musicVideo: "./assets/remote_controller.mp4",
    authors: ["Kagamine Rin", "Kagamine Len"],
    info: [
      { type: "Release Date", desc: "27/05/2016" },
      { type: "Music", desc: "Anamanaguchi" },
    ],
    lvl: {
      easy: 5,
      normal: 14,
      hard: 20,
      expert: 22,
      master: 29,
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
    name: "Sister's mercy",
    img: "./assets/sisters_mercy.jpg",
    musicVideo: "./assets/sisters_mercy.mp4",
    authors: [
      "Kagamine Rin",
      "Kagamine Len",
      "Kagamine Rin",
      "Kagamine Len",
      "Kagamine Rin",
      "Kagamine Len",
    ],
    info: [{ type: "Release Date", desc: "27/05/2016" }],
    lvl: {
      easy: 5,
      normal: 14,
      hard: 20,
      expert: 22,
      master: 29,
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
