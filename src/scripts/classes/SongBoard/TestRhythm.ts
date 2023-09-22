class TestRhythm {
  public notes = 0;
  public rhythmInterval: NodeJS.Timer | null = null;

  handleRhythmInit(): void {
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

  constructor() {}
}

export default TestRhythm;
