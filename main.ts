import "./src/styles/main.scss";
import "./src/assets/Hatsune_Miku.png";
import "./src/assets/Hatsune_Miku_pfp.png";
import "./src/assets/Rin_pfp.png";
import "./src/assets/Emu_pfp.png";
import "./src/assets/favicon.ico";
import "./src/assets/main-bg.jpg";
import "./src/assets/po_pi_po_song.jpg";
import "./src/assets/ghost_rule.mp4";
import "./src/assets/ready_steady.mp4";
import "./src/assets/ready_steady_song.jpg";
import "./src/assets/ghost_rule_song.jpg";
import "./src/assets/song-scroll.mp3";
import "./src/assets/click.wav";
import "./src/assets/po_pi_po.mp4";
import songs from "./src/scripts/shared/songs";
import Game from "./src/scripts/Game";
import vocaloids from "./src/scripts/shared/vocaloids";
import Difficulty from "./src/scripts/shared/Difficulty";
import "./src/assets/miku.mp4";
import "./src/assets/miku.jpg";
import "./src/assets/remote_controller.mp4";
import "./src/assets/remote_controller.jpg";
import "./src/assets/sisters_mercy.mp4";
import "./src/assets/sisters_mercy.jpg";

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

  const gameLvls = document.querySelectorAll(".start__lvl");

  const bgGlow = document.querySelector(".start__bg-glow");
  const chosenSongBg = document.querySelector(".start__chosen-song__bg");
  const chosenGameLvl = document.querySelector(
    `[data-difficulty=${game.chosenDifficulty}]`
  );

  bgGlow?.classList.add(`start__bg-glow--${game.chosenDifficulty}`);
  chosenSongBg?.classList.add(
    `start__chosen-song__bg--${game.chosenDifficulty}`
  );
  chosenGameLvl?.classList.add(`start__lvl--${game.chosenDifficulty}`);

  gameLvls.forEach((gameLvl) => {
    gameLvl.addEventListener("click", () => {
      const gameLvlDifficulty: Difficulty = gameLvl.getAttribute(
        "data-difficulty"
      ) as Difficulty;

      if (gameLvlDifficulty === game.chosenDifficulty) return;

      if (!game.isGameMuted) {
        const clickAudio = new Audio();
        clickAudio.src = "./assets/click.wav";

        clickAudio.play();
      }

      game.handlePickDifficulty(gameLvlDifficulty);
    });
  });
};

document.addEventListener("DOMContentLoaded", handleGameLoad);
