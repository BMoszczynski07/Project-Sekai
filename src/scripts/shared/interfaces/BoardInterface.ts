interface BoardInterface {
  handleGetPanelPos(): number | void;

  handleNotesListen(
    keyDown: (e: KeyboardEvent) => void,
    keyUp: (e: KeyboardEvent) => void
  ): void;
}

export default BoardInterface;
