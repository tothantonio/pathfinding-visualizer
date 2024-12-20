// src/App.tsx
import { PathFindingProvider } from "./context/PathFindingContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";
import { Grid } from "./components/Grid";
import { useRef } from "react";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

function App() {
  const isVisualizationRunningRef = useRef(false);

  return (
      <PathFindingProvider>
        <TileProvider>
          <SpeedProvider>
            <div className="h-screen w-screen flex flex-col">
              <Nav isVisualizationRunningRef={isVisualizationRunningRef} />
              <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
              <div className="flex justify-center mt-4">
              </div>
              <Footer />
            </div>
          </SpeedProvider>
        </TileProvider>
      </PathFindingProvider>
  );
}

export default App;