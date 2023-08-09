let curSongId: number = 0;

let scroll: number = 0;

const scrollAudio: HTMLAudioElement = new Audio();
scrollAudio.src = "./src/assets/song-scroll.mp3";

const handleInitializeList = (): void => {
  const songList: HTMLElement | null =
    document.querySelector(".start__songs-list");

  const songs: NodeListOf<HTMLElement> | null =
    document.querySelectorAll(".start__song");

  if (songs.length === 0) return;

  songs[curSongId].classList.add("start__song--selected");

  songList?.addEventListener("wheel", (event) => {
    scroll += 1;
    if (scroll % 15 !== 0) {
      event.preventDefault();
      return;
    }

    if (event.deltaY > 0) {
      if (curSongId < songs.length - 1) {
        curSongId++;
        scrollAudio.play();
      }

      songs[curSongId - 1].classList.remove("start__song--selected");
      songs[curSongId].classList.add("start__song--selected");

      const scrollAmount = 76;
      songList.scrollTo({
        top: songList.scrollTop + scrollAmount,
        left: 0,
        behavior: "smooth",
      });

      return;
    }

    if (curSongId > 0) {
      curSongId--;
      scrollAudio.play();
    }

    songs[curSongId + 1].classList.remove("start__song--selected");
    songs[curSongId].classList.add("start__song--selected");

    const scrollAmount = -76;
    songList.scrollTo({
      top: songList.scrollTop + scrollAmount,
      left: 0,
      behavior: "smooth",
    });
  });
};

export default handleInitializeList;
