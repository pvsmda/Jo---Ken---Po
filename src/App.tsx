import { BrowserRouter } from "react-router-dom";
import { Principal } from "./components";
import { PlayProvider } from "./contexts";
import { AppRoutes } from "./routes";

function App() {
  return (
    <PlayProvider>
      <BrowserRouter>
        <Principal>
          <AppRoutes />
        </Principal>
      </BrowserRouter>
    </PlayProvider>
  );
}

export default App;
