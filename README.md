### Pathfinding Visualizer project in React + TypeScript + Vite


## Table of Contents

1. [Introduction](#introduction)
2. Project Structure
3. Components
  - App
  - Nav
  - Grid
  - Tile
  - Select
  - PlayButton
  - Footer
4. Context
  - PathFindingContext
  - SpeedContext
  - TileContext
5. Hooks
  - usePathFinding
  - useSpeed
  - useTile
6. Utilities
  - constants
  - helpers
  - resetGrid
  - animatePath
7. Algorithms
  - PathFinding Algorithms
    - BFS
    - DFS
    - Dijkstra
  - Maze Generation Algorithms
    - Recursive Division
    - Binary Tree
8. Running the project

# Introduction
The Pathfinding Visualizer is a web application that allows users to visualize various pathfinding algorithms and maze generation techniques. It provides an interactive grid where users can place start and end points, walls, and see the algorithms in action.

# Project Structure

`
src/
├── components/
│   ├── App.tsx
│   ├── Nav.tsx
│   ├── Grid.tsx
│   ├── Tile.tsx
│   ├── Select.tsx
│   ├── PlayButton.tsx
│   ├── Footer.tsx
│   ├── ThemeSwitch.tsx
├── context/
│   ├── PathFindingContext.tsx
│   ├── SpeedContext.tsx
│   ├── TileContext.tsx
│   ├── ThemeContext.tsx
├── hooks/
│   ├── usePathFinding.ts
│   ├── useSpeed.ts
│   ├── useTile.ts
├── utils/
│   ├── constants.ts
│   ├── helpers.ts
│   ├── resetGrid.ts
│   ├── animatePath.ts
│   ├── runMazeAlgorithm.ts
│   ├── runPathFindingAlgorithm.ts
│   ├── mazeGenerators/
│   │   ├── recursiveDivision.ts
│   │   ├── binaryTree.ts
│   │   ├── kruskalMaze.ts
│   │   ├── primMaze.ts
│   ├── pathfinding/
│   │   ├── bfs.ts
│   │   ├── dfs.ts
│   │   ├── dijkstra.ts
├── index.css
├── main.tsx
├── tailwind.config.js
`