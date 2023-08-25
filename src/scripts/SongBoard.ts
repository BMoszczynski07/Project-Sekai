import Game from "./Game";
import SongMethods from "./shared/SongMethods";
import Song from "./shared/SongType";
import Vocaloid from "./shared/VocaloidType";

type BoardMode = "test" | "normal";

class SongBoard extends Game implements SongMethods {
  gameSpeed: number;

  constructor(
    songs: Song[],
    vocaloids: Vocaloid[],
    public mode: BoardMode,
    public speed: number
  ) {
    this.gameSpeed = speed;

    if (mode === "test") {
      // event listeners for test etc
    } else {
      // event listeners for normal etc
    }

    super(songs, vocaloids);
  }
}

export default SongBoard;
