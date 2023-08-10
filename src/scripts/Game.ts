import { Song } from "./shared/SongType";

interface GameInterface {
  handleInitializeMuteOption(): void;

  handleInitializeList(): void;
}

class Game implements GameInterface {
  isGameMuted: boolean = true;

  songs: Song[];

  scroll: number = 0;
  curSongId: number = 0;

  constructor(songs: Song[]) {
    this.songs = songs;
  }

  handleInitializeMuteOption = (): void => {
    const muteBtn: HTMLButtonElement | null =
      document.querySelector(".start__mute-i");

    const mute: HTMLElement | null = document.querySelector(
      ".start__mute-i__muted"
    );

    muteBtn?.addEventListener("click", () => {
      this.isGameMuted = !this.isGameMuted;

      if (mute) mute.style.opacity = this.isGameMuted ? "1" : "0";
    });
  };

  handleInitializeList = (): void => {
    const songList: HTMLElement | null =
      document.querySelector(".start__songs-list");

    const songs: NodeListOf<HTMLElement> | null =
      document.querySelectorAll(".start__song");

    if (songs.length === 0) return;

    const songAuthors: Element | null = document.querySelectorAll(
      ".start__song-authors"
    )[this.curSongId];

    songAuthors?.classList.add("start__song-authors--slide-animation");
    songs[this.curSongId].classList.add("start__song--selected");

    songList?.addEventListener("wheel", (event) => {
      this.scroll += 1;
      if (this.scroll % 12 !== 0) {
        event.preventDefault();
        return;
      }

      const prevSongAuthors: Element | null = document.querySelectorAll(
        ".start__song-authors"
      )[this.curSongId];

      const scrollAudio = new Audio();
      scrollAudio.src = "../../assets/song-scroll.mp3";

      if (event.deltaY > 0) {
        if (this.curSongId < songs.length - 1) {
          this.curSongId++;
          if (!this.isGameMuted && scrollAudio) scrollAudio.play();
        }

        songs[this.curSongId - 1].classList.remove("start__song--selected");
        songs[this.curSongId].classList.add("start__song--selected");

        const curSongAuthors: Element | null = document.querySelectorAll(
          ".start__song-authors"
        )[this.curSongId];

        prevSongAuthors?.classList.remove(
          "start__song-authors--slide-animation"
        );
        curSongAuthors?.classList.add("start__song-authors--slide-animation");

        const scrollAmount = 76;
        songList.scrollTo({
          top: songList.scrollTop + scrollAmount,
          left: 0,
          behavior: "smooth",
        });
      } else {
        if (this.curSongId > 0) {
          this.curSongId--;
          if (!this.isGameMuted && scrollAudio) scrollAudio.play();
        }

        songs[this.curSongId + 1].classList.remove("start__song--selected");
        songs[this.curSongId].classList.add("start__song--selected");

        const curSongAuthors: Element | null = document.querySelectorAll(
          ".start__song-authors"
        )[this.curSongId];

        prevSongAuthors?.classList.remove(
          "start__song-authors--slide-animation"
        );
        curSongAuthors?.classList.add("start__song-authors--slide-animation");

        const scrollAmount = -76;
        songList.scrollTo({
          top: songList.scrollTop + scrollAmount,
          left: 0,
          behavior: "smooth",
        });
      }
    });
  };
}

export default Game;
