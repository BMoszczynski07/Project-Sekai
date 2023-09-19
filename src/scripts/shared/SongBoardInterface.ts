// import { Note } from "./SongType";
// import SpeedSteps from "./SpeedSteps";

interface SongBoardInterface {
  /*
    implementation for both cases
  */
  // handleBoardMove(): void;
  // handleChangeGameSpeed(payload: SpeedSteps): void;
  // handleBoardGenerate(parentElement: HTMLElement): void;
  // handleCalculateTapAccuracy(note: Note): number;
  // handleNotePressed(note: Note): void;
  /*
    implementation for tests
  */
  // handleShowShortcuts(): void;
  // handleExpandBoard(parentElement: HTMLElement): void;
  // handleCloseBoard(parentElement: HTMLElement): void;
  handleRhythmInit(): void;
  handlePanelMove(): void;
  handleNoteDown(e: KeyboardEvent): void;
  handleNoteUp(e: KeyboardEvent): void;
}

export default SongBoardInterface;
