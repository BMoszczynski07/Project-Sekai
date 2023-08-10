import { isGameMuted } from "./mute";

let curSongId: number = 0;

let scroll: number = 0;

const handleInitializeList = (): void => {
  const songList: HTMLElement | null =
    document.querySelector(".start__songs-list");

  const songs: NodeListOf<HTMLElement> | null =
    document.querySelectorAll(".start__song");

  if (songs.length === 0) return;

  const songAuthors: Element | null = document.querySelectorAll(
    ".start__song-authors"
  )[curSongId];

  songAuthors?.classList.add("start__song-authors--slide-animation");

  songs[curSongId].classList.add("start__song--selected");

  songList?.addEventListener("wheel", (event) => {
    scroll += 1;
    if (scroll % 12 !== 0) {
      event.preventDefault();
      return;
    }

    const prevSongAuthors: Element | null = document.querySelectorAll(
      ".start__song-authors"
    )[curSongId];

    const scrollAudio = new Audio();
    scrollAudio.src = "../../assets/song-scroll.mp3";

    if (event.deltaY > 0) {
      if (curSongId < songs.length - 1) {
        curSongId++;
        if (!isGameMuted && scrollAudio) scrollAudio.play();
      }

      songs[curSongId - 1].classList.remove("start__song--selected");
      songs[curSongId].classList.add("start__song--selected");

      const curSongAuthors: Element | null = document.querySelectorAll(
        ".start__song-authors"
      )[curSongId];

      prevSongAuthors?.classList.remove("start__song-authors--slide-animation");
      curSongAuthors?.classList.add("start__song-authors--slide-animation");

      const scrollAmount = 76;
      songList.scrollTo({
        top: songList.scrollTop + scrollAmount,
        left: 0,
        behavior: "smooth",
      });
    } else {
      if (curSongId > 0) {
        curSongId--;
        if (!isGameMuted && scrollAudio) scrollAudio.play();
      }

      songs[curSongId + 1].classList.remove("start__song--selected");
      songs[curSongId].classList.add("start__song--selected");

      const curSongAuthors: Element | null = document.querySelectorAll(
        ".start__song-authors"
      )[curSongId];

      prevSongAuthors?.classList.remove("start__song-authors--slide-animation");
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

export default handleInitializeList;
