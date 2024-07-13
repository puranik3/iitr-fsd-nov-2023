import { APPLES, CELLSIZE } from './constants.js';

class Grid {
    constructor(game) {
        // set game, apples and call seed()
        console.log('grid created');

        this.game = game;
        this.apples = [ /* { x: 11, y: 16 }, */];
        this.seed();
    }

    seed() {
        // get required details from the game configuration
        const {
            level,
            numCellsX,
            numCellsY
        } = this.game.configuration;

        // calculate nbApples for the level
        const nbApples = (level + 1) * APPLES;

        // randomly generate cells for apples and add to apples[{ x, y }, ...] 
        for (let i = 0; i < nbApples; ++i) {
            const x = Math.floor(Math.random() * numCellsX);
            const y = Math.floor(Math.random() * numCellsY);
            this.apples.push({
                // x: x,
                // y: y 
                x,
                y
            })
        }

        console.log(this.apples);
    }

    paint(ctx) {
        // get required details from the game configuration
        const {
            width, // 1000
            height, // 400
            numCellsX, // 50
            numCellsY, // 20
            cellSize
        } = this.game.configuration;

        // set fillStyle ('black') and lineWidth
        ctx.fillStyle = 'black';
        ctx.lineWidth = 1;

        // vertical lines (use beginPath(), moveTo(), lineTo(), stroke())
        for (let x = 0; x <= width; x += 20) {
            ctx.moveTo(x, 0); // starting point of a vertical line
            ctx.lineTo(x, height); // end point
            ctx.stroke();
        }

        // horizontal lines
        for (let y = 0; y <= height; y += 20) {
            ctx.moveTo(0, y); // starting point of a horizontal line
            ctx.lineTo(width, y); // end point
            ctx.stroke();
        }

        // apples
        // set fillStyle ('red') and draw the apples
        ctx.fillStyle = 'red';
        this.apples.forEach((apple) => {
            ctx.fillRect(apple.x * cellSize, apple.y * cellSize, cellSize, cellSize);
        });
    }

    isApple(cell) {
        // return true/false (or object/null) based on whether cell has an apple (use find())
        return this.apples.find(apple => apple.x === cell.x && apple.y === cell.y)
    }

    eat(cell) {
        // remove apple at cell (use filter(), and reset apples[])
        this.apples = this.apples.filter(apple => apple.x !== cell.x && apple.y !== cell.y);
    }

    isDone() {
        // done if there are no apples
        return this.apples.length === 0;
    }

    isOutside(cell) {
        const {
            numCellsX, // 50
            numCellsY // 20
        } = this.game.configuration;

        return cell.x < 0 || cell.x >= numCellsX || cell.y < 0 || cell.y >= numCellsY;
    }
}

// export the Grid class (default)
export default Grid;