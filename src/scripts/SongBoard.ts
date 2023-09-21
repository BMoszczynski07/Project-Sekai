import Game from "./Game";
import SongBoardInterface from "./shared/SongBoardInterface";
import Song from "./shared/SongType";
import Vocaloid from "./shared/VocaloidType";
import testRhythm from "./shared/testrhythm";

class SongBoard extends Game implements SongBoardInterface {
  gameVelocity = 10;

  chosenSong: Song | undefined;

  notes = 0;
  notesInterval: NodeJS.Timer | null = null;

  boardInterval: NodeJS.Timer | null = null;

  private correspondingNotes: { [key: string]: number } = {
    q: 0,
    w: 1,
    e: 2,
    r: 3,
    t: 4,
    y: 5,
    u: 6,
    i: 7,
    o: 8,
    p: 9,
    "[": 10,
    "]": 11,
  };

  handleGetPanelPos(): number | void {
    const panel: HTMLElement | null = document.querySelector(
      ".board__notes-panel"
    );

    if (!panel) return;

    const getPos = window
      .getComputedStyle(panel)
      .getPropertyValue("transform")
      .split(",")[5]
      .trim();

    return parseFloat(getPos);
  }

  handleCalculateTapAccuracy(boardPos: number, noteId: number): number | void {
    // let findNote: Note;
    let accuracy: number;

    if (!this.chosenSong) {
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
    } else {
      accuracy = 1;
    }

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

  handleRhythmInit(): void {
    const audioContext = new window.AudioContext();
    this.notesInterval = setInterval(() => {
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

  handlePanelMove(): void {
    // const boardPanel: HTMLElement | null = document.querySelector(
    //   ".board__notes-panel"
    // );
    // if (!boardPanel) return;
    // boardPanel.style.animation = "";
  }

  constructor(songs: Song[], vocaloids: Vocaloid[], chosenSong: Song | void) {
    super(songs, vocaloids);

    if (chosenSong) this.chosenSong = chosenSong;

    // handleGenerateBoard
    // handleCalibrateSpeed
    // handleChangeSpeed

    document.addEventListener("keydown", (e: KeyboardEvent) => {
      this.handleNoteDown(e);
    });

    document.addEventListener("keyup", (e: KeyboardEvent) => {
      this.handleNoteUp(e);
    });
  }
}

export default SongBoard;
