import Song from "./shared/SongType";

interface GameInterface {
  handleInitializeMuteOption(): void;

  handleCreateSong(song: Song): HTMLLIElement;

  handleShowSongs(vocaloid?: string): void;

  handleInitializeList(): void;

  handleListScroll(
    e: any,
    scrollAmount: number,
    songList: Element | null
  ): void;
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

  handleListScroll = (
    e: any,
    scrollAmount: number,
    songList: Element | null
  ): void => {
    e.preventDefault();

    if (this.songs.length === 1) return;

    this.scroll++;

    if (this.scroll % 12 !== 0) return;

    const scrollAudio = new Audio();
    scrollAudio.src = "../../assets/song-scroll.mp3";

    const prevAudioElement =
      document.querySelectorAll(".start__song")[this.curSongId];

    if (e.deltaY > 0) {
      if (this.curSongId === this.songs.length - 1) return;
      this.curSongId++;

      prevAudioElement.classList.remove("start__song--selected");

      const curAudioElement =
        document.querySelectorAll(".start__song")[this.curSongId];
      curAudioElement.classList.add("start__song--selected");

      songList?.scrollTo({
        top: songList.scrollTop + scrollAmount,
        left: 0,
        behavior: "smooth",
      });

      if (!this.isGameMuted) scrollAudio.play();

      return;
    }

    if (this.curSongId === 0) return;
    this.curSongId--;

    prevAudioElement.classList.remove("start__song--selected");

    const curAudioElement =
      document.querySelectorAll(".start__song")[this.curSongId];
    curAudioElement.classList.add("start__song--selected");

    songList?.scrollTo({
      top: songList.scrollTop - scrollAmount,
      left: 0,
      behavior: "smooth",
    });

    if (!this.isGameMuted) scrollAudio.play();

    return;
  };

  handleInitializeList = (): void => {
    const songList = document.querySelector(".start__songs-list");

    songList?.removeEventListener("wheel", (e: any) => {
      this.handleListScroll(e, 76, songList);
    });

    this.curSongId = 0;

    const firstSong = document.querySelectorAll(".start__song")[this.curSongId];
    firstSong.classList.add("start__song--selected");

    songList?.addEventListener("wheel", (e: any) => {
      this.handleListScroll(e, 76, songList);
    });
  };

  handleShowSongs = (vocaloid?: string): void => {
    const songs = document.querySelectorAll(".start__song");
    const songsList = document.querySelector(".start__songs-list");

    for (const song of songs) song.remove();

    if (vocaloid)
      this.songs = this.songs.filter((song) => song.authors.includes(vocaloid));

    if (this.songs.length === 0) {
      const emptyHeader = document.createElement("h1");
      emptyHeader.className = "start__empty-list";
      emptyHeader.textContent = "Lista nie zawiera piosenek!";

      songsList?.appendChild(emptyHeader);
      return;
    }

    const emptyHeader = document.querySelector(".start__empty-list");
    emptyHeader?.remove();

    for (const song of this.songs) {
      const songElem = this.handleCreateSong(song);

      songsList?.appendChild(songElem);
    }

    this.handleInitializeList();
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
}

export default Game;
