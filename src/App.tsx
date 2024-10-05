import styled from "styled-components";

import media from "./utils/media";

import Board from "./components/Board";

function App() {
  return (
    <AppContainer>
      <Board />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background: radial-gradient(
    circle at 10% 20%,
    rgb(59, 149, 237) 0%,
    rgb(7, 91, 173) 90%
  );

  overflow-y: hidden;

  ${media.desktop} {
    padding: 20px;
  }
`;

export default App;
