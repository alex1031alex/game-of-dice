import "./app.scss";
import {ChangeEvent, FC} from "react";
import { Button } from "@components/button/button";
import { Player } from "@components/player/player";
import { DiceList } from "@components/dice-list/diceList";
import {useSelector, useDispatch} from "react-redux";
import {setDice, setTargetScore, holdResult, resetGame} from "../../store/reducer";
import {PayloadAction} from "@reduxjs/toolkit";
import {getRandomNumber} from "../../utils";
import {selectTargetScore, selectWinner} from "../../store/selectors";

export const App: FC = () => {
    const dispatch = useDispatch();
    const targetScore = useSelector(selectTargetScore) as number | "";
    const winner = useSelector(selectWinner);

    const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
            dispatch(setTargetScore(evt.target.value));
    }
    const newGameClickHandler = () => {
        dispatch(resetGame());
    };
    const rollDiceClickHandler = () => {
        const payload = new Array(2).fill("").map(() => getRandomNumber());
        dispatch<PayloadAction>(setDice(payload));
    };
    const holdClickHandler = () => {
      dispatch<PayloadAction>(holdResult());
    };

    return (
        <div className="app">
            <h1 className="app__title">Game of dice</h1>
            <div className="container app__container">
                <Button onClick={newGameClickHandler} className={"button--new-game"}>New game</Button>
                <div className="app__playground">
                    <Player id="Player 1" />
                    <div className="app__controls">
                        <DiceList className="app__dice-list"  />
                        <Button onClick={rollDiceClickHandler} className="button--roll" disabled={!targetScore || !!winner}>Roll dice</Button>
                        <Button onClick={holdClickHandler} className="button--hold app__button" disabled={!targetScore || !!winner}>Hold</Button>
                        <input className="app__input" type="number" placeholder="target score" value={targetScore} onChange={onInputChange} />
                    </div>
                    <Player id="Player 2" />
                </div>
            </div>
        </div>
    );
}
