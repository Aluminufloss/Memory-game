import styled from "styled-components";

import media from "@/utils/media";

type PropsType = {
  lives: number;
  time: string;
  onClick: () => void;
};

const GameInfo: React.FC<PropsType> = (props) => {
  return (
    <StyledGameInfo>
      <button className="button" onClick={props.onClick}>
        Начать заново
      </button>
      <div className="info">
        <h3 className="lifes">Жизни: {props.lives}❤️</h3>
        <h3 className="time">Время: {props.time}⏳</h3>
      </div>
    </StyledGameInfo>
  );
};

const StyledGameInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 24px;

  .button {
    ${(props) => props.theme.typography.fnMedium};
    ${(props) => props.theme.typography.fnTitle2};
    color: ${(props) => props.theme.colorValues.white};

    padding: 10px 20px;

    border: 2px solid ${(props) => props.theme.colorValues.black};
    border-radius: 8px;

    background-color: ${(props) => props.theme.colorValues.secondary};

    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.02);
      background-color: ${(props) => props.theme.colorValues.secondaryHover};
    }

    &:active {
      transform: scale(0.98);
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  .lifes {
    ${(props) => props.theme.typography.fnMedium};
    ${(props) => props.theme.typography.fnTitle5};
    color: ${(props) => props.theme.colorValues.black};

    margin-bottom: 12px;
  }

  .time {
    ${(props) => props.theme.typography.fnMedium};
    ${(props) => props.theme.typography.fnTitle5};
    color: ${(props) => props.theme.colorValues.black};
  }

  ${media.desktop} {
    .button {
      padding: 8px 12px;
    }

    .lifes, .time {
      ${(props) => props.theme.typography.fnTitle4};
    }

    .lifes {
      margin-bottom: 4px;
    }
  }

  ${media.mobile} {
    .button {
      padding: 4px 8px;

      ${(props) => props.theme.typography.fnTitle1};
    }

    .lifes, .time {
      ${(props) => props.theme.typography.fnTitle2};
    }
  }
`;

export default GameInfo;
