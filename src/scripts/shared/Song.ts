type NoteType =
  | "regular"
  | "regularUp"
  | "regularBack"
  | "slide"
  | "gold"
  | "goldUp"
  | "goldBack";

type Range = number[];

type Note = {
  note: NoteType;
  notes?: {
    beggining: NoteType;
    ending: NoteType;
  };
  posY: number;
  posYEnd?: number;
  range: Range;
};

export type Song = {
  name: string;
  img: string;
  authors: string[];
  info?: {
    "Release Date"?: string;
    Music?: "GigaP";
    Lyrics?: "q*Left";
  };
  lvl: {
    easy: number;
    normal: number;
    hard: number;
    expert: number;
    master: number;
  };
  notes: Note[];
};

/* 
    songs list
*/

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
  },
];

export default songs;
