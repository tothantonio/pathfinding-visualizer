import { Select } from "./Select";
import { usePathFinding } from "../hooks/usePathFinding";
import {
  EXTENDED_SLEEP_TIME,
  MAZES,
  PATHFINDING_ALGORITHMS,
  SLEEP_TIME,
  SPEEDS,
} from "../utils/constants";
import { AlgorithmType, MazeType } from "../utils/types";
import { resetGrid } from "../utils/resetGrid";
import { useTile } from "../hooks/useTile";
import { MutableRefObject, useState } from "react";
import { runMazeAlgorithm } from "../utils/runMazeAlgorithm";
import { useSpeed } from "../hooks/useSpeed";
import { runPathFindingAlgorithm } from "../utils/runPathFindingAlgorithm";
import { PlayButton } from "./PlayButton";
import { animatePath } from "../utils/animatePath";

export function Nav({
  isVisualizationRunningRef,
}: {
  isVisualizationRunningRef: MutableRefObject<boolean>;
}) {
  const {
    maze,
    setMaze,
    grid,
    setGrid,
    isGraphVisualized,
    setIsGraphVisualized,
    algorithm,
    setAlgorithm,
  } = usePathFinding();
  const { startTile, endTile } = useTile();
  const [isDisabled, setIsDisabled] = useState(false);
  const { speed } = useSpeed();

  const handleGenerateMaze = (maze: MazeType) => {
    if (maze === "NONE") {
      //reset grid
      setMaze(maze);
      resetGrid({ grid, startTile, endTile });
      return;
    }

    setMaze(maze);
    setIsDisabled(true);
    //runMazeAlgorithm
    runMazeAlgorithm({ maze, grid, startTile, endTile, setIsDisabled, speed });
    const newGrid = grid.slice();
    setGrid(newGrid);
    setIsGraphVisualized(false);
  };

  const handlerRunVisualizer = () => {
    if (isGraphVisualized) {
      setIsGraphVisualized(false);
      resetGrid({ grid: grid.slice(), startTile, endTile });
      return;
    }
    //run the algo
    const { traversedTiles, path } = runPathFindingAlgorithm({
      algorithm,
      grid,
      startTile,
      endTile,
    });
    animatePath(traversedTiles, path, startTile, endTile, speed);
    setIsDisabled(true);
    isVisualizationRunningRef.current = true;
    setTimeout(() => {
      const newGrid = grid.slice();
      setGrid(newGrid);
      setIsGraphVisualized(true);
      setIsDisabled(false);
      isVisualizationRunningRef.current = false;
    }, SLEEP_TIME * (traversedTiles.length + SLEEP_TIME * 2) + EXTENDED_SLEEP_TIME * (path.length + 60) * SPEEDS.find((s) => s.value === speed)!.value);
  };

  return (
    <div className="flex items-center justify-center min-h-[4.5rem] border-b shadow-gray-600 sm:px-5 px-0">
      <div className="flex items-center lg:justify-between juster-center w-full sm:w-[52rem]">
        <h1 className="lg:flex hidden w-[40%] text-2xl pl-1">
          Pathfinding Visualizer
        </h1>
        <div className="flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-3 sm:py-0 py-4 sm:space-x-4">
          <Select
            label="Maze"
            value={maze}
            options={MAZES}
            isDisabled={isDisabled}
            onChange={(e) => {
              //handle generating maze
              handleGenerateMaze(e.target.value as MazeType);
            }}
          />
          <Select
            label="Graph"
            value={algorithm}
            options={PATHFINDING_ALGORITHMS}
            isDisabled={isDisabled}
            onChange={(e) => {
              setAlgorithm(e.target.value as AlgorithmType);
            }}
          />
          <PlayButton
            isDisabled={isDisabled}
            isGraphVisualized={isGraphVisualized}
            handlerRunVisualizer={handlerRunVisualizer}
          />
        </div>
      </div>
    </div>
  );
}
