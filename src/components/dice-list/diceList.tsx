import {FC} from "react";
import {DiceItem} from "@components/dice-item/diceItem";
import "./dice-list.scss";
import classNames from "classnames";

interface TProps {
    className?: string;
}

export const DiceList: FC<TProps> = (props) => {
    const {className} = props;
    return (
        <div className={classNames("dice-list", className)}>
            <DiceItem value={3}/>
            <DiceItem value={4}/>
        </div>
    );
};
