import Difficulty from "./Difficulty";
import Song from "./SongType";
import Vocaloid from "./VocaloidType";

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

  handlePickDifficulty(difficulty: Difficulty): void;

  handleViewSong(): void;

  handleCreateIcon(type: string): HTMLLIElement;

  handleCreateBadge(type: string, desc: string | number): HTMLElement;

  handleShowMusicVideo(): void;
}

export default GameInterface;
