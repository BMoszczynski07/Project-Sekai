import Game from "./Game";

interface ModalInterface {
  handleModalOpen(): void;

  handleModalClose(): void;
}

class AppModal extends Game implements ModalInterface {
  handleModalOpen(): void {}

  handleModalClose(): void {}
}

export default AppModal;
