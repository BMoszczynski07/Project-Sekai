import AppModal from "./AppModal";
import SongModalInterface from "./shared/SongModalInterface";

class SongModal extends AppModal implements SongModalInterface {
  // handleCreateBadge(type: string, desc: string | number): HTMLElement {}

  handleUpdateSong(): void {}
}

export default SongModal;
