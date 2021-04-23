import Game from "./Game";
import { AppProvider } from "./context";

function App() {
  return (
    <AppProvider>
      <Game />
    </AppProvider>
  );
}

export default App;
