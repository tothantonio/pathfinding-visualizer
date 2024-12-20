import { AlgorithmSelectType, MazeSelectType, SpeedSelectType } from "./types";

export const MAX_ROWS = 39;
export const MAX_COLS = 49;

export const START_TILE_CONFIG = {
  row: 1,
  col: 1,
  isEnd: false,
  isWall: false,
  isPath: false,
  distance: 0,
  isStart: false,
  isTraversed: false,
  parent: null,
};

export const END_TILE_CONFIG = {
  row: MAX_ROWS - 2,
  col: MAX_COLS - 2,
  isEnd: false,
  isWall: false,
  isPath: false,
  distance: 0,
  isStart: false,
  isTraversed: false,
  parent: null,
};

export const TILE_STYLE =
  "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-sky-200";

export const TRAVERSED_TILE_STYLE = TILE_STYLE + " bg-blue-300";
export const START_TILE_STYLE = TILE_STYLE + " bg-green-400";
export const END_TILE_STYLE = TILE_STYLE + " bg-red-600";
export const WALL_TILE_STYLE = TILE_STYLE + " bg-gray-300";
export const PATH_TILE_STYLE = TILE_STYLE + " bg-green-600";

// src/utils/constants.ts
export const PATHFINDING_ALGORITHMS: AlgorithmSelectType[] = [
  { 
    name: "Breadth First Search", 
    value: "BFS", 
    description: "Unweighted, explores nodes level by level. Guarantees the shortest path in unweighted graphs." 
  },
  { 
    name: "Depth First Search", 
    value: "DFS", 
    description: "Unweighted, explores nodes by going as deep as possible along each branch before backtracking. Does not guarantee the shortest path." 
  },
  { 
    name: "Dijkstra's Algorithm", 
    value: "DIJKSTRA", 
    description: "Weighted, finds the shortest path. Uses a priority queue to explore nodes based on the smallest known distance from the start node." 
  },
];

export const MAZES: MazeSelectType[] = [
  { 
    name: "No Maze", 
    value: "NONE",
    description: "No maze is generated. The grid remains empty, allowing for manual wall placement."
  },
  { 
    name: "Recursive Division", 
    value: "RECURSIVE_DIVISION", 
    description: "Divides the grid recursively to create a maze. Creates long corridors and a balanced structure." 
  },
  { 
    name: "Binary Tree", 
    value: "BINARY_TREE", 
    description: "Creates a maze using the binary tree algorithm. Simple and fast, but tends to create diagonal bias." 
  },
];

export const SPEEDS: SpeedSelectType[] = [
  { name: "Slow", value: 2 },
  { name: "Average", value: 1 },
  { name: "Fast", value: 0.5 },
];

export const SLEEP_TIME = 8;
export const EXTENDED_SLEEP_TIME = 30;
