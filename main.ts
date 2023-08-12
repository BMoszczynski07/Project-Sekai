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

const handleGameLoad = (): void => {
  const game: Game = new Game(songs);

  game.handleShowSongs(null);

  // mute option

  game.handleInitializeMuteOption();

  const vocaloids = document.querySelectorAll(".start__vocaloid");

  vocaloids.forEach((vocaloid) => {
    vocaloid.addEventListener("click", () => {
      const vocaloidName: string | null =
        vocaloid?.getAttribute("data-vocaloid");

      console.log(vocaloidName);

      game.handleShowSongs(vocaloidName);
    });
  });
};

document.addEventListener("DOMContentLoaded", handleGameLoad);
