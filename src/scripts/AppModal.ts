import Game from "./Game";

interface ModalInterface {
  handleModalOpen(modal: HTMLElement): void;

  handleModalClose(modal: HTMLElement): void;
}

abstract class AppModal extends Game implements ModalInterface {
  handleModalOpen(modal: HTMLElement): void {
    modal.style.display = "block";
  }

  handleModalClose(modal: HTMLElement): void {
    modal.style.display = "none";
  }
}

export default AppModal;
