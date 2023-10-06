import testRhythm from "../../shared/data/testrhythm";
import CorrespondingNotes from "../../shared/types/CorrespondingNotes";
import Game from "../MainPage/Game";

type Size = "mini" | "regular";

abstract class BoardContainer extends Game {
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

  public notesNodeList: NodeListOf<HTMLElement> | null =
    document.querySelectorAll(".board__lane-field");

  public gameVelocity = 10;

  public handleGenerateBoard(ref: HTMLElement, boardSize: Size): void {
    // removing all board's elements
    while (ref.firstChild) {
      ref.removeChild(ref.firstChild);
    }

    // Tworzenie głównego kontenera
    const boardContainer = document.createElement("div");
    boardContainer.classList.add("board__lanes", `board__lanes--${boardSize}`);

    // Tworzenie board__fields
    const boardFields = document.createElement("div");
    boardFields.classList.add("board__fields");

    // Tworzenie mini-lanes
    for (let i = 0; i < 12; i++) {
      const miniLane = document.createElement("div");
      miniLane.classList.add("board__lane", `board__lane--${boardSize}`);
      boardContainer.appendChild(miniLane);

      const laneField = document.createElement("div");
      laneField.classList.add(
        "board__lane-field",
        `board__lane-field--${boardSize}`
      );
      boardFields.appendChild(laneField);
    }

    boardContainer.appendChild(boardFields);

    // Tworzenie board__notes-container
    const notesContainer = document.createElement("div");
    notesContainer.classList.add("board__notes-container");

    // Tworzenie notes-panel
    const notesPanel = document.createElement("div");
    notesPanel.classList.add("board__notes-panel", "board__notes-panel--test");

    // Tworzenie notes
    const note = document.createElement("span");
    note.classList.add(
      "board__note",
      "board__note--regular",
      "board__note--test"
    );

    // Dodawanie notes do notes-panel
    notesPanel.appendChild(note);
    notesContainer.appendChild(notesPanel);
    boardContainer.appendChild(notesContainer);

    // Dodawanie całej struktury do przekazanego elementu ref
    ref.appendChild(boardContainer);
  }

  public handleCalculateTapAccuracy(
    boardPos: number,
    noteId: number
  ): number | void {
    let accuracy: number;

    if (testRhythm.range[0] > noteId || testRhythm.range[1] < noteId) return;

    accuracy = (96 - boardPos) * 0.25;
    accuracy = parseFloat(accuracy.toFixed(1));

    const board = document.querySelector(".board__lanes");
    const panel: HTMLElement | null = document.querySelector(
      ".board__notes-panel"
    );

    if (!board || !panel) return;

    return accuracy;
  }

  public handleGetPanelPos(): number | void {
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
