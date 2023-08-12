import Difficulty from "./shared/Difficulty";
import Song from "./shared/SongType";
import Vocaloid from "./shared/VocaloidType";

interface GameInterface {
  handleInitializeMuteOption(): void;

  handleCreateSong(song: Song, index: number): HTMLLIElement;

  handleShowSongs(vocaloid?: string | null): void;

  handleInitializeList(): void;

  handleListScroll(
    e: any,
    scrollAmount: number,
    songList: Element | null
  ): void;

  handleListWheel(e: any): void;

  handleCreateVocaloid(
    vocaloid: Vocaloid,
    vocaloidType: "regular" | "all"
  ): HTMLLIElement;

  handleShowVocaloids(): void;
}

class Game implements GameInterface {
  // globals
  isGameMuted = true;

  songs: Song[];
  songsLoaded: Song[];

  chosenDifficulty: Difficulty = "hard";

  vocaloids: Vocaloid[];

  scroll = 0;
  curSongId = 0;

  constructor(songs: Song[], vocaloids: Vocaloid[]) {
    this.songs = songs;
    this.songsLoaded = songs;
    this.vocaloids = vocaloids;
  }

  handleCreateVocaloid = (
    vocaloid: Vocaloid,
    vocaloidType: "regular" | "all"
  ): HTMLLIElement => {
    const liElement = document.createElement("li");
    liElement.classList.add("start__vocaloid");

    if (vocaloidType === "all") {
      liElement.classList.add(
        "start__vocaloid--all",
        "start__vocaloid--selected"
      );
      const allVocaloidName = document.createElement("header");
      allVocaloidName.classList.add(
        "start__vocaloid-name",
        "start__vocaloid--all__name"
      );
      allVocaloidName.textContent = "All Vocaloids";
      liElement.appendChild(allVocaloidName);
    } else {
      liElement.setAttribute("data-vocaloid", vocaloid.name);

      const profileDiv = document.createElement("div");
      profileDiv.classList.add("start__vocaloid-profile");

      const pfpImg = document.createElement("img");
      if (vocaloid.img) pfpImg.src = vocaloid.img;
      pfpImg.classList.add("start__vocaloid-pfp");
      profileDiv.appendChild(pfpImg);

      const infoDiv = document.createElement("div");
      infoDiv.classList.add("start__vocaloid-info");

      const nameHeader = document.createElement("header");
      nameHeader.classList.add("start__vocaloid-name");
      nameHeader.textContent = vocaloid.name;

      const descP = document.createElement("p");
      descP.classList.add("start__vocaloid-desc");
      if (vocaloid.desc) descP.textContent = vocaloid.desc;

      const badgesUl = document.createElement("ul");
      badgesUl.classList.add("start__vocaloid-badges");

      if (vocaloid.badges)
        for (const badgeText of vocaloid.badges) {
          const badgeLi = document.createElement("li");

          let badgeClass: string | undefined;

          switch (badgeText.type) {
            case "Release Date":
              badgeClass = "start__badge--release";
              break;
            case "Height":
              badgeClass = "start__badge--height";
              break;
            case "Age":
              badgeClass = "start__badge--age";
              break;
          }

          badgeLi.classList.add(`start__vocaloid-badge`);
          badgeLi.classList.add(badgeClass || "unknown");
          badgeLi.textContent += badgeText.type;
          badgeLi.textContent += ` ${badgeText.desc}`;
          badgesUl.appendChild(badgeLi);
        }

      infoDiv.appendChild(nameHeader);
      infoDiv.appendChild(descP);
      infoDiv.appendChild(badgesUl);

      liElement.appendChild(profileDiv);
      liElement.appendChild(infoDiv);
    }

    return liElement;
  };

  handleShowVocaloids(): void {
    const vocaloidsList = document.querySelector(".start__vocaloids-list");

    for (const vocaloid of this.vocaloids) {
      const vocaloidElem =
        vocaloid.name === "All Vocaloids"
          ? this.handleCreateVocaloid(vocaloid, "all")
          : this.handleCreateVocaloid(vocaloid, "regular");

      vocaloidsList?.appendChild(vocaloidElem);
    }
  }

