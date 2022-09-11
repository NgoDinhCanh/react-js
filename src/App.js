import "./App.css";
import Game from "./components/tictactoe/Game";
import GameUseReducer from "./components/useReducer/tictactoe/Game";

function App() {
  return (
    <>
      <Game></Game>
      <GameUseReducer></GameUseReducer>
    </>
  );
}

export default App;
