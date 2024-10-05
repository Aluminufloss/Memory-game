import shuffle from "./shuffle";

import { Tile } from "../models/Tile";
import { COLORS } from "./constants";

export default function initializeTiles(): Tile[] {
  let tiles = COLORS.concat(COLORS);

  tiles = shuffle(tiles);

  return tiles.map((color, index) => ({
    id: index,
    color,
    revealed: false,
    isVisible: true,
  }));
}