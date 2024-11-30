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
- `types.ts` defines types used in the application(AlgorithmType, MazeType, TileType, GridType)

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