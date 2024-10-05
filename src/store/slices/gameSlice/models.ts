import { Tile } from "@/models/Tile";

export interface GameState {
  tiles: Tile[];
  selectedTiles: number[];
  matchedTiles: {
    [key: number]: boolean;
  };
  lifes: number;
  gameStatus: GameStatus;
}

export type GameStatus = "playing" | "won" | "lost";