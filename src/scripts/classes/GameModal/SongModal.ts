import AppModal from "./shared/interfaces/AppModal";
import SongModalInterface from "./shared/interfaces/SongModalInterface";

class SongModal extends AppModal implements SongModalInterface {
  // handleCreateBadge(type: string, desc: string | number): HTMLElement {}

  handleUpdateSong(): void {}
}

export default SongModal;
