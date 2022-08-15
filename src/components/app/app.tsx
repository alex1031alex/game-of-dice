import "./app.scss";
import { FC } from "react";
import { NewGame } from "@components/new-game/new-game";
import { Player } from "@components/player/player";

export const App: FC = () => {
    const newGameClickHandler = () => {};
    return (
        <div className="app">
            <h1 className="app__title">Game of dice</h1>
            <div className="container app__container">
                <NewGame onClick={newGameClickHandler} />
                <div className="app__playground">
                    <Player name="Player 1" isActive={true} currentScore={0} totalScore={0} />
                    <div className="app__controls"></div>
                    <Player name="Player 2" isActive={false} currentScore={0} totalScore={7} />
                </div>
            </div>
        </div>
    );
}