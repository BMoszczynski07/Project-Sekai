type NoteType =
  | "regular"
  | "regularUp"
  | "regularBack"
  | "slide"
  | "gold"
  | "goldUp"
  | "goldBack";

type Range = [number, number];

type NoteSlide = {
  note: NoteType;
  notes: {
    beggining: NoteType;
    ending: NoteType;
  };
  posY: number;
  posYEnd: number;
  range: Range;
};

type NoteRegular = Omit<NoteSlide, "notes" | "posYEnd">;

type Note = NoteRegular | NoteSlide;

type Song = {
  name: string;
  img: string;
  authors: string[];
  info?: string[];
  lvl: {
    easy: number;
    normal: number;
    hard: number;
    expert: number;
    master: number;
  };
  notes: Note[];
};

export default Song;
