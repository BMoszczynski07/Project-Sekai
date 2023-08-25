import { Note } from "./SongType";
import SpeedSteps from "./SpeedSteps";

interface SongBoardInterface {
  /*
    implementation for both cases
  */
  handleBoardMove(): void;

  handleChangeGameSpeed(payload: SpeedSteps): void;

  handleBoardGenerate(parent: HTMLElement): void;

  /*
    implementation for tests
  */
  handleCalculateTapAccuracy(note: Note): number;

  handleTestModeNotePressed(noteId: number): void;

  /*
    implementation for regular board
  */

  handleNormalModeNotePress(noteId: number): void;
}

export default SongBoardInterface;
