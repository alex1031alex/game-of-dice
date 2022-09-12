import "./app.scss";
import {ChangeEvent, Dispatch, FC} from "react";
import { Button } from "@components/button/button";
import { Player } from "@components/player/player";
import { DiceList } from "@components/dice-list/diceList";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store/store";
import {setDice, setTargetScore} from "../../store/reducer";
import {PayloadAction} from "@reduxjs/toolkit";
import {getRandomNumber} from "../../utils";

export const App: FC = () => {
    const dispatch = useDispatch();
    const targetScore = useSelector<RootState>((state) => state.targetScore) as number | "";
    const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
            dispatch(setTargetScore(evt.target.value));
    }

    const newGameClickHandler = () => {};
    const rollDiceClickHandler = () => {
        const payload = new Array(2).fill("").map(() => getRandomNumber());
        dispatch<PayloadAction>(setDice(payload));
    };

    return (
        <div className="app">
            <h1 className="app__title">Game of dice</h1>
            <div className="container app__container">
                <Button onClick={newGameClickHandler} className={"button--new-game"}>New game</Button>
                <div className="app__playground">
                    <Player id="Player 1" currentScore={0} totalScore={0} />
                    <div className="app__controls">
                        <DiceList className="app__dice-list"  />
                        <Button onClick={rollDiceClickHandler} className="button--roll" disabled={!targetScore}>Roll dice</Button>
                        <Button onClick={() => {}} className="button--hold app__button" disabled={!targetScore}>Hold</Button>
                        <input className="app__input" type="number" placeholder="target score" value={targetScore} onChange={onChange} />
                    </div>
                    <Player id="Player 2" currentScore={0} totalScore={7} />
                </div>
            </div>
        </div>
    );
}