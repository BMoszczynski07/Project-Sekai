import Vocaloid from "./VocaloidType";

const vocaloids: Vocaloid[] = [
  {
    name: "Hatsune Miku",
    img: "./assets/Hatsune_Miku_pfp.png",
    desc: "Hatsune Miku (Japanese : 初音ミク) is a Japanese virtual singer created by Crypton Future Media",
    badges: [
      {
        type: "Age",
        desc: 16,
      },
      {
        type: "Release",
        desc: 2007,
      },
    ],
  },
  {
    name: "Emu Otori",
    img: "./assets/Emu_pfp.png",
    desc: "Otori Emu (鳳えむ) is a first-year student at Miyamasuzaka Girls Academy.",
    badges: [
      {
        type: "Height",
        desc: "152cm",
      },
      {
        type: "Age",
        desc: 16,
      },
    ],
  },
  {
    name: "All Vocaloids",
  },
];

export default vocaloids;
