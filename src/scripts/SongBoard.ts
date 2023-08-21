import Game from "./Game";
import SongMethods from "./shared/SongMethods";

class SongBoard extends Game implements SongMethods {
  handleBoardGenerate = (board: HTMLElement): void => {
    console.log(board);
  };

  handleNotePressed = (noteNum: number): void => {
    console.log(noteNum);
  };
}

export default SongBoard;
