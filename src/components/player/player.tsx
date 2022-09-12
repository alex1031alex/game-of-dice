import "./player.scss";
import {FC} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {Player as IPlayer} from "../../store/reducer";

interface TProps  {
    id: string;
}

export const Player: FC<TProps> = ({id}) => {
    const player = useSelector<RootState>((state) => state.entities[id]) as IPlayer;
    const winner = useSelector<RootState>((state) => state.winner);
    const isActive = useSelector((state: RootState) => state.activePlayer) === id && !winner;

    return (
        <div className="player">
            <h2 className={`player__title ${isActive && "player__title--active"}`}>{winner === id ? "WINNER!" : id}</h2>
            <p className="player__total-score">{player.totalScore}</p>
            <div className="player__current-container">
                <p className="player__current-label">Current</p>
                <p className="player__current-score">{player.currentScore}</p>
            </div>
        </div>
    );
};