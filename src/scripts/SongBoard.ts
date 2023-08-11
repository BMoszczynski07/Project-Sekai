import Song from "./shared/SongType";

interface SongMethods {
  handleBoardGenerate(board: HTMLElement): void;

  handleNotePressed(noteNum: number): void;
}

class SongBoard implements SongMethods {
  constructor(public currentSong: Song) {}

  handleBoardGenerate = (board: HTMLElement): void => {
    console.log(board);
  };

  handleNotePressed = (noteNum: number): void => {
    console.log(noteNum);
  };
}

export default SongBoard;
