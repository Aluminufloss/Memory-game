import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import initializeTiles from "@/utils/initializeTiles";

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    initializeGame: (state) => {
      state.tiles = initializeTiles();
      state.selectedTiles = [];
      state.matchedTiles = {};
      state.lifes = initialState.lifes;
      state.gameStatus = initialState.gameStatus;
    },

    selectTile: (state, action: PayloadAction<number>) => {
      const selectedIndex = action.payload;
      if (
        state.selectedTiles.length === 2 ||
        state.matchedTiles.hasOwnProperty(selectedIndex)
      ) {
        return;
      }
      state.selectedTiles.push(selectedIndex);
    },

    revealTile: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.tiles[index].revealed = true;
    },

    checkMatch: (state) => {
      const [firstTile, secondTile] = state.selectedTiles;

      if (firstTile === undefined || secondTile === undefined) return;

      if (state.tiles[firstTile].color === state.tiles[secondTile].color) {
        state.matchedTiles[firstTile] = true;
        state.matchedTiles[secondTile] = true;
        state.tiles[firstTile].isVisible = false;
        state.tiles[secondTile].isVisible = false;

        if (Object.values(state.matchedTiles).length === 16) {
          state.gameStatus = "won";
        }
      } else {
        state.lifes -= 1;

        if (state.lifes === 0) {
          state.gameStatus = "lost";
        }
      }
    },

    resetSelectedTiles: (state) => {
      const [firstTile, secondTile] = state.selectedTiles;

      if (!firstTile && !secondTile) return;

      state.tiles[firstTile].revealed = false;
      state.tiles[secondTile].revealed = false;

      state.selectedTiles = [];
    },
  },
});

export const {
  initializeGame,
  selectTile,
  resetSelectedTiles,
  revealTile,
  checkMatch,
} = gameSlice.actions;

export default gameSlice.reducer;
