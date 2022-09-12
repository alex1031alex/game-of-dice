import "./player.scss";
import {FC} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

interface TProps  {
    id: string;
    totalScore: number;
    currentScore: number;
}

export const Player: FC<TProps> = ({id, totalScore, currentScore}) => {
    const isActive = useSelector((state: RootState) => state.activePlayer) === id;
    return (
        <div className="player">
            <h2 className={`player__title ${isActive && "player__title--active"}`}>{id}</h2>
            <p className="player__total-score">{totalScore}</p>
            <div className="player__current-container">
                <p className="player__current-label">current</p>
                <p className="player__current-score">{currentScore}</p>
            </div>
        </div>
    );
};