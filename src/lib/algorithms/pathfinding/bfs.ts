import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";
import { isEqual } from "../../../utils/helpers";
import { isInQueue } from "../../../utils/isInQueue";
import { GridType, TileType } from "../../../utils/types";


export const bfs = (grid: GridType, startTile: TileType, endTile: TileType) => {
    const traversedTiles: TileType[] = [];
    const base = grid[startTile.row][startTile.col];
    base.distance = 0;
    base.isTraversed = true;
    const unTraversed = [base];

    while(unTraversed.length) {
        const currentTile = unTraversed.shift() as TileType;
        if(currentTile.isWall) continue;
        if(currentTile.distance === Infinity) break;
        currentTile.isTraversed = true;
        traversedTiles.push(currentTile);   
        if(isEqual(currentTile, endTile)) break;

        const neighbors = getUntraversedNeighbors(grid, currentTile);
        for(let i = 0; i < neighbors.length; i++) {
            if(!isInQueue(unTraversed, neighbors[i])) {
                const neighbor = neighbors[i];
                neighbor.distance = currentTile.distance + 1;
                neighbor.parent = currentTile;
                unTraversed.push(neighbor);
            }
        }
    }

    const path = [];
    let tile = grid[endTile.row][endTile.col];

    while(tile !== null) {
        tile.isPath = true;
        path.unshift(tile);
        tile = tile.parent!;
    }
    return { traversedTiles, path };
}