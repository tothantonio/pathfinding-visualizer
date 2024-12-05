export type AlgorithmType = "BFS" | "DFS" |"DIJKSTRA";
export type AlgorithmSelectType = {
  name: string;
  value: AlgorithmType;
}

export type MazeType = "NONE" | "RECURSIVE_DIVISION" | "KRUSKAL" | "BINARY_TREE";
export interface MazeSelectType {
  name: string;
  value: MazeType;
}

export type TileType = {
  row: number;
  col: number;
  isEnd: boolean;
  isWall: boolean;
  isPath: boolean;
  distance: number;
  isTraversed: boolean;
  isStart: boolean;
  parent: TileType | null;
};
export type GridType = TileType[][];

export type SpeedType = 2 | 1 | 0.5;
export interface SpeedSelectType {
    name: string;
    value: SpeedType;
}
