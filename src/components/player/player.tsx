import "./player.scss";
import {FC} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {Player as IPlayer} from "../../store/reducer";

interface TProps  {
    id: string;
    totalScore: number;
}

export const Player: FC<TProps> = ({id, totalScore}) => {
    const isActive = useSelector((state: RootState) => state.activePlayer) === id;
    const player = useSelector<RootState>((state) => state.entities[id]) as IPlayer;

    return (
        <div className="player">
            <h2 className={`player__title ${isActive && "player__title--active"}`}>{id}</h2>
            <p className="player__total-score">{totalScore}</p>
            <div className="player__current-container">
                <p className="player__current-label">Current</p>
                <p className="player__current-score">{player.currentScore}</p>
            </div>
        </div>
    );
};