const WIDTH = 50; // number of squares horizontal
const HEIGHT = 20; // number of squares vertical
const CELLSIZE = 20; // size of one square
export const SCALE = 1.0; // draw everything twice as big and make it smaller to get clean lines even on a retina screen
export const SPEED = 200; // initial speed
export const MAX_LEVEL = 10;
export const APPLES = 5;

// level background colors
export const COLORS = [
    "#eaeaea",
    "#ffffcc",
    "#ffe6ee",
    "#e6f2ff",
    "#e6ffe6",
    "#fff0e6",
    "#e6e6ff",
    "#f9f2ec",
    "#e6ffe6",
    "#ff4d4d",
];

export const Directions = {
    UP: 'UP',
    DOWN: 'DOWN',
    RIGHT: 'RIGHT',
    LEFT: 'LEFT'
};

export {
    WIDTH,
    HEIGHT,
    CELLSIZE
}