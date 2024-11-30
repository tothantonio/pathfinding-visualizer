import { PathFindingProvider } from "./context/PathFindingContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";

function App() {
  return (
    <PathFindingProvider>
      <TileProvider>
        <SpeedProvider>
          <h1 className="text-3xl font-bold underline h-screen w-screen bg-blue-500">
            Hello world!
          </h1>
        </SpeedProvider>
      </TileProvider>
    </PathFindingProvider>
  );
}

export default App;
