import Game from "./Game";
import SongBoardInterface from "./shared/SongBoardInterface";
import Song from "./shared/SongType";
import Vocaloid from "./shared/VocaloidType";

class SongBoard extends Game implements SongBoardInterface {
  gameVelocity = 10;

  notes = 0;
  notesInterval: NodeJS.Timer | null = null;

  boardInterval: NodeJS.Timer | null = null;

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
      oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);

      oscillator.connect(audioContext.destination);
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
  }
}

export default SongBoard;