  handleCreateSong = (song: Song, index: number): HTMLLIElement => {
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
    songAuthors.className = `start__song-authors ${
      index === 0 ? "start__song-authors--slide-animation" : ""
    }`;

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
        songInfo.innerHTML += `${info.type}: ${info.desc} ${
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
    if (this.chosenDifficulty !== "auto")
      songLevel.textContent = `${song.lvl[this.chosenDifficulty]}`;
    else {
      songLevel.textContent = "--";
      songLvl.style.color = "#606060";
      songLevel.style.color = "#878787";
    }

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
    this.scroll++;

    if (this.scroll % 12 !== 0) return;

    const scrollAudio = new Audio();
    scrollAudio.src = "../../assets/song-scroll.mp3";

    const prevAudioElement =
      document.querySelectorAll(".start__song")[this.curSongId];

    const prevAuthors = document.querySelectorAll(".start__song-authors")[
      this.curSongId
    ];

    if (e.deltaY > 0) {
      if (this.curSongId === this.songs.length - 1) return;
      this.curSongId++;

      const curAudioElement =
        document.querySelectorAll(".start__song")[this.curSongId];
      curAudioElement.classList.add("start__song--selected");

      prevAuthors.classList.remove("start__song-authors--slide-animation");
      prevAudioElement.classList.remove("start__song--selected");

      const curAuthors = document.querySelectorAll(".start__song-authors")[
        this.curSongId
      ];
      curAuthors.classList.add("start__song-authors--slide-animation");

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

    const curAudioElement =
      document.querySelectorAll(".start__song")[this.curSongId];
    curAudioElement.classList.add("start__song--selected");

    prevAuthors.classList.remove("start__song-authors--slide-animation");
    prevAudioElement.classList.remove("start__song--selected");

    const curAuthors = document.querySelectorAll(".start__song-authors")[
      this.curSongId
    ];
    curAuthors.classList.add("start__song-authors--slide-animation");

    songList?.scrollTo({
      top: songList.scrollTop - scrollAmount,
      left: 0,
      behavior: "smooth",
    });

    if (!this.isGameMuted) scrollAudio.play();

    return;
  };

  handleListWheel = (e: any): void => {
    const songList = document.querySelector(".start__songs-list");

    this.handleListScroll(e, 76, songList);
  };

  handleInitializeList = (): void => {
    const songList = document.querySelector(".start__songs-list");

    this.curSongId = 0;

    const firstSong = document.querySelectorAll(".start__song")[this.curSongId];
    firstSong.classList.add("start__song--selected");

    console.log(this.songsLoaded);

    if (this.songsLoaded.length > 1)
      songList?.addEventListener("wheel", this.handleListWheel);
  };

  handleShowSongs = (vocaloid: string | null): void => {
    const allSongs = document.querySelectorAll(".start__song");
    const allVocaloids = document.querySelectorAll(".start__vocaloid");
    const songList = document.querySelector(".start__songs-list");

    songList?.removeEventListener("wheel", this.handleListWheel);

    for (const vocaloid of allVocaloids)
      vocaloid.classList.remove("start__vocaloid--selected");

    const selectedVocaloid = document.querySelector(
      vocaloid ? `[data-vocaloid="${vocaloid}"]` : ".start__vocaloid--all"
    );
    selectedVocaloid?.classList.add("start__vocaloid--selected");

    for (const song of allSongs) song.remove();

    const emptyHeader = document.querySelector(".start__empty-list");
    emptyHeader?.remove();

    if (songList) songList.scrollTop = 0;

    if (vocaloid !== null) {
      console.log(vocaloid);

      this.songsLoaded = [
        ...this.songs.filter((song) => song.authors.includes(vocaloid)),
      ];
    } else this.songsLoaded = this.songs;

    if (this.songsLoaded.length === 0) {
      const emptyHeader = document.createElement("h1");
      emptyHeader.className = "start__empty-list";
      emptyHeader.textContent = "Lista nie zawiera piosenek!";

      songList?.appendChild(emptyHeader);
      return;
    }

    for (const [index, song] of this.songsLoaded.entries()) {
      const songElem = this.handleCreateSong(song, index);

      songList?.appendChild(songElem);
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
