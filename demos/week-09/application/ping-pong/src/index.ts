import { IScore, State, getRandomVelocity } from "./utils.js";
// console.log("hello, TS");

const board = document.querySelector(".board") as HTMLElement;
const ball = document.querySelector(".ball") as HTMLElement;
const paddle_1 = document.querySelector(".paddle_1") as HTMLElement;
const paddle_2 = document.querySelector(".paddle_2") as HTMLElement;
const score_1 = document.querySelector(".player_1_score") as HTMLElement;
const score_2 = document.querySelector(".player_2_score") as HTMLElement;
const message = document.querySelector(".message") as HTMLElement;

let ball_coord = ball.getBoundingClientRect();
const original_ball_coord = ball_coord;

let paddle_1_coord = paddle_1.getBoundingClientRect();
let paddle_2_coord = paddle_2.getBoundingClientRect();
let board_coord = board.getBoundingClientRect();

class Game {
    // game state (data members)
    private state = State.STOPPED;
    private scores: IScore = {
        player1: 0,
        player2: 0,
    };

    // bind listeners at the start of the game
    start() {
        this.bindListeners();
    }

    // to reset game state on completion of a rally
    reset() {
        this.state = State.STOPPED;

        // bring the ball back to the center
        ball.style.top = original_ball_coord.top + "px";
        ball.style.left = original_ball_coord.left + "px";

        ball_coord = ball.getBoundingClientRect();

        message.innerText = "Press Enter to start the game";
    }

    // set up event handling - handle 'keydown' event - check event.key and react to 'Enter' or one of the 4 player controls ('w', 's', 'ArrowUp', 'ArrowDown')
    bindListeners() {
        document.addEventListener("keydown", (event) => {
            const key = event.key;

            if (this.state === State.STOPPED) {
                // if Enter key is pressed start the game
                if (key === "Enter") {
                    console.log("start the game");
                    this.state = State.STARTED;
                    message.innerText = "Game on!";

                    requestAnimationFrame(() => {
                        this.moveBall(getRandomVelocity());
                    });
                }
            } else {
                let value;

                switch (key) {
                    case "w":
                        console.log("paddle 1 up");

                        value = paddle_1_coord.top - window.innerHeight * 0.085;

                        if (value < board_coord.top) {
                            value = board_coord.top;
                        }

                        paddle_1.style.top = value + "px";

                        paddle_1_coord = paddle_1.getBoundingClientRect();

                        break;
                    case "s":
                        console.log("paddle 1 down");

                        value = paddle_1_coord.top + window.innerHeight * 0.085;

                        if (value > board_coord.bottom - 100) {
                            value = board_coord.bottom - 100;
                        }

                        paddle_1.style.top = value + "px";

                        paddle_1_coord = paddle_1.getBoundingClientRect();

                        break;
                    case "ArrowUp":
                        console.log("paddle 2 up");

                        value = paddle_2_coord.top - window.innerHeight * 0.085;

                        if (value < board_coord.top) {
                            value = board_coord.top;
                        }

                        paddle_2.style.top = value + "px";

                        paddle_2_coord = paddle_2.getBoundingClientRect();

                        break;
                    case "ArrowDown":
                        console.log("paddle 2 down");

                        value = paddle_2_coord.top + window.innerHeight * 0.085;

                        if (value > board_coord.bottom - 100) {
                            value = board_coord.bottom - 100;
                        }

                        paddle_2.style.top = value + "px";

                        paddle_2_coord = paddle_2.getBoundingClientRect();

                        break;
                }
            }
        });
    }

    // generate a random velocity and return it
    // getVelocity() {}

    // generate a random velocity to be set when ball bounces off a player's paddle (bat), and return it
    // bounce( velocity ) {
    //     let newVelocity = this.getVelocity();

    //     // set opposite direction for x, and maintain direction for y
    //     let curXDirection = velocity.dx > 0 ? 1 : -1;
    //     let curYDirection = velocity.dy > 0 ? 1 : -1;

    //     newVelocity.dx = Math.abs( newVelocity.dx ) * -curXDirection;
    //     newVelocity.dy = Math.abs( newVelocity.dy ) * curYDirection;

    //     return newVelocity;
    // };

    // game loop
    moveBall(velocity: any) {
        if (
            ball_coord.top <= board_coord.top ||
            ball_coord.bottom >= board_coord.bottom
        ) {
            // if ball hits the top or bottom edge, we need to change the direction
            velocity.y = -velocity.y;
        }

        // if ball hits the paddle, we need to change the direction (with a different velocity ideally)
        // ball hits left paddle
        if (
            ball_coord.left <= paddle_1_coord.right &&
            ball_coord.top >= paddle_1_coord.top &&
            ball_coord.bottom <= paddle_1_coord.bottom
        ) {
            velocity.x = -velocity.x;
        }

        // ball hits right paddle
        if (
            ball_coord.right >= paddle_2_coord.left &&
            ball_coord.top >= paddle_2_coord.top &&
            ball_coord.bottom <= paddle_2_coord.bottom
        ) {
            velocity.x = -velocity.x;
        }

        // ball moved out of right edge - player 1 wins
        if (ball_coord.right >= board_coord.right) {
            ++this.scores.player1;
            score_1.innerText = "" + this.scores.player1;
            this.reset();
        }

        // ball moved out of left edge - player 2 wins
        if (ball_coord.left <= board_coord.left) {
            ++this.scores.player2;
            score_2.innerText = "" + this.scores.player2;
            this.reset();
        }

        if (this.state === State.STARTED) {
            // move the ball by updating values for top, left styles inline
            ball.style.top = ball_coord.top + velocity.y + "px";
            ball.style.left = ball_coord.left + velocity.x + "px";

            // get the new ball_coord using ball.getBoundingClientRect()
            ball_coord = ball.getBoundingClientRect();

            // set up recursive call of game loop (moveBall) before next display refresh
            requestAnimationFrame(() => {
                this.moveBall(velocity);
            });
        }
    }
}

// create and start the game
const game = new Game();
game.start();
