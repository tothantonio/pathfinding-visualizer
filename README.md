# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
`App.tsx` is the main application component.
It wraps the application in the `PathFindingProvider` and `TileProvider` and `SpeedProvider` context

`PathFindingContext.tsx` defines `PathFindingContext` and `PathFindingProvider`
Manages states for the pathfinding algorithm, maze type, grid and visualization status.
Uses `useState` to manage the state and `createContext` to create the context.

`usePathFinding.tsx` is a custom hook to acces `PathFindinContext`.
Ensures the hook is used within a `PathFindingProvider`.

- `constants.ts` defines constants used throughout the application
- `helpers.ts` contains helper functions for the application
- `types.ts` defines types used in the application(AlgorithmType, MazeType, TileType, GridType, SpeedType, SpeedSelectType)

`TileContext.tsx` defines the TileContext and TileProvider.
Manages states for the start and the end tiles.
Uses `useState` to manage the state and `createContext` to create the context.

`useTile.tsx` is a custom hook to acces the TileContext.

`SpeedContext.tsx` manages state for the speed of the pathfinding visualization.
Uses `useState` to manage state and `createContext` to create the context.

`useSpeed.tsx` is a custom hook to acces the `SpeedContext`.

`Grid.tsx` is a component that renders the grid for the pathfinding visualization.
It uses the `usePathFinding` hook to access the grid state from the `PathFindingContext`.
The grid is displayed as a series of rows and columns, with each cell represented by a `Tile` component.

`Tile.tsx` is a component that represents a single cell in the grid.
It receives properties such as `row`, `col`, `isEnd`, `isStart`, `isPath`, `isTraversed`, and `isWall` to determine its appearance.
The `Tile` component uses these properties to apply different styles, such as a green background for the start tile, a red background for the end tile, and other colors for different states.

`runMazeAlgorithm.ts` contains the runMazeAlgorithm function, which runs the selected maze algorithm on the grid. It currently supports the "BINARY_TREE" maze algorithm and uses the binaryTree function to generate the maze.

`createWall.ts` ontains the createWall function, which creates walls on the grid. It uses a delay based on the selected speed to animate the wall creation process

`binaryTree.ts` contains the implementation of the "Binary Tree" maze algorithm. The binaryTree function generates a maze using the binary tree algorithm and updates the grid accordingly. It also creates walls and destroys some of them to form the maze.

`Select.tsx` defines a Select component that renders a dropdown menu. It takes in props for the current value, change handler, options, label, and disabled state. It is used for selecting maze algorithms and speeds.

`PlayButton.tsx` defines a PlayButton component that renders a button to start or reset the visualization. It takes in props for the click handler, disabled state, and whether the graph is currently visualized. The button displays a play icon or a reset icon based on the visualization state.

`runMazeAlgorithm.ts`
This file contains the runMazeAlgorithm function, which selects and runs a maze generation algorithm based on the provided maze type. It supports two algorithms: BINARY_TREE and RECURSIVE_DIVISION. The function also handles enabling and disabling the UI during the maze generation process.

`constructBorder.ts`
This file contains the constructBorder function, which constructs a border of walls around the grid. It iterates over the grid's edges and marks the tiles as walls, except for the start and end tiles.

`verticalDivision.ts`
This file contains the verticalDivision function, which is part of the recursive division maze generation algorithm. It creates a vertical wall with a passage and then recursively divides the remaining sections.

`recursiveDivision.ts`
This file contains the recursiveDivision function, which is the main function for the recursive division maze generation algorithm. It decides whether to divide the grid horizontally or vertically based on the dimensions and then calls the respective division function.

`horizontalDivision.ts`
This file contains the horizontalDivision function, which is part of the recursive division maze generation algorithm. It creates a horizontal wall with a passage and then recursively divides the remaining sections.