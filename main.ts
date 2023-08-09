import "./src/styles/main.scss";
import "./src/assets/Hatsune_Miku.png";
import "./src/assets/Hatsune_Miku_pfp.png";
import "./src/assets/Emu_pfp.png";
import "./src/assets/favicon.ico";
import "./src/assets/main-bg.jpg";
import "./src/assets/ready_steady_song.jpg";
import songs from "./src/scripts/shared/Song";

const handleGameLoad = (): void => {
  console.log(songs);
};

document.addEventListener("DOMContentLoaded", handleGameLoad);
