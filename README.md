### Pathfinding Visualizer project in React + TypeScript + Vite

![demo](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm0zYm4zYWxmdHBnN21tZzJ6M2M1dHd2NGx5MTAwMWNjMWd2aHQwbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vfKzcbKshehxtoUUro/giphy.webp)

## Table of Contents

1. [Introduction](#introduction)
2. [Components](#components)
  - App
  - Nav
  - Grid
  - Tile
  - Select
  - PlayButton
  - Footer
3. [Context](#context)
  - PathFindingContext
  - SpeedContext
  - TileContext
4. [Hooks](#hooks)
  - usePathFinding
  - useSpeed
  - useTile
5. [Utilities](#utilities)
  - constants
  - helpers
  - resetGrid
  - animatePath
6. [Algorithms](#algorithms)
  - PathFinding Algorithms
    - BFS
    - DFS
    - Dijkstra
  - Maze Generation Algorithms
    - Recursive Division
    - Binary Tree
7. [Running the project](#running-the-project)

# Introduction
The Pathfinding Visualizer is a web application that allows users to visualize various pathfinding algorithms and maze generation techniques. It provides an interactive grid where users can place start and end points, walls, and see the algorithms in action. I chose **Vite** as framework because it provides fast and efficient development experience for web apps. It found it easy to configure, providing a simple and intuitive configuration system.

# Components
`App.tsx` - The main component that wraps the entire application with necessary providers and renders the main layout including the navigation bar, grid, theme switch, and footer.

`Nav.tsx` - The navigation component that includes UI elements for selecting a maze, pathfinding algorithm, speed, and a play button to run the visualizer.

`Grid.tsx` - The grid component that renders the grid of tiles. It handles mouse events for placing walls and updating the grid state.

`Tile.tsx` - The tile component that represents a single cell in the grid. It handles mouse events and updates its appearance based on its state.

`Select.tsx` - A reusable select component that displays a dropdown menu with options.

`PlayButton.tsx` - A button component that starts the pathfinding visualization.

# Context
`PathFindingContext.tsx` - Provides the state and functions related to pathfinding algorithms and the grid.

`SpeedContext.tsx` - Provides the state and functions related to the speed of the visualization.

`TileContext.tsx` - Provides the state and functions related to the start and end tiles.

# Hooks
`usePathFinding.ts` - A custom hook that provides access to the pathfinding context.

`useSpeed.ts` - A custom hook that provides access to the speed context.

`useTile.ts` - A custom hook that provides access to the tile context.

# Utilities
`constants.ts` - Defines constants used throughout the application, including algorithm options, maze options, tile styles, and speed settings.

`helpers.ts` - Provides helper functions for common tasks such as creating a new grid and checking if a tile is a start or end tile.

`resetGrid.ts` - Resets the grid to its initial state.

`animatePath.ts` - Animates the pathfinding process by updating the grid state over time.

# Algorithms
Pathfinding Algorithms:

`bfs.ts` - Implements the Breadth-First Search algorithm for finding the shortest path in an unweighted graph.

`dfs.ts` - Implements the Depth-First Search algorithm for exploring nodes by going as deep as possible along each branch before backtracking.

`dijskstra.ts` - Implements Dijkstra's algorithm for finding the shortest path in a weighted graph.

Maze Generation Algorithms

`recursiveDivision.ts` - Implements the Recursive Division algorithm for generating mazes by recursively dividing the grid into smaller sections.

`binaryTree.ts` - Implements the Binary Tree algorithm for generating mazes by randomly carving passages in a grid.

# Running the project

1. Install Dependencies
- npm install

2. Start the dev server
- npm start

3. Build for Production
- npm run build

4. Run tests:
- npm test

