import { SPEEDS, WALL_TILE_STYLE } from "../../../utils/constants";
import { getRandInt, isEqual, sleep } from "../../../utils/helpers";
import { GridType, TileType, SpeedType } from "../../../utils/types";
import recursiveDivision from "./recursiveDivision";

export async function horizontalDivision({
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
  const makeWall = row + getRandInt(0, height - 1) * 2 + 1;
  const makePassage = col + getRandInt(0, width) * 2;

  for (let i = 0; i < 2 * width - 1; i++) {
    if (makePassage !== col + i) {
      if (
        !isEqual(grid[makeWall][col + i], startTile) &&
        !isEqual(grid[makeWall][col + i], endTile)
      ) {
        grid[makeWall][col + i].isWall = true;

        document.getElementById(
          `${makeWall}-${col + i}`
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
    height: (makeWall - row + 1) / 2,
    width,
    setIsDisabled,
    speed,
  });

  await recursiveDivision({
    grid,
    startTile,
    endTile,
    row: makeWall + 1,
    col,
    height: height - (makeWall - row + 1) / 2,
    width,
    setIsDisabled,
    speed,
  });
}
