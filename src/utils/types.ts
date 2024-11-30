export type AlgorithmType = "DIJKSTRA" | "BFS" | "DFS";

export type MazeType = "NONE" | "BINARY_TREE" | "RANDOM" | "RECURSIVE_DIVISION";

export type TileType = {
    row: number;
    col: number;
    isEnd: boolean;
    isWall: boolean;
    isPath: boolean;
    distance: number;
    isStart: boolean;
    parent: TileType | null;
}
export type GridType = TileType[][];