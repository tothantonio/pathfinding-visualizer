import { SPEEDS, WALL_TILE_STYLE } from "../../../utils/constants";
import { getRandInt, isEqual, sleep } from "../../../utils/helpers";
import { GridType, SpeedType, TileType } from "../../../utils/types";
import recursiveDivision from "./recursiveDivision";

export async function verticalDivision({
  grid,
  startTile,
  endTile,
  row,
  col,
  height,
  width,
  setIsDisabled,
  speed,
}: {
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
  row: number;
  col: number;
  height: number;
  width: number;
  setIsDisabled: (isDisabled: boolean) => void;
  speed: SpeedType;
}) {
  const makeWall = col + getRandInt(0, width - 1) * 2 + 1;
  const makePassage = row + getRandInt(0, height) * 2;

  for (let i = 0; i < 2 * height - 1; i++) {
    if (makePassage !== row + i) {
      if (
        !isEqual(grid[row + i][makeWall], startTile) &&
        !isEqual(grid[row + i][makeWall], endTile)
      ) {
        grid[row + i][makeWall].isWall = true;

        document.getElementById(
          `${row + i}-${makeWall}`
        )!.className = `${WALL_TILE_STYLE} animate-wall`;
        await sleep(10 * SPEEDS.find((s) => s.value === speed)!.value - 5);
      }
    }
  }

  await recursiveDivision({
    grid, 
    startTile,
    endTile,
    row,
    col,
    height,
    width: (makeWall - col + 1) / 2,
    setIsDisabled,
    speed,
  });

  await recursiveDivision({
    grid,
    startTile,
    endTile,
    row,
    col: makeWall + 1,
    height,
    width: width - (makeWall - col + 1) / 2,
    setIsDisabled,
    speed,
  });
}
