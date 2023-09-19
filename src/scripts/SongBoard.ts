import Game from "./Game";
import SongBoardInterface from "./shared/SongBoardInterface";
import Song from "./shared/SongType";
import Vocaloid from "./shared/VocaloidType";

class SongBoard extends Game implements SongBoardInterface {
  gameVelocity = 10;

  notes = 0;
  notesInterval: NodeJS.Timer | null = null;

  boardInterval: NodeJS.Timer | null = null;

  handleNoteDown(e: KeyboardEvent): void {
    const { key } = e;

    const correspondingNotes = {
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

    if (!correspondingNotes.hasOwnProperty(key)) return;
  }

  handleNoteUp(e: KeyboardEvent): void {}

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
    const boardPanel: HTMLElement | null = document.querySelector(
      ".board__notes-panel"
    );

    if (!boardPanel) return;

    boardPanel.style.animation = "panelMove 2s linear infinite";
  }

  constructor(songs: Song[], vocaloids: Vocaloid[]) {
    super(songs, vocaloids);

    document.addEventListener("keydown", (e: KeyboardEvent) => {
      this.handleNoteDown(e);
    });

    document.addEventListener("keyup", (e: KeyboardEvent) => {
      this.handleNoteUp(e);
    });
  }
}

export default SongBoard;
