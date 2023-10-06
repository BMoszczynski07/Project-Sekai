import Song from "../../shared/types/SongType";
import Vocaloid from "../../shared/types/VocaloidType";
import BoardContainer from "./BoardContainer";

class TestRhythm extends BoardContainer {
  public notes = 0;
  public rhythmInterval: NodeJS.Timer | null = null;

  public accuracyElemTimeout: NodeJS.Timeout | null = null;
  public actualAccuracyElem: HTMLElement | null = null;

  public testRhythm: HTMLElement | null = document.querySelector(
    ".board__test-rhythm"
  );

  public handleRhythmInit(): void {
    const boardPanel: HTMLElement | null = document.querySelector(
      ".board__notes-panel"
    );

    if (boardPanel) boardPanel.style.animation = "panelMove 2s linear infinite";

    const audioContext = new window.AudioContext();
    this.rhythmInterval = setInterval(() => {
      let freq;
      let duration = 0.2;
      if (this.notes < 3) {
        freq = 220;
        this.notes++;
      } else {
        freq = 320;
        this.notes = 0;
      }

      const oscillator = audioContext.createOscillator();
      oscillator.type = "triangle"; // Rodzaj fali dźwiękowej (np. sinusoidalna)
      oscillator.connect(audioContext.destination);
      oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + duration);
    }, 500);
  }

  public findCorrespondingNote(e: KeyboardEvent): {
    note: Element;
    noteId: number;
  } | void {
    const { key } = e;

    const correspodingNote: number | undefined = this.correspondingNotes[key];

    if (!correspodingNote) return;

    const note: Element | null =
      document.querySelectorAll(".board__lane-field")[correspodingNote];

    return {
      note,
      noteId: correspodingNote,
    };
  }

  public createAccuracyElem(
    boardPos: number,
    accuracy: number
  ): HTMLElement | void {
    const board = document.querySelector(".board__lanes");
    const panel: HTMLElement | null = document.querySelector(
      ".board__notes-panel"
    );

    if (!board || !panel) return;

    if (this.actualAccuracyElem && board.contains(this.actualAccuracyElem)) {
      board.removeChild(this.actualAccuracyElem);
      clearTimeout(this.accuracyElemTimeout as NodeJS.Timeout);
    }

    const accuracyElem = document.createElement("div");
    accuracyElem.classList.add("board__accuracy");

    const accuracyVal = document.createElement("h5");
    accuracyVal.classList.add("board__accuracy-val");

    accuracyElem.appendChild(accuracyVal);
    this.actualAccuracyElem = accuracyElem;
    board.appendChild(accuracyElem);

    accuracyVal.textContent = accuracy.toString();

    accuracyElem.style.bottom = `${104 - boardPos}px`;

    accuracyElem.style.animation =
      "accuracyElemDisappear .3s 2s linear forwards";

    this.accuracyElemTimeout = setTimeout(() => {
      board.removeChild(accuracyElem);
    }, 2500);
  }

  public handleNoteDown(e: KeyboardEvent): void {
    const foundNote = this.findCorrespondingNote(e);

    if (!foundNote) return;

    const { note } = foundNote;

    note.classList.add("board__lane-field--pressed");
  }

  public handleNoteUp(e: KeyboardEvent): void {
    const foundNote = this.findCorrespondingNote(e);

    if (!foundNote) return;

    const { note, noteId } = foundNote;

    note.classList.remove("board__lane-field--pressed");

    const panelPos = this.handleGetPanelPos();

    if (!panelPos) return;

    const accuracy = this.handleCalculateTapAccuracy(panelPos, noteId);

    if (!accuracy) return;

    this.createAccuracyElem(panelPos, accuracy);
  }

  public initNotesListeners(): void {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      this.handleNoteDown(e);
    });

    document.addEventListener("keyup", (e: KeyboardEvent) => {
      this.handleNoteUp(e);
    });
  }

  public handleBoardModalClose(): void {
    console.log("closing modal");

    const boardContainer: HTMLElement | null = document.querySelector(
      ".song-modal__board-container"
    );

    const boardBackground: HTMLElement | null =
      document.querySelector(".board__background");

    const board: HTMLElement | null =
      document.querySelector(".song-modal__board");

    if (!board || !boardBackground || !boardContainer) return;

    board.parentNode?.removeChild(board);

    board.classList.remove("song-modal__board--resized");
    boardBackground.classList.remove("board__background--visible");

    boardContainer.appendChild(board);
  }

  public handleBoardModalShow(): void {
    const boardBackground: HTMLElement | null =
      document.querySelector(".board__background");

    const board: HTMLElement | null =
      document.querySelector(".song-modal__board");

    if (!board || !boardBackground) return;

    board.parentNode?.removeChild(board);

    board.classList.add("song-modal__board--resized");
    boardBackground.classList.add("board__background--visible");

    console.log("showing modal");

    boardBackground.addEventListener("click", () => {
      const boardContainer: HTMLElement | null = document.querySelector(
        ".song-modal__board-container"
      );

      if (!boardContainer) return;

      boardBackground.classList.remove("board__background--visible");
      board.classList.remove("song-modal__board--resized");
      board.parentNode?.removeChild(board);

      boardContainer.insertBefore(board, boardContainer.firstChild);
    });

    boardBackground.appendChild(board);
  }

  constructor(songs: Song[], vocaloids: Vocaloid[]) {
    super(songs, vocaloids);

    const btnResize: HTMLElement | null = document.querySelector(
      ".song-modal__tap-accuracy__btn"
    );

    if (!btnResize) return;

    btnResize.addEventListener("click", this.handleBoardModalShow);
  }
}

export default TestRhythm;
