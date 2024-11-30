import { PathFindingProvider } from "./context/PathFindingContext";
import { TileProvider } from "./context/TileContext";

function App() {
  return (
    <PathFindingProvider>
      <TileProvider>
        <h1 className="text-3xl font-bold underline h-screen w-screen bg-blue-500">
          Hello world!
        </h1>
      </TileProvider>
    </PathFindingProvider>
  );
}

export default App;
