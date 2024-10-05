import React from "react";
import styled from "styled-components";

import { Tile as TileType } from "@/models/Tile";

type PropsType = {
  tile: TileType;
  onClick: () => void;
};

const Tile: React.FC<PropsType> = ({ tile, onClick }) => {
  return (
    <StyledTile
      onClick={onClick}
      color={tile.color}
      $revealed={tile.revealed}
      $isVisible={tile.isVisible}
    >
      <div className="tile-inner">
        <div className="tile-front">?</div>
        <div className="tile-back" color={tile.color} />
      </div>
    </StyledTile>
  );
};

const StyledTile = styled.li<{
  $revealed: boolean;
  color: string;
  $isVisible: boolean;
}>`
  opacity: ${(props) => (props.$isVisible ? "1" : "0")};
  perspective: 1000px;
  width: 100%;
  height: 100%;

  user-select: none;

  transition: opacity 1s ease;

  .tile-inner {
    position: relative;

    width: 100%;
    height: 100%;

    transition: transform 0.7s ease;
    transform-style: preserve-3d;

    transform: ${(props) =>
      props.$revealed ? "rotateY(180deg)" : "rotateY(0)"};
    }

  .tile-front {
    ${(props) => props.theme.typography.fnSemiBold};
    ${(props) => props.theme.typography.fnTitle6};
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    border: 3px solid ${(props) => props.theme.colorValues.black};
    border-radius: 10px;

    background-color: ${(props) => props.theme.colorValues.primary};

    backface-visibility: hidden;
    cursor: ${(props) => (props.$isVisible ? "pointer" : "default")};

    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .tile-back {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.color};
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.colorValues.black};
    backface-visibility: hidden;
    transform: rotateY(180deg);
  }
`;


export default Tile;
