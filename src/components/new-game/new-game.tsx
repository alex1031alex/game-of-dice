import "./new-game.scss";
import {FC, MouseEventHandler} from "react";

interface TProps {
    onClick: MouseEventHandler
}

export const NewGame: FC<TProps> = ({onClick}) => {
    return (
        <button className="new-game" onClick={onClick}>New game</button>
    );
};