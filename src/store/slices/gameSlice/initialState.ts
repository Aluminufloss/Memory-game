import initializeTiles from "@/utils/initializeTiles";
import { GameState } from "./models";

export const initialState: GameState = {
  tiles: initializeTiles(),
  selectedTiles: [],
  matchedTiles: {},
  lifes: 20,
  gameStatus: "playing",
}