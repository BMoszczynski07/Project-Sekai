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
import "./src/assets/miku.mp4";
import "./src/assets/miku.jpg";
import "./src/assets/remote_controller.mp4";
import "./src/assets/remote_controller.jpg";
import "./src/assets/sisters_mercy.mp4";
import "./src/assets/sisters_mercy.jpg";
import "./src/assets/cast_a_spell_pfp.jpg";
import "./src/assets/cast_a_spell.mp4";
import "./src/assets/theme_of_niccori.mp4";
import "./src/assets/theme_of_niccori.png";
import "./src/assets/vocaloid_pick.wav";
import SongBoard from "./src/scripts/SongBoard";

const handleGameLoad = (): void => {
  const gameInstance: Game = new Game(songs, vocaloids);

  const board: SongBoard = new SongBoard(songs, vocaloids);

  board.handleRhythmInit();
  board.handlePanelMove();

  gameInstance.handleShowSongs(null);

  // mute option

  gameInstance.handleInitializeMuteOption();
  gameInstance.handleShowVocaloids();

  gameInstance.handleInitializeVocaloidBtns();
  gameInstance.handleSetLvlBtns();
};

document.addEventListener("DOMContentLoaded", handleGameLoad);
