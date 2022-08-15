import "./app.scss";
import {FC} from "react";
import {NewGame} from "@components/new-game/new-game";

export const App: FC = () => {
    const newGameClickHandler = () => {};
    return (
        <div className="app container">
            <h1 className="app__title">Game of dice</h1>
            <NewGame onClick={newGameClickHandler} />
        </div>
    );
}