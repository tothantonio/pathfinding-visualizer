import { isEqual } from "./helpers";
import { TileType } from "./types";

export const isInQueue = (queue: TileType[], tile: TileType) => {
  for (let i = 0; i < queue.length; i++) {
    if (isEqual(tile, queue[i])) return true;
  }
  return false;
};
