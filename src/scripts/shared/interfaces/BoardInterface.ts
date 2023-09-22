import CorrespondingNotes from "../types/CorrespondingNotes";

interface BoardInterface {
  correspondingNotes: CorrespondingNotes<number>;

  handleGetPanelPos(): number | void;
}

export default BoardInterface;
