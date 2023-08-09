import { Song } from "./shared/Song";

interface SongMethods {
  handleBoardGenerate(board: HTMLElement): void;
}

class SongBoard implements SongMethods {
  constructor(public current: Song) {}

  handleBoardGenerate(board: HTMLElement): void {}
}
