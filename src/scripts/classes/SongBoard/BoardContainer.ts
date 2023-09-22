import BoardInterface from "../../shared/interfaces/BoardInterface";
import CorrespondingNotes from "../../shared/types/CorrespondingNotes";
import Game from "../MainPage/Game";

abstract class BoardContainer extends Game implements BoardInterface {
  public correspondingNotes: CorrespondingNotes<number> = {
    q: 0,
    w: 1,
    e: 2,
    r: 3,
    t: 4,
    y: 5,
    u: 6,
    i: 7,
    o: 8,
    p: 9,
    "[": 10,
    "]": 11,
  };

  public gameVelocity = 10;

  handleGetPanelPos(): number | void {
    const panel: HTMLElement | null = document.querySelector(
      ".board__notes-panel"
    );

    if (!panel) return;

    const getPos = window
      .getComputedStyle(panel)
      .getPropertyValue("transform")
      .split(",")[5]
      .trim();

    return parseFloat(getPos);
  }
}

export default BoardContainer;
