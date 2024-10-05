import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  initializeGame,
  selectTile,
  resetSelectedTiles,
  revealTile,
  checkMatch,
} from "@/store/slices/gameSlice";
import { RootState, AppDispatch } from "@/store";

import formatTime from "@/utils/formatTime";
import media from "@/utils/media";

import Tile from "../Tile";
import GameInfo from "../GameInfo";
import Message from "../Message";

const Board: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const gameState = useSelector((state: RootState) => state.game);

  const [isInitRender, setIsInitRender] = useState(true);

  const [time, setTime] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    setTime(0);

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (gameState.selectedTiles.length === 2) {
      setIsLocked(true);
      dispatch(checkMatch());

      setTimeout(() => {
        dispatch(resetSelectedTiles());
        setIsLocked(false);
      }, 800);
    }
  }, [gameState.selectedTiles]);

  const handleTileClick = (index: number) => {
    if (isInitRender) {
      setIsInitRender(false);
      return;
    }

    if (
      !isLocked &&
      !gameState.selectedTiles.includes(index) &&
      !gameState.matchedTiles.hasOwnProperty(index)
    ) {
      dispatch(revealTile(index));
      dispatch(selectTile(index));
    }
  };

  return (
    <StyledBoard>
      <GameInfo
        lives={gameState.lifes}
        time={gameState.gameStatus === "lost" ? "0:00" : formatTime(time)}
        onClick={() => {
          dispatch(initializeGame());
          setTime(0);
        }}
      />
      <ul className="board">
        {gameState.gameStatus === "playing" ? (
          gameState.tiles.map((tile, index) => (
            <Tile
              key={index}
              tile={tile}
              onClick={() => handleTileClick(index)}
            />
          ))
        ) : (
          <Message
            message={
              gameState.gameStatus === "won" ? "Вы выиграли!" : "Вы проиграли!"
            }
          />
        )}
      </ul>
    </StyledBoard>
  );
};

const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 642px;
  width: 100%;

  border: 3px solid ${(props) => props.theme.colorValues.black};
  border-radius: 8px;

  padding: 32px 48px;

  background-color: ${(props) => props.theme.colorValues.white};

  .board {
    position: relative;

    display: grid;
    grid-template-columns: repeat(4, minmax(110px, 1fr));
    grid-template-rows: repeat(4, minmax(130px, 1fr));
    gap: 20px;
  }

  ${media.desktop} {
    .board {
      grid-template-columns: repeat(4, minmax(70px, 1fr));
    }
  }

  ${media.mobile} {
    width: 100%;
    padding: 24px 20px;

    .board {
      grid-template-columns: repeat(4, minmax(50px, 1fr));
      grid-template-rows: repeat(4, minmax(100px, 1fr));

      gap: 10px;
    }
  }
`;

export default Board;
