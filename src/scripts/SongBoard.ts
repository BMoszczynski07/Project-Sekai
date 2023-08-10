import { Song } from "./shared/SongType";

interface SongMethods {
  handleBoardGenerate(board: HTMLElement): void;

  handleNotePressed(noteNum: number): void;
}

class SongBoard implements SongMethods {
  constructor(public songs: Song[], public currentSong: Song) {}

  handleBoardGenerate = (board: HTMLElement): void => {};

  handleNotePressed = (noteNum: number): void => {};
}
