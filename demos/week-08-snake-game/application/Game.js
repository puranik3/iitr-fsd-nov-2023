import { WIDTH, HEIGHT, CELLSIZE, SPEED, COLORS } from './constants.js';
import Grid from './Grid.js';
import Worm from './Worm.js';

class Game {
    constructor() {
        // create a canvas DOM node and store in a canvas data member
        this.canvas = document.createElement('canvas');

        // add it to the DOM
        document.getElementById('root').appendChild(this.canvas);

        // set physical size in px (style.width, style.height)
        this.canvas.style.width = WIDTH * CELLSIZE + "px";
        this.canvas.style.height = HEIGHT * CELLSIZE + "px";

        // set logical size as absolute values (width, height)
        this.canvas.width = WIDTH * CELLSIZE;
        this.canvas.height = HEIGHT * CELLSIZE;

        // create a configuration data member to share across the app
        // level, speed, width, height, nbCellsX, nbCellsY, cellSideLength, color
        this.configuration = {
            level: 0,
            speed: SPEED,
            width: this.canvas.width, // 1000
            height: this.canvas.height, // 400
            numCellsX: WIDTH, // 50
            numCellsY: HEIGHT, // 20
            cellSize: CELLSIZE,
            color: COLORS[0]
        };

        // score data member
        this.score = 0;

        // grid and worm data members
        this.grid = new Grid(this);
        this.worm = new Worm(this);

        // set 'keydown' handler
        // code...
    }

    start() {
        console.log('game on!');

        this.paint();

        // set running, nextMove
        // code...

        // start the game loop
        // code...
    }

    stop() {
        // unset running
        // code...
    }

    loop = (time) => {
        // execute only if game is running
        // set loop to run again before next display refresh
        // code...

        // execute loop logic only if it is time for the next change in display (nextMove)
        // set up nextMove time
        // code...

        // move the snake
        // code...

        // check game state and switch based on it
        // -1 -> game is over
        //  1 -> apple eaten -> grow the worm, add score, eat apple, and check if level is complete
        //  default -> repaint
    }

    levelUp() {
        // increase score, level
        // code...

        // if not completed last level...
        // change speed, change color, and seed the grid with apples
        // code...

        // else end game (win)
        // code...
    }

    win() {
        // declare win and stop
        // code...
    }

    gameOver() {
        // declare game over and stop
        // code...
    }

    checkState() {
        // get worm head cell
        // code...

        // if cell is outside grid, or cell is worm tail cell, return -1 (game over)
        // code...

        // if cell is an apple, return 1
        // code...

        // nothing special happened - return 0
        // code...
    }

    isOutside(cell) {
        // return true/false based on worm head cell is inside or outside the grid
        // code...
    }

    paint() {
        // get required details from the game configuration
        const {
            color,
            width,
            height
        } = this.configuration;

        // get canvas context and set fillStyle and call fillRect
        const ctx = this.canvas.getContext('2d');
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, width, height);

        // draw the grid and the worm
        this.grid.paint(ctx)
    }

    onKeyDown = (event) => {
        // check event.key, preventDefault() and set worm direction
        // code...
    }
}

// export the Game class (default)
export default Game;