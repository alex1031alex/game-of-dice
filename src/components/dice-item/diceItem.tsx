import "./diceItem.scss";
import {FC} from "react";

interface TProps {
    value: number;
}

export const DiceItem: FC<TProps> = (props) => {
    const {value} = props;
    return (
        <div className={`dice-item dice-item--${value}`} />
    );
};
