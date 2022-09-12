import "./button.scss";
import {ButtonHTMLAttributes, FC} from "react";
import classNames from "classnames";

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({onClick, className, disabled, children}) => {
    return (
        <button className={classNames("button", className)} onClick={onClick} disabled={disabled}>{children}</button>
    );
};