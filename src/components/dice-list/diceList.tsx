import {FC} from "react";
import {DiceItem} from "@components/dice-item/diceItem";
import "./dice-list.scss";
import classNames from "classnames";
import {useSelector} from "react-redux";
import {selectDice} from "../../store/selectors";

interface TProps {
    className?: string;
}

export const DiceList: FC<TProps> = (props) => {
    const {className} = props;
    const dice = useSelector(selectDice);

    return (
        <div className={classNames("dice-list", className)}>
            {dice.length === 2 && dice.map((it, index) => {
                return <DiceItem key={index} value={it}/>
            })}
        </div>
    );
};
