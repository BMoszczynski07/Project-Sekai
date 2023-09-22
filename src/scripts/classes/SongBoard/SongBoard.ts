import SongBoardInterface from "../../shared/interfaces/SongBoardInterface";
import Song from "../../shared/types/SongType";
import Vocaloid from "../../shared/types/VocaloidType";
import testRhythm from "../../shared/data/testrhythm";
import BoardContainer from "./BoardContainer";

class SongBoard extends BoardContainer implements SongBoardInterface {
  public chosenSong: Song;

  handleCalculateTapAccuracy(boardPos: number, noteId: number): number | void {
    let accuracy: number;

    if (testRhythm.range[0] > noteId || testRhythm.range[1] < noteId) return;

    accuracy = testRhythm.posY - boardPos + 16;
    accuracy = parseFloat(accuracy.toFixed(1));

    const board = document.querySelector(".board__lanes");

    if (!board) return;

    const accuracyElem = document.createElement("div");
    accuracyElem.classList.add("board__accuracy");

    const accuracyVal = document.createElement("h5");
    accuracyVal.classList.add("board__accuracy-val");

    accuracyElem.appendChild(accuracyVal);
    board.appendChild(accuracyElem);

    accuracyVal.textContent = accuracy.toString();

    accuracyElem.style.bottom = `${116 - boardPos}px`;

    return accuracy;
  }

  handleNoteDown(e: KeyboardEvent): void {
    const { key } = e;

    if (!this.correspondingNotes.hasOwnProperty(key)) return;

    console.log(key);

    const noteId: number = this.correspondingNotes[key];
    const note = document.querySelectorAll(".board__lane-field")[noteId];

    note.classList.add("board__lane-field--pressed");
  }

  handleNoteUp(e: KeyboardEvent): void {
    const { key } = e;

    if (!this.correspondingNotes.hasOwnProperty(key)) return;

    const noteId: number = this.correspondingNotes[key];
    const note = document.querySelectorAll(".board__lane-field")[noteId];

    note.classList.remove("board__lane-field--pressed");

    const boardPos = this.handleGetPanelPos();

    if (!boardPos) return;

    let tapAccuracy = this.handleCalculateTapAccuracy(boardPos, noteId);

    console.log(tapAccuracy);

    // if not test...
  }

  constructor(songs: Song[], vocaloids: Vocaloid[], chosenSong: Song) {
    super(songs, vocaloids);

    this.chosenSong = chosenSong;

    // handleGenerateBoard
    // handleCalibrateSpeed
    // handleChangeSpeed
  }
}

export default SongBoard;
