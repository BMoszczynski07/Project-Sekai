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
    path: string;
    ending: NoteType;
  };
  posY: number;
  posYEnd: number;
  range: Range;
};

type NoteRegular = Omit<NoteSlide, "notes" | "posYEnd">;

type Note = NoteRegular | NoteSlide;

type SongInfo = {
  type: string;
  desc: string | number;
};

type Song = {
  name: string;
  img: string;
  musicVideo: string;
  authors: string[];
  info: SongInfo[];
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
