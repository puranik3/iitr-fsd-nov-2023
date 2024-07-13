import { Directions } from './constants.js';

class Worm {
    // define static data member - INITIAL_SIZE, INITIAL_DIRECTION, INITIAL_POSITION
    // code...

    constructor(game) {
        // define game, size, direction, head, tail
        console.log('worm created');
        this.game = game;

        this.size = 3;
        this.direction = Directions.RIGHT;
        this.head = {
            x: 1,
            y: 1
        };
        this.tail = [];
        // this.tail = [
        //     { x: 1, y: 1 },
        //     { x: 2, y: 1 },
        //     { x: 3, y: 1 },
        // ];
    }

    paint(context) {
        // get required details from the game configuration
        const { cellSize: cellSideLength } = this.game.configuration;

        // paint the head with the eye
        const size = cellSideLength / 10;
        const offset = cellSideLength / 3;
        const x = cellSideLength * this.head.x;
        const y = cellSideLength * this.head.y;

        context.fillStyle = "#111111";
        context.fillRect(x, y, cellSideLength, cellSideLength);

        // paint the eyes
        switch (this.direction) {
            case Directions.UP:
                context.beginPath();
                context.arc(x + offset, y + offset, size, 0, 2 * Math.PI);
                context.arc(x + 2 * offset, y + offset, size, 0, 2 * Math.PI);
                context.fillStyle = "white";
                context.fill();
                break;
            case Directions.DOWN:
                context.beginPath();
                context.arc(x + offset, y + 2 * offset, size, 0, 2 * Math.PI);
                context.arc(x + 2 * offset, y + 2 * offset, size, 0, 2 * Math.PI);
                context.fillStyle = "white";
                context.fill();
                break;
            case Directions.RIGHT:
                context.beginPath();
                context.arc(x + 2 * offset, y + offset, size, 0, 2 * Math.PI);
                context.arc(x + 2 * offset, y + 2 * offset, size, 0, 2 * Math.PI);
                context.fillStyle = "white";
                context.fill();
                break;
            case Directions.LEFT:
                context.beginPath();
                context.arc(x + offset, y + offset, size, 0, 2 * Math.PI);
                context.arc(x + offset, y + 2 * offset, size, 0, 2 * Math.PI);
                context.fillStyle = "white";
                context.fill();
                break;
        }

        // paint the tail
        // set fillStyle to "#333333" and paint the tail cells
        context.fillStyle = '#333333';
        this.tail.forEach(cell => {
            context.fillRect(cellSideLength * cell.x, cellSideLength * cell.y, cellSideLength, cellSideLength);
        })
    }

    move() {
        // the current head becomes a tail cell
        this.tail.push(this.head);

        // call getNext() to get the new head cell
        this.head = this.getNext();

        // first item (this is the last tail cell - the one farthest from the head)
        // last item (this is the tail cell closes to the head)
        // if tail cells exceed tail length, remove the last cell using shift() (first in the array)
        if (this.tail.length > this.size) {
            this.tail.shift();
        }
    }

    getNext() {
        // get the new head cell { x, y } based on the current direction
        switch (this.direction) {
            case Directions.UP:
                return {
                    x: this.head.x,
                    y: this.head.y - 1
                };
            case Directions.DOWN:
                return {
                    x: this.head.x,
                    y: this.head.y + 1
                };
            case Directions.RIGHT:
                return {
                    x: this.head.x + 1,
                    y: this.head.y
                };
            case Directions.LEFT:
                return {
                    x: this.head.x - 1,
                    y: this.head.y
                };

        }
    }

    getHead() {
        // return head cell
        // code...
    }

    isWorm(cell) {
        // return boolean / object based on whether cell is a tail cell (use find())
        return this.tail.find(
            tail => tail.x === cell.x && tail.y === cell.y
        );
    }

    grow(qty = 3) {
        // increase size by qty
        this.size += 3;
    }

    setDirection(direction) {
        // the snake cannot take a U-turn. Based on this set the new direction.
        if (this.direction === Directions.UP && direction === Directions.DOWN) {
            return;
        }

        if (this.direction === Directions.DOWN && direction === Directions.UP) {
            return;
        }

        if (this.direction === Directions.RIGHT && direction === Directions.LEFT) {
            return;
        }

        if (this.direction === Directions.LEFT && direction === Directions.RIGHT) {
            return;
        }

        this.direction = direction;
    }
}

// export the Worm class (default)
export default Worm;