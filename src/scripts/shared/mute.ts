export let isGameMuted: boolean = true;

const handleInitializeMuteOption = (): void => {
  const muteBtn: HTMLButtonElement | null =
    document.querySelector(".start__mute-i");

  const mute: HTMLElement | null = document.querySelector(
    ".start__mute-i__muted"
  );

  muteBtn?.addEventListener("click", () => {
    isGameMuted = !isGameMuted;

    if (mute) mute.style.opacity = isGameMuted ? "1" : "0";
  });
};

export default handleInitializeMuteOption;
