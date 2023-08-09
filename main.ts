import "./src/styles/main.scss";
import "./src/assets/Hatsune_Miku.png";
import "./src/assets/Hatsune_Miku_pfp.png";
import "./src/assets/Emu_pfp.png";
import "./src/assets/favicon.ico";
import "./src/assets/main-bg.jpg";
import "./src/assets/ready_steady_song.jpg";
import "./src/assets/song-scroll.mp3";
import handleInitializeList from "./src/scripts/songsList";

const handleGameLoad = (): void => {
  handleInitializeList();
};

document.addEventListener("DOMContentLoaded", handleGameLoad);
