export enum State {
    STARTED = "STARTED",
    STOPPED = "STOPPED",
}

export interface IScore {
    player1: number;
    player2: number;
}

export interface IVelocity {
    x: number;
    y: number;
}

export const random = (min: number, max: number) =>
    Math.floor(min + Math.random() * (max - min + 1));

export const getRandomVelocity = () => {
    let x = random(3, 8); // 4
    let y = random(3, 8); // 6

    const xNegative = random(0, 1) ? 1 : -1;
    const yNegative = random(0, 1) ? 1 : -1;

    x = x * xNegative; // -4 / 4 (50% chance for either)
    y = y * yNegative; // -6 / 6 (50% chance for either)

    const velocity: IVelocity = {
        // x: x,
        // y: y
        x,
        y,
    };

    return velocity;
};

console.log("utils");
