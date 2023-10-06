import Song from "../../shared/types/SongType";
import Vocaloid from "../../shared/types/VocaloidType";
import BoardContainer from "./BoardContainer";

class SongBoard extends BoardContainer {
  public chosenSong: Song;

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
