import "./player.scss";
import {FC} from "react";
import {useSelector} from "react-redux";
import {Player as IPlayer, Id} from "../../types";
import {selectWinner, selectActivePlayer, selectPlayerById} from "../../store/selectors";

interface TProps  {
    id: Id;
}

export const Player: FC<TProps> = ({id}) => {
    const player = useSelector(selectPlayerById(id)) as IPlayer;
    const winner = useSelector(selectWinner);
    const isActive = useSelector(selectActivePlayer) === id && !winner;

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