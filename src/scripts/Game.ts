import Song from "./shared/SongType";

interface GameInterface {
  handleInitializeMuteOption(): void;

  handleCreateSong(song: Song): HTMLLIElement;

  handleShowSongs(vocaloid?: string): void;

  // handleInitializeList(): void;
}

class Game implements GameInterface {
  // globals
  isGameMuted = true;
  songs: Song[];
  scroll = 0;
  curSongId = 0;

  constructor(songs: Song[]) {
    this.songs = songs;
  }

  handleCreateSong = (song: Song): HTMLLIElement => {
    const songLi = document.createElement("li");
    songLi.className = "start__song";

    const songPic = document.createElement("div");
    songPic.className = "start__song-pic";

    const songImg = document.createElement("img");
    songImg.className = "start__song-img";
    songImg.src = song.img;

    songPic.appendChild(songImg);

    const songAbout = document.createElement("div");
    songAbout.className = "start__song-about";

    const songTitle = document.createElement("h1");
    songTitle.className = "start__song-title";
    songTitle.textContent = song.name;

    const songAuthorsContainer = document.createElement("div");
    songAuthorsContainer.className = "start__song-authors__container";

    const songAuthors = document.createElement("p");
    songAuthors.className = "start__song-authors";

    songAuthorsContainer.appendChild(songAuthors);

    for (const [index, author] of song.authors.entries()) {
      songAuthors.textContent += `${author}${
        index < song.authors.length - 1 ? "," : ""
      } `;
    }

    const songInfo = document.createElement("h5");
    songInfo.className = "start__song-info";

    if (song.info) {
      for (const [index, info] of song.info.entries()) {
        songInfo.innerHTML += `${info} ${
          index < song.info.length - 1 ? "&bull;" : ""
        } `;
      }
    }

    songAbout.appendChild(songTitle);
    songAbout.appendChild(songAuthorsContainer);
    songAbout.appendChild(songInfo);

    const songLevelOverlay = document.createElement("div");
    songLevelOverlay.className = "start__song-level__overlay";

    const songLvl = document.createElement("h5");
    songLvl.className = "start__song-lvl";
    songLvl.textContent = "lvl";

    const songLevel = document.createElement("p");
    songLevel.className = "start__song-level";
    songLevel.textContent = `${song.lvl.normal}`;

    songLevelOverlay.appendChild(songLvl);
    songLevelOverlay.appendChild(songLevel);

    songLi.appendChild(songPic);
    songLi.appendChild(songAbout);
    songLi.appendChild(songLevelOverlay);

    return songLi;
  };

  handleShowSongs = (vocaloid?: string): void => {
    const songs = document.querySelectorAll(".start__song");
    const songsList = document.querySelector(".start__songs-list");

    for (const song of songs) song.remove();

    if (!vocaloid) {
      for (const song of this.songs) {
        const songElem = this.handleCreateSong(song);

        songsList?.appendChild(songElem);
      }

      return;
    }

    this.songs = this.songs.filter((song) => song.authors.includes(vocaloid));

    for (const song of this.songs) {
      const songElem = this.handleCreateSong(song);

      songsList?.appendChild(songElem);
    }
  };

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

  // handleInitializeList = (): void => {
  //   const songList: HTMLElement | null =
  //     document.querySelector(".start__songs-list");

  //   const songs: NodeListOf<HTMLElement> =
  //     document.querySelectorAll(".start__song");

  //   // scroll algorithm

  //   const songAuthors: Element | null = document.querySelectorAll(
  //     ".start__song-authors"
  //   )[this.curSongId];

  //   songAuthors?.classList.add("start__song-authors--slide-animation");
  //   songs[this.curSongId].classList.add("start__song--selected");

  //   songList?.addEventListener("wheel", (event) => {
  //     event.preventDefault();
  //     this.scroll += 1;
  //     if (this.scroll % 12 !== 0) {
  //       return;
  //     }

  //     const prevSongAuthors: Element | null = document.querySelectorAll(
  //       ".start__song-authors"
  //     )[this.curSongId];

  //     const scrollAudio = new Audio();
  //     scrollAudio.src = "../../assets/song-scroll.mp3";

  //     if (event.deltaY > 0) {
  //       if (this.curSongId < songs.length - 1) {
  //         this.curSongId++;
  //         if (!this.isGameMuted && scrollAudio) scrollAudio.play();
  //       }

  //       songs[this.curSongId - 1].classList.remove("start__song--selected");
  //       songs[this.curSongId].classList.add("start__song--selected");

  //       const curSongAuthors: Element | null = document.querySelectorAll(
  //         ".start__song-authors"
  //       )[this.curSongId];

  //       prevSongAuthors?.classList.remove(
  //         "start__song-authors--slide-animation"
  //       );
  //       curSongAuthors?.classList.add("start__song-authors--slide-animation");

  //       const scrollAmount = 76;
  //       songList.scrollTo({
  //         top: songList.scrollTop + scrollAmount,
  //         left: 0,
  //         behavior: "smooth",
  //       });
  //     } else {
  //       if (this.curSongId > 0) {
  //         this.curSongId--;
  //         if (!this.isGameMuted && scrollAudio) scrollAudio.play();
  //       }

  //       songs[this.curSongId + 1].classList.remove("start__song--selected");
  //       songs[this.curSongId].classList.add("start__song--selected");

  //       const curSongAuthors: Element | null = document.querySelectorAll(
  //         ".start__song-authors"
  //       )[this.curSongId];

  //       prevSongAuthors?.classList.remove(
  //         "start__song-authors--slide-animation"
  //       );
  //       curSongAuthors?.classList.add("start__song-authors--slide-animation");

  //       const scrollAmount = -76;
  //       songList.scrollTo({
  //         top: songList.scrollTop + scrollAmount,
  //         left: 0,
  //         behavior: "smooth",
  //       });
  //     }
  //   });
  // };
}

export default Game;
