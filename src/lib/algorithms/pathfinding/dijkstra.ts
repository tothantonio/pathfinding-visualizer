import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";
import { dropFromQueue, isEqual } from "../../../utils/helpers";
import { GridType, TileType } from "../../../utils/types";


export const dijkstra = (
    grid: GridType,
    startTile: TileType,
    endTile: TileType
) => {
    const traversedTiles = []
    const base = grid[startTile.row][startTile.col]
    base.distance = 0
    base.isTraversed = true
    const untraversedTiles = [base]

    while(untraversedTiles.length > 0) {
        untraversedTiles.sort((a, b) => a.distance - b.distance)
        const currTile = untraversedTiles.shift()
        if(currTile) {
            if(currTile.isWall) continue
            if(currTile.distance === Infinity) break
            currTile.isTraversed = true
            traversedTiles.push(currTile)
            if(isEqual(currTile, endTile)) break
            const neighbors = getUntraversedNeighbors(grid, currTile)
            for(let i = 0; i < neighbors.length; i++) {
                if(currTile.distance + 1 < neighbors[i].distance) {
                    dropFromQueue(untraversedTiles, neighbors[i])
                    neighbors[i].distance = currTile.distance + 1
                    neighbors[i].parent = currTile
                    untraversedTiles.push(neighbors[i])
                }
            }
        }
    }

    const path = []
    let curr = grid[endTile.row][endTile.col]
    while(curr != null) {
        curr.isPath = true
        path.unshift(curr)
        curr = curr.parent!
    }
    
    return { traversedTiles, path }
}