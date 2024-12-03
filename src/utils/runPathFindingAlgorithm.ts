import { bfs } from "../lib/algorithms/pathfinding/bfs";
import { AlgorithmType, GridType, TileType } from "./types";
import { dfs } from "../lib/algorithms/pathfinding/dfs";

export const runPathFindingAlgorithm = ({
  algorithm,
  grid,
  startTile,
  endTile,
}: {
  algorithm: AlgorithmType;
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
}) => {
  switch (algorithm) {
    case "BFS":
      return bfs(grid, startTile, endTile);
    case "DFS":
      return dfs(grid, startTile, endTile);
    default:
      return bfs(grid, startTile, endTile);
  }
};
