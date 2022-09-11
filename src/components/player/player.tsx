import "./player.scss";
import {FC} from "react";

interface TProps  {
    name: string;
    isActive: boolean;
    totalScore: number;
    currentScore: number;
}

export const Player: FC<TProps> = ({name, isActive, totalScore, currentScore}) => {
    return (
        <div className="player">
            <h2 className={`player__title ${isActive && "player__title--active"}`}>{name}</h2>
            <p className="player__total-score">{totalScore}</p>
            <div className="player__current-container">
                <p className="player__current-label">current</p>
                <p className="player__current-score">{currentScore}</p>
            </div>
        </div>
    );
};