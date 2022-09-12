export type Id = "Player 1" | "Player 2";

export interface Player {
    id: Id;
    currentScore: number;
    totalScore: number;
}

export interface InitialState {
    winner: null | Id;
    targetScore: number | "";
    activePlayer: Id;
    dice: number[]
    entities: {[key: string]: Player},
    ids: Id[]
}