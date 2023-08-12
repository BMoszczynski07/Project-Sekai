import "./src/styles/main.scss";
import "./src/assets/Hatsune_Miku.png";
import "./src/assets/Hatsune_Miku_pfp.png";
import "./src/assets/Emu_pfp.png";
import "./src/assets/favicon.ico";
import "./src/assets/main-bg.jpg";
import "./src/assets/po_pi_po_song.jpg";
import "./src/assets/ready_steady_song.jpg";
import "./src/assets/ghost_rule_song.jpg";
import "./src/assets/song-scroll.mp3";
import songs from "./src/scripts/shared/songs";
import Game from "./src/scripts/Game";
import vocaloids from "./src/scripts/shared/vocaloids";

const handleGameLoad = (): void => {
  const game: Game = new Game(songs, vocaloids);

  game.handleShowSongs(null);

  // mute option

  game.handleInitializeMuteOption();

  game.handleShowVocaloids();

  const vocaloidsBtns = document.querySelectorAll(".start__vocaloid");

  vocaloidsBtns.forEach((vocaloid) => {
    vocaloid.addEventListener("click", () => {
      const vocaloidName: string | null =
        vocaloid?.getAttribute("data-vocaloid");

      game.handleShowSongs(vocaloidName);
    });
  });
};

document.addEventListener("DOMContentLoaded", handleGameLoad);
