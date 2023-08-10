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
