import { WIDTH, HEIGHT, CELLSIZE, SPEED, COLORS, Directions, MAX_LEVEL } from './constants.js';
import Grid from './Grid.js';
import Worm from './Worm.js';

class Game {
    constructor() {
        // create a canvas DOM node and store in a canvas data member
        this.canvas = document.createElement('canvas');
        this.running = false;

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
        window.addEventListener('keydown', this.onKeyDown);
    }

    start() {
        console.log('this (start) = ', this);
        console.log('game on!');

        this.paint();

        // set running, nextMove
        this.running = true;
        this.nextMove = 0;

        // start the game loop
        requestAnimationFrame(this.loop);
    }

    stop() {
        // unset running
        // code...
    }

    loop = (time) => {
        // console.log('this (loop) = ', this);

        // execute only if game is running
        if (this.running) {
            // set loop to run again before next display refresh
            requestAnimationFrame(this.loop);

            // execute loop logic only if it is time for the next change in display (nextMove)
            if (time >= this.nextMove) {
                // set up nextMove time
                this.nextMove = time + SPEED;
                console.log('we will move the snake');

                // move the snake
                this.worm.move();
                this.paint();

                // check game state and switch based on it
                switch (this.checkState()) {
                    // -1 -> game is over
                    case -1:
                        this.gameOver();
                    //  1 -> apple eaten -> grow the worm, add score, eat apple, and check if level is complete
                    case 1:
                        this.score += 100;
                        this.worm.grow();
                        if (this.grid.isDone()) {
                            this.levelUp();
                        }
                    //  default -> repaint
                }
            }
        }
    }

    levelUp() {
        // increase score, level
        this.score += 1000;
        ++this.configuration.level;

        // if not completed last level...
        if (this.configuration.level < MAX_LEVEL) {
            // change speed, change color, and seed the grid with apples
            this.configuration.speed -= 10;
            this.configuration.color = COLORS[this.configuration.level];
            this.grid.seed();
        } else {
            // else end game (win)
            this.win();
        }
    }

    win() {
        // declare win and stop
        alert('You have won the game! Your score is ' + this.score);
        this.running = false;
    }

    gameOver() {
        // declare game over and stop
        this.running = false;
        alert('Game over! Better luck next time!!');
    }

    checkState() {
        // get worm head cell
        const cell = this.worm.head;

        // if cell is outside grid, or cell is worm tail cell, return -1 (game over)
        if (this.grid.isOutside(cell)) {
            return -1;
        }

        if (this.worm.isWorm(cell)) {
            return -1;
        }

        // if cell is an apple, return 1
        if (this.grid.isApple(cell)) {
            this.grid.eat(cell);
            return 1;
        }

        // nothing special happened - return 0
        // code...
    }

    // isOutside(cell) {
    //     // return true/false based on worm head cell is inside or outside the grid
    //     // code...
    // }

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
        this.worm.paint(ctx);
    }

    onKeyDown = (event) => {
        // check event.key, preventDefault() and set worm direction
        event.preventDefault();

        console.log(event.key);

        switch (event.key) {
            case 'ArrowUp':
                this.worm.setDirection(Directions.UP);
                break;
            case 'ArrowDown':
                this.worm.setDirection(Directions.DOWN);
                break;
            case 'ArrowRight':
                this.worm.setDirection(Directions.RIGHT);
                break;
            case 'ArrowLeft':
                this.worm.setDirection(Directions.LEFT);
                break;
        }
    }
}

// export the Game class (default)
export default Game;