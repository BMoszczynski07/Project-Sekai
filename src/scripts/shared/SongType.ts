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

export type Note = NoteRegular | NoteSlide;

type SongInfo = {
  type: string;
  desc: string | number;
};

type RegularSong = {
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

type AccuracyTestTune = {
  src: "./assets/accuracy_test.mp3";
  notes: Note[];
};

type Song = RegularSong | AccuracyTestTune;

export default Song;
