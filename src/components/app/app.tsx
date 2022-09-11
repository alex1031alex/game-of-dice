import "./app.scss";
import { FC } from "react";
import { Button } from "@components/button/button";
import { Player } from "@components/player/player";
import { DiceList } from "@components/dice-list/diceList";

export const App: FC = () => {
    const newGameClickHandler = () => {};
    return (
        <div className="app">
            <h1 className="app__title">Game of dice</h1>
            <div className="container app__container">
                <Button onClick={newGameClickHandler} className={"button--new-game"}>New game</Button>
                <div className="app__playground">
                    <Player name="Player 1" isActive={true} currentScore={0} totalScore={0} />
                    <div className="app__controls">
                        <DiceList className="app__dice-list"  />
                        <Button onClick={() => {}} className="button--roll">Roll dice</Button>
                        <Button onClick={() => {}} className="button--hold app__button">Hold</Button>
                        <input className="app__input" type="number" placeholder="final score" />
                    </div>
                    <Player name="Player 2" isActive={false} currentScore={0} totalScore={7} />
                </div>
            </div>
        </div>
    );
}